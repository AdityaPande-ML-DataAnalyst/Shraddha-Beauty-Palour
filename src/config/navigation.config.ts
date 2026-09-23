export interface NavItem {
  id: string;
  path: string;
  labelKey: 'home' | 'about' | 'services' | 'gallery' | 'offers' | 'testimonials' | 'faq' | 'contact';
}

export const navigationItems: NavItem[] = [
  { id: 'home', path: '/', labelKey: 'home' },
  { id: 'about', path: '/about/', labelKey: 'about' },
  { id: 'services', path: '/services/', labelKey: 'services' },
  { id: 'gallery', path: '/gallery/', labelKey: 'gallery' },
  { id: 'offers', path: '/offers/', labelKey: 'offers' },
  { id: 'testimonials', path: '/testimonials/', labelKey: 'testimonials' },
  { id: 'faq', path: '/faq/', labelKey: 'faq' },
  { id: 'contact', path: '/contact/', labelKey: 'contact' },
];

