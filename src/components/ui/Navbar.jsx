"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-neutral-900 bg-opacity-90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center text-white font-bold text-lg"
            >
              <div className="relative size-24 md:size-36 mr-2">
                <Image
                  src="/logo.png"
                  alt="NSW 2024 Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <span className="md:flex hidden">NSW 2024</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/schedule">Schedule</NavLink>
              <NavLink href="/speakers">Speakers</NavLink>
              <NavLink href="/sponsors">Sponsors</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <NavLink href="/demo-day">Demo Day</NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:bg-gray-700 hover:text-white p-2 rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-neutral-800">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/schedule">Schedule</NavLink>
          <NavLink href="/speakers">Speakers</NavLink>
          <NavLink href="/sponsors">Sponsors</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/demo-day">Demo Day</NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  >
    {children}
  </Link>
);

export default Navbar;
