/* ==========================================================================
   Shraddha Beauty Parlour — Anti-Gravity Three.js & GSAP Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Mouse Tracking State
  const mouse = {
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0
  };

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  /* ------------------------------------------------------------------------
   * 1. THREE.JS WEBGL BACKGROUND & PARTICLE SYSTEM
   * ------------------------------------------------------------------------ */
  const container = document.getElementById('webgl-container');
  if (!container) return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0D0309, 0.05);

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 10;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // --- A. Iridescent Morphing Veil (Custom Shader) ---
  const veilGeometry = new THREE.PlaneGeometry(35, 25, 128, 128);

  const vertexShader = `
    varying vec2 vUv;
    varying float vElevation;
    uniform float uTime;
    uniform vec2 uMouse;

    void main() {
      vUv = uv;
      vec3 pos = position;
      
      float elevation = sin(pos.x * 0.8 + uTime * 0.5) * cos(pos.y * 0.8 + uTime * 0.4) * 1.2;
      elevation += sin(pos.x * 2.0 + pos.y * 1.5 + uTime * 0.8) * 0.4;
      
      // Mouse influence
      float dist = distance(uv, uMouse * 0.5 + 0.5);
      elevation += exp(-dist * 3.0) * 0.8;

      pos.z += elevation;
      vElevation = elevation;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec2 vUv;
    varying float vElevation;
    uniform float uTime;

    void main() {
      // Obsidian Rose Wine -> Champagne Gold -> Iridescent Violet
      vec3 colorObsidian = vec3(0.06, 0.02, 0.05);
      vec3 colorRoseWine = vec3(0.25, 0.07, 0.16);
      vec3 colorGold     = vec3(0.88, 0.75, 0.55);
      vec3 colorViolet   = vec3(0.42, 0.22, 0.44);

      float mix1 = sin(vElevation * 2.5 + uTime * 0.4) * 0.5 + 0.5;
      float mix2 = cos(vUv.x * 3.14 + uTime * 0.2) * 0.5 + 0.5;

      vec3 finalColor = mix(colorObsidian, colorRoseWine, mix1);
      finalColor = mix(finalColor, colorGold, vElevation * 0.35 + 0.2);
      finalColor = mix(finalColor, colorViolet, mix2 * 0.35);

      gl_FragColor = vec4(finalColor, 0.92);
    }
  `;

  const veilUniforms = {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) }
  };

  const veilMaterial = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: veilUniforms,
    wireframe: false,
    transparent: true
  });

  const veilMesh = new THREE.Mesh(veilGeometry, veilMaterial);
  veilMesh.position.z = -4;
  scene.add(veilMesh);

  // --- B. Anti-Gravity Cosmetic Dust Particles ---
  const particleCount = 1200;
  const particleGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const speeds = new Float32Array(particleCount);
  const sizes = new Float32Array(particleCount);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 28;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 24;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 12;

    speeds[i] = 0.006 + Math.random() * 0.018;
    sizes[i]  = 2.0 + Math.random() * 4.5;
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  // Canvas texture for glowing particles
  function createParticleTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 244, 225, 1)');
    gradient.addColorStop(0.3, 'rgba(226, 192, 141, 0.7)');
    gradient.addColorStop(0.7, 'rgba(232, 180, 200, 0.2)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();
    return new THREE.CanvasTexture(canvas);
  }

  const particleMaterial = new THREE.PointsMaterial({
    size: 0.18,
    map: createParticleTexture(),
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    opacity: 0.85
  });

  const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particleSystem);

  // --- C. 3D Floating Translucent Glass Orbs ---
  const orbGroup = new THREE.Group();
  const orbCount = 5;
  const orbMeshes = [];

  const orbMaterial = new THREE.MeshPhysicalMaterial({
    transmission: 0.92,
    opacity: 1,
    transparent: true,
    roughness: 0.1,
    ior: 1.45,
    reflectivity: 0.9,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    color: 0xFDF8F5,
    attenuationColor: 0xE2C08D,
    attenuationDistance: 1.2
  });

  for (let i = 0; i < orbCount; i++) {
    const radius = 0.4 + Math.random() * 0.6;
    const orbGeo = new THREE.SphereGeometry(radius, 32, 32);
    const orb = new THREE.Mesh(orbGeo, orbMaterial);

    orb.position.set(
      (Math.random() - 0.5) * 16,
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 6
    );

    orb.userData = {
      floatSpeed: 0.008 + Math.random() * 0.012,
      rotSpeed: 0.005 + Math.random() * 0.01,
      initialY: orb.position.y
    };

    orbMeshes.push(orb);
    orbGroup.add(orb);
  }
  scene.add(orbGroup);

  // Lighting for Glass Orbs
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(0xE2C08D, 2.5, 20);
  pointLight1.position.set(5, 5, 5);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xE8B4C8, 2.0, 20);
  pointLight2.position.set(-5, -5, 3);
  scene.add(pointLight2);

  // Render Loop
  const clock = new THREE.Clock();

  function animateWebGL() {
    requestAnimationFrame(animateWebGL);

    const elapsedTime = clock.getElapsedTime();

    // Damping mouse position
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    // Update Veil Shader
    veilUniforms.uTime.value = elapsedTime;
    veilUniforms.uMouse.value.set(mouse.x, mouse.y);

    // Update Upward Floating Particles
    const posAttr = particleGeometry.attributes.position;
    for (let i = 0; i < particleCount; i++) {
      let y = posAttr.getY(i);
      y += speeds[i];

      // Reset when particle reaches top
      if (y > 12) {
        y = -12;
        posAttr.setX(i, (Math.random() - 0.5) * 28);
      }

      // Subtle mouse sway
      let x = posAttr.getX(i);
      x += Math.sin(elapsedTime + i) * 0.003 + mouse.x * 0.005;

      posAttr.setX(i, x);
      posAttr.setY(i, y);
    }
    posAttr.needsUpdate = true;

    // Update Floating Glass Orbs
    orbMeshes.forEach((orb) => {
      orb.rotation.x += orb.userData.rotSpeed;
      orb.rotation.y += orb.userData.rotSpeed;
      orb.position.y = orb.userData.initialY + Math.sin(elapsedTime * 1.5 + orb.position.x) * 0.6;
    });

    // Parallax Camera Sway
    camera.position.x = mouse.x * 0.8;
    camera.position.y = mouse.y * 0.8;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  animateWebGL();

  // Resize Listener
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  /* ------------------------------------------------------------------------
   * 2. GSAP ZERO-GRAVITY FLOATING & SCROLL ANIMATIONS
   * ------------------------------------------------------------------------ */
  if (window.gsap) {
    gsap.registerPlugin(ScrollTrigger);

    // Continuous Weightless Yoyo Float Animations
    gsap.to('.gsap-float-yoyo-1', {
      y: -22,
      rotationZ: 2.5,
      rotationX: 3,
      duration: 4.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to('.gsap-float-yoyo-2', {
      y: -30,
      rotationZ: -3.5,
      rotationY: 5,
      duration: 5.4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.7
    });

    gsap.to('.gsap-float-yoyo-3', {
      y: -18,
      rotationZ: 1.8,
      rotationX: -4,
      duration: 4.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1.4
    });

    // Entrance Staggers for Cards
    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: '#services',
        start: 'top 80%'
      },
      y: 60,
      opacity: 0,
      duration: 1.2,
      stagger: 0.18,
      ease: 'power3.out'
    });

    gsap.from('.location-grid > div', {
      scrollTrigger: {
        trigger: '#location',
        start: 'top 80%'
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.25,
      ease: 'power3.out'
    });
  }

  /* ------------------------------------------------------------------------
   * 3. TRILINGUAL DICTIONARY SYSTEM
   * ------------------------------------------------------------------------ */
  const translations = {
    en: {
      nav_home: "Home",
      nav_services: "Services",
      nav_experience: "Experience",
      nav_location: "Location",
      female_only_badge: "Female-Only Sanctuary",
      cta_book: "Book Experience",
      hero_eyebrow: "Sai Nagar, Amravati • Weightless Beauty Realm",
      hero_title_1: "Beauty Without",
      hero_title_2: "Gravity",
      hero_desc: "Immerse yourself in an ethereal sanctuary of royal hair artistry, radiant skin elixirs, and bespoke bridal luxury tailored exclusively for women.",
      hero_primary_cta: "Inquire on WhatsApp",
      hero_secondary_cta: "Explore Treatments",
      stat_female: "Female Privacy",
      stat_hours: "Open All Days",
      stat_consultation: "Personal Care",
      services_eyebrow: "✦ Bespoke Beauty Catalog ✦",
      services_title: "Curated Ethereal Services",
      services_subtitle: "Every treatment is crafted with meticulous care in a calm, female-only setting.",
      pricing_notice: "Consultation-Based Pricing: Service prices are customized to your individual hair and skin needs. Contact us directly on WhatsApp for inquiries."
    },
    mr: {
      nav_home: "मुख्य पृष्ठ",
      nav_services: "सेवा",
      nav_experience: "अनुभव",
      nav_location: "पत्ता",
      female_only_badge: "फक्त महिलांसाठी",
      cta_book: "अपॉइंटमेंट घ्या",
      hero_eyebrow: "साई नगर, अमरावती • वजनहीन सौंदर्य जग",
      hero_title_1: "सौंदर्य गुरुत्वाकर्षणाशिवाय",
      hero_title_2: "श्रद्धा ब्युटी पार्लर",
      hero_desc: "फक्त महिलांसाठी खास डिझाइन केलेल्या हेअर आर्टिस्ट्री, स्किन केअर आणि ब्राइडल मेकअपच्या दुनियेत प्रवेश करा.",
      hero_primary_cta: "व्हॉट्सॲपवर चौकशी करा",
      hero_secondary_cta: "सेवा पहा",
      stat_female: "१००% महिला गोपनीयता",
      stat_hours: "सकाळी ९ ते रात्री ९",
      stat_consultation: "वैयक्तिक काळजी",
      services_eyebrow: "✦ विशेष सौंदर्य सेवा ✦",
      services_title: "उत्कृष्ट ब्युटी सेवा",
      services_subtitle: "शांत आणि सुरक्षित वातावरणात प्रत्येक ट्रीटमेंट काळजीपूर्वक केली जाते.",
      pricing_notice: "सल्लामसलत आधारित दर: तुमच्या गरजेनुसार दर ठरवले जातात. कृपया व्हॉट्सॲपवर संपर्क साधा."
    },
    hi: {
      nav_home: "मुख्य पृष्ठ",
      nav_services: "सेवाएं",
      nav_experience: "अनुभव",
      nav_location: "स्थान",
      female_only_badge: "केवल महिलाओं के लिए",
      cta_book: "बुक करें",
      hero_eyebrow: "साईं नगर, अमरावती • दिव्य सौंदर्य",
      hero_title_1: "सौंदर्य बिना किसी",
      hero_title_2: "बंधन के",
      hero_desc: "केवल महिलाओं के लिए तैयार की गई हेयर आर्टिस्ट्री, स्किनकेयर और ब्राइडल मेकओवर का अनुभव करें।",
      hero_primary_cta: "व्हाट्सएप पर पूछें",
      hero_secondary_cta: "सेवाएं देखें",
      stat_female: "महिला गोपनीयता",
      stat_hours: "रोजाना सुबह 9 से रात 9",
      stat_consultation: "व्यक्तिगत देखभाल",
      services_eyebrow: "✦ ब्युटी कैटलॉग ✦",
      services_title: "विशेष सौंदर्य सेवाएं",
      services_subtitle: "शांत और सुरक्षित माहौल में आपकी सुंदरता को निखारने वाली सेवाएं।",
      pricing_notice: "परामर्श आधारित मूल्य: आपकी आवश्यकताओं के अनुसार मूल्य तय किए जाते हैं। व्हाट्सएप पर संपर्क करें।"
    }
  };

  const langBtns = document.querySelectorAll('.lang-btn');

  function setLanguage(lang) {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    langBtns.forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('shraddha_lang', lang);
  }

  langBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // Load saved language
  const savedLang = localStorage.getItem('shraddha_lang') || 'en';
  setLanguage(savedLang);

  /* ------------------------------------------------------------------------
   * 4. INTERACTIVE WHATSAPP APPOINTMENT MODAL
   * ------------------------------------------------------------------------ */
  const modal = document.getElementById('appointment-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  const serviceSelect = document.getElementById('service-select');
  const inquiryForm = document.getElementById('whatsapp-inquiry-form');

  // Pre-fill date to tomorrow
  const dateInput = document.getElementById('preferred-date');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];
  }

  openModalBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const requestedService = btn.getAttribute('data-service');
      if (requestedService && serviceSelect) {
        serviceSelect.value = requestedService;
      }
      if (modal) {
        modal.classList.add('active');
      }
    });
  });

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  // Handle Form Submission -> WhatsApp Link
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('client-name').value.trim();
      const service = document.getElementById('service-select').value;
      const date = document.getElementById('preferred-date').value;
      const time = document.getElementById('preferred-time').value;
      const notes = document.getElementById('special-notes').value.trim();

      const phone = '919876543210'; // Parlour WhatsApp Number

      let text = `Hello Shraddha Beauty Parlour,\n\nI would like to inquire about an appointment:\n`;
      text += `• Name: ${name}\n`;
      text += `• Service: ${service}\n`;
      text += `• Preferred Date: ${date}\n`;
      text += `• Time Slot: ${time}\n`;

      if (notes) {
        text += `• Note: ${notes}\n`;
      }

      text += `\nPlease let me know your availability. Thank you!`;

      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/${phone}?text=${encodedText}`;

      window.open(whatsappUrl, '_blank');
      modal.classList.remove('active');
    });
  }
});
