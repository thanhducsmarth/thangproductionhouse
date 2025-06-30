'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import './Navbar.css';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hiển thị ngay khi scroll lên trên
      if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      } 
      // Ẩn khi scroll xuống và đã scroll được một đoạn
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      }

      setLastScrollY(currentScrollY);

      // Clear timeout cũ nếu có
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Set timeout mới để hiện navbar sau khi dừng scroll
      timeoutId = setTimeout(() => {
        setIsHidden(false);
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [lastScrollY]);

  const leftNavItems = [
    { href: '/', label: 'TRANG CHỦ' },
    { href: '/about', label: 'VỀ CHÚNG TÔI' },
    { 
      href: '/services', 
      label: 'DỊCH VỤ',
      children: [
        { 
          href: '/services/thoi-noi', 
          label: 'CHỤP THÔI NÔI',
          image: '/images/services/thoi-noi.jpg'
        },
        {
          href: '/services/chup-cuoi',
          label: 'CHỤP ẢNH CƯỚI',
          image: '/images/service-1.jpg'
        }
      ]
    },
  ];

  const rightNavItems = [
    { href: '/gallery', label: 'BỘ SƯU TẬP' },
    { href: '/contact', label: 'LIÊN HỆ' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 bg-white/80 backdrop-blur-md ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 relative">
          {/* Left Nav Items */}
          <div className="hidden md:flex items-center space-x-16">
            {leftNavItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="nav-link relative text-gray-800 hover:text-black transition-colors tracking-[0.2em] text-sm font-light"
                  onMouseEnter={() => item.children && setIsServiceOpen(true)}
                  onMouseLeave={() => item.children && setIsServiceOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && isServiceOpen && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[240px]"
                    onMouseEnter={() => setIsServiceOpen(true)}
                    onMouseLeave={() => setIsServiceOpen(false)}
                  >
                    <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-lg overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="group block relative py-3"
                        >
                          <div className="text-center">
                            <div className="text-gray-800 hover:text-black transition-colors tracking-[0.15em] text-xs font-light">
                              {child.label}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="flex flex-col items-center group">
              <div className="logo-container relative">
                <span className="text-6xl font-light text-gray-900 transform transition-transform duration-500 group-hover:scale-110 playfair-font">#</span>
                <div className="absolute -inset-4 border border-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <span className="text-[10px] text-gray-500 tracking-[0.5em] mt-2 transform transition-all duration-500 group-hover:tracking-[0.7em]">PRODUCTION</span>
            </Link>
          </div>

          {/* Right Nav Items */}
          <div className="hidden md:flex items-center space-x-16">
            {rightNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link relative text-gray-800 hover:text-black transition-colors tracking-[0.2em] text-sm font-light"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-800 hover:text-black focus:outline-none"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 transform transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'} w-full h-[1px] bg-current`}></span>
                <span className={`absolute left-0 top-1/2 -translate-y-1/2 transform transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'} w-full h-[1px] bg-current`}></span>
                <span className={`absolute left-0 bottom-0 transform transition-transform duration-300 ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'} w-full h-[1px] bg-current`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-96 bg-white/80 backdrop-blur-md' : 'max-h-0'}`}>
        <div className="px-4 py-8 space-y-6">
          {leftNavItems.map((item) => (
            <div key={item.href}>
              <Link 
                href={item.href}
                className="block text-center text-gray-800 hover:text-black transition-colors tracking-[0.2em] text-sm font-light"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="mt-2 space-y-2 bg-gray-50/50">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block text-center py-2 text-sm text-gray-800 hover:text-black hover:bg-gray-100 tracking-[0.2em] font-light"
                      onClick={() => setIsOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          {rightNavItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className="block text-center text-gray-800 hover:text-black transition-colors tracking-[0.2em] text-sm font-light"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 