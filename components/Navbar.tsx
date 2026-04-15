'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '../app/data/navLinks';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const updateHeight = () => {
      const h = navRef.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty('--navbar-height', `${h}px`);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`relative z-50 w-full px-8 py-6 font-tomorrow ${isHome ? 'bg-transparent' : 'bg-black'}`}
    >
      <div className="flex items-center justify-between relative">
        <div className="flex-shrink-0">
          <Link href="/" aria-label="Go to homepage">
            <Image
              src="/compsoc_graphics/vectorWithFancyEdges.png"
              alt="Logo"
              width={100}
              height={100}
<<<<<<< HEAD
              style={{ height: "auto" }}
=======
              style={{ width: "auto", height: "auto" }}
>>>>>>> origin/main
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={`${link.label}-${link.href}`}
              href={link.href}
              className="text-white font-bold text-sm relative group transition-colors duration-300"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex lg:hidden absolute left-1/2 transform -translate-x-1/2">
          <button
            className="flex items-center z-50 flex-row justify-center"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Open navigation menu"
          >
            <span className="mr-3 select-none text-white font-bold text-sm">
              View Menu
            </span>
            <span className="flex flex-col justify-center items-center gap-1">
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </span>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="md:hidden flex items-center z-50 flex-col justify-center"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Open navigation menu"
          >
            <span className="flex flex-col justify-center items-center gap-1">
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </span>
          </button>

          <a
            href="https://surreyunion.org/your-activity/clubs-and-societies-a-z/compsoc"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex relative z-0 items-center justify-center h-[50px] px-[30px] border-2 border-white bg-black text-white font-semibold text-[15px] select-none whitespace-nowrap transition-all duration-75 active:scale-[0.95] hover:cursor-crosshair before:content-[''] before:absolute before:z-0 before:bg-black before:transition-all before:duration-200 before:w-[calc(100%+6px)] before:h-[calc(100%-16px)] before:top-2 before:left-[-3px] after:content-[''] after:absolute after:z-0 after:bg-black after:transition-all after:duration-200 after:w-[calc(100%-16px)] after:h-[calc(100%+6px)] after:top-[-3px] after:left-2 hover:before:h-[calc(100%-32px)] hover:before:top-4 hover:after:w-[calc(100%-32px)] hover:after:left-4"
          >
            <span className="relative z-10">Join Us!</span>
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-95 lg:hidden">
          <div className="flex flex-col items-center gap-6 py-8 px-8">
            {navLinks.map((link) => (
              <Link
                key={`${link.label}-${link.href}`}
                href={link.href}
                className="text-white font-bold text-base relative group transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <a
              href="https://surreyunion.org/your-activity/clubs-and-societies-a-z/compsoc"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden inline-flex relative z-0 items-center justify-center h-[50px] px-[30px] border-2 border-white bg-black text-white font-semibold text-[15px] select-none whitespace-nowrap transition-all duration-75 active:scale-[0.95] hover:cursor-crosshair before:content-[''] before:absolute before:z-0 before:bg-black before:transition-all before:duration-200 before:w-[calc(100%+6px)] before:h-[calc(100%-16px)] before:top-2 before:left-[-3px] after:content-[''] after:absolute after:z-0 after:bg-black after:transition-all after:duration-200 after:w-[calc(100%-16px)] after:h-[calc(100%+6px)] after:top-[-3px] after:left-2 hover:before:h-[calc(100%-32px)] hover:before:top-4 hover:after:w-[calc(100%-32px)] hover:after:left-4 mt-4"
            >
              <span className="relative z-10">Join us!</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
