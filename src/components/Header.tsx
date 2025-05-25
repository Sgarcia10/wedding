"use client";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { navigationItems } from "@/config/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-20 bg-background/70 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 md:py-6 flex items-center">
          {/* Mobile Menu Button - Only visible on mobile */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-foreground/80 hover:text-foreground p-2 -ml-2"
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

          {/* Title - Centered on mobile, left on desktop */}
          <div className="flex-1 flex lg:justify-start justify-center">
            <div className="flex flex-col">
              <h1 className="names text-3xl md:text-5xl">
                Juanis & Santi
              </h1>
              <div className="decorative-line w-24 md:w-32 mt-2"></div>
            </div>
          </div>
          
          {/* Desktop Navigation - Right aligned */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-foreground/80 hover:text-foreground text-lg font-light tracking-wider transition-colors whitespace-nowrap"
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