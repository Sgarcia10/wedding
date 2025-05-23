"use client";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuItems = [
    { label: 'Save the Date', href: '#video' },
    { label: 'Ubicación', href: '#location' },
    { label: 'Nuestro Honda', href: '#emotional' },
    { label: 'Hospedaje', href: '#accommodation' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-20 bg-background/70 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 md:py-6 relative">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="absolute left-4 top-1/2 -translate-y-1/2 lg:hidden text-foreground/80 hover:text-foreground p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <h1 className="names text-3xl md:text-5xl text-center">
            Juanis & Santi
          </h1>
          <div className="decorative-line w-24 md:w-32 mx-auto mt-2"></div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex justify-center mt-6 gap-12">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-foreground/80 hover:text-foreground text-xl font-light tracking-wider transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
} 