"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-gray-300 py-4 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold text-white">Sugarcoded</div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 7.5h16.5M3.75 12h16.5M3.75 16.5h16.5"}
            />
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="#about">
              <span className="hover:underline hover:text-white transition">About</span>
            </Link>
          </li>
          <li>
            <Link href="#services">
              <span className="hover:underline hover:text-white transition">Services</span>
            </Link>
          </li>
          <li>
            <Link href="#portfolio">
              <span className="hover:underline hover:text-white transition">Portfolio</span>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <span className="hover:underline hover:text-white transition">Contact</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link href="#about" onClick={() => setMenuOpen(false)}>
                <span className="hover:underline hover:text-white transition">About</span>
              </Link>
            </li>
            <li>
              <Link href="#services" onClick={() => setMenuOpen(false)}>
                <span className="hover:underline hover:text-white transition">Services</span>
              </Link>
            </li>
            <li>
              <Link href="#portfolio" onClick={() => setMenuOpen(false)}>
                <span className="hover:underline hover:text-white transition">Portfolio</span>
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setMenuOpen(false)}>
                <span className="hover:underline hover:text-white transition">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
