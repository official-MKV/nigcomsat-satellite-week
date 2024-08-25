"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">NSW 2024</h2>
            <p className="text-gray-300 mb-4">
              Join us for the premier space technology conference in Nigeria.
              Explore the future of satellite technology and its applications.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="#" Icon={Facebook} />
              <SocialIcon href="#" Icon={Twitter} />
              <SocialIcon href="#" Icon={Instagram} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/schedule">Schedule</FooterLink>
              <FooterLink href="/speakers">Speakers</FooterLink>
              <FooterLink href="/sponsors">Sponsors</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/demo-day">Demo Day</FooterLink>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-neutral-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 NSW Conference. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, Icon }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white transition duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon size={24} />
  </a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <Link
      href={href}
      className="text-gray-300 hover:text-white transition duration-300"
    >
      {children}
    </Link>
  </li>
);

export default Footer;
