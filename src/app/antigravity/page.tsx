import Metadata from 'next';

export const metadata = {
  title: 'Ethereal Anti-Gravity Experience | Shraddha Beauty Parlour',
  description: 'Immerse yourself in a 3D WebGL weightless salon experience featuring Three.js, GSAP zero-gravity motion, and glassmorphic aesthetic in Sai Nagar, Amravati.',
};

export default function AntiGravityPage() {
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', background: '#0D0309' }}>
      <iframe
        src="/antigravity/index.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
        }}
        title="Shraddha Beauty Parlour Anti-Gravity Experience"
      />
    </div>
  );
}
