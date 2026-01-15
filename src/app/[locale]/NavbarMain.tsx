'use client';
import { useEffect, useRef, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Info, Mail, Menu, Newspaper, Users, X, Languages, Wrench, Heart, ChevronDown, Package, GraduationCap, Settings } from 'lucide-react';
import { LogoNavBar } from './LogoNavBar';

// Función throttle para optimizar el scroll
function throttle(func: (...args: unknown[]) => void, limit: number) {
  let inThrottle: boolean;
  return function (this: unknown, ...args: Parameters<typeof func>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export default function NavbarMain() {
  const t = useTranslations('navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const lastScrollY = useRef(0);

  const navLinks = [
    { href: '/about', label: t('about'), icon: Info, color: 'from-orange-500 to-amber-500' },
    { href: '/team', label: t('team'), icon: Users, color: 'from-cyan-500 to-blue-500' },
    // Servicios dropdown va aquí (se renderiza por separado)
    { href: '/donations', label: t('donations'), icon: Heart, color: 'from-pink-500 to-rose-500' },
    // { href: '/notice', label: t('notice'), icon: Newspaper, color: 'from-green-500 to-emerald-500' },
    { href: '/contact', label: t('contact'), icon: Mail, color: 'from-red-500 to-rose-500' },
  ];

  const servicesOptions = [
    { href: '/services', label: t('ourServices') , icon: Settings },
    { href: '/warehouse', label: t('warehouse') , icon: Package },
    { href: '/education', label: t('education') , icon: GraduationCap },
  ];

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  // Función para cambiar el idioma manteniendo la ruta actual
  const switchLanguage = (newLocale: 'en' | 'es') => {
    router.replace(pathname, { locale: newLocale });
    setIsLangOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY === 0) {
        setIsVisible(true);
        return;
      }

      setIsVisible(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  // Cerrar dropdowns al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isLangOpen && !target.closest('.language-dropdown')) {
        setIsLangOpen(false);
      }
      if (isServicesOpen && !target.closest('.services-dropdown')) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLangOpen, isServicesOpen]);

  return (  
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      className="w-full fixed top-0 left-0 z-50 bg-white border-b-2 border-purple-200/50 shadow-md"
    > 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.span 
              whileHover={{ scale: 1.02 }}
              className="text-xl font-sans font-medium text-purple-900 tracking-wide"
            >
              <LogoNavBar/>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.slice(0, 2).map((link) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    className={`font-sans text-xs bg-gradient-to-br ${link.color} hover:shadow-lg hover:shadow-purple-500/30 px-4 py-2 rounded-xl text-white font-medium transition-all duration-300 tracking-wide flex items-center gap-2 border border-white/10`}
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}

            {/* Services Dropdown Desktop */}
            <div className="relative services-dropdown">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="font-sans text-xs bg-gradient-to-br from-purple-600 to-indigo-600 hover:shadow-lg hover:shadow-purple-500/30 px-4 py-2 rounded-xl text-white font-medium transition-all duration-300 tracking-wide flex items-center gap-2 border border-white/10"
              >
                <Wrench className="w-4 h-4" />
                {t('services')}
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              {/* Services Dropdown Menu */}
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-lg border-2 border-purple-200/50 overflow-hidden z-50"
                >
                  {servicesOptions.map((service) => {
                    const ServiceIcon = service.icon;
                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-purple-50 transition-colors text-purple-900"
                      >
                        <ServiceIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">{service.label}</span>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </div>

            {navLinks.slice(2).map((link) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    className={`font-sans text-xs bg-gradient-to-br ${link.color} hover:shadow-lg hover:shadow-purple-500/30 px-4 py-2 rounded-xl text-white font-medium transition-all duration-300 tracking-wide flex items-center gap-2 border border-white/10`}
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}

            {/* Language Selector Desktop */}
            <div className="relative language-dropdown">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="font-sans text-xs bg-gradient-to-br from-purple-600 to-indigo-600 hover:shadow-lg hover:shadow-purple-500/30 px-4 py-2 rounded-xl text-white font-medium transition-all duration-300 tracking-wide flex items-center gap-2 border border-white/10"
              >
                <Languages className="w-4 h-4" />
                {languages.find(lang => lang.code === locale)?.flag}
              </motion.button>

              {/* Language Dropdown */}
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border-2 border-purple-200/50 overflow-hidden z-50"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => switchLanguage(lang.code as 'en' | 'es')}
                      className={`w-full flex items-center gap-2 px-4 py-3 hover:bg-purple-50 transition-colors ${
                        locale === lang.code ? 'bg-purple-100 font-semibold' : ''
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="text-sm text-purple-900">{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-all duration-300 border border-purple-300/50"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-purple-900" />
              ) : (
                <Menu className="w-6 h-6 text-purple-900" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} fixed w-full bg-white border-b-2 border-purple-200/50 shadow-md`} 
      >
        <div className="px-4 pt-2 pb-6 space-y-3">
          {navLinks.slice(0, 2).map((link) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.href}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 py-3 px-5 font-sans text-sm bg-gradient-to-r ${link.color} text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 tracking-wide rounded-xl border border-white/10 font-medium`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              </motion.div>
            );
          })}

          {/* Services Section Mobile */}
          <div className="pt-2 border-t-2 border-purple-200/50">
            <p className="text-xs text-purple-900 font-semibold mb-2 px-2">{t('services')}</p>
            {servicesOptions.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center gap-3 py-3 px-5 font-sans text-sm bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 tracking-wide rounded-xl border border-white/10 font-medium mb-2"
                >
                  <ServiceIcon className="w-4 h-4" />
                  {service.label}
                </Link>
              );
            })}
          </div>

          {navLinks.slice(2).map((link) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.href}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 py-3 px-5 font-sans text-sm bg-gradient-to-r ${link.color} text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 tracking-wide rounded-xl border border-white/10 font-medium`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              </motion.div>
            );
          })}

          {/* Language Selector Mobile */}
          <div className="pt-2 border-t-2 border-purple-200/50">
            <p className="text-xs text-purple-900 font-semibold mb-2 px-2">{t('language')}</p>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  switchLanguage(lang.code as 'en' | 'es');
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 py-3 px-5 font-sans text-sm transition-all duration-300 tracking-wide rounded-xl font-medium ${
                  locale === lang.code 
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg' 
                    : 'bg-purple-50 text-purple-900 hover:bg-purple-100'
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}