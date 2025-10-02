"use client";

import Link from "next/link";

interface HeaderProps {
  name: string;
}

export default function Header({ name }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            {name}
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#about"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#certifications"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Certifications
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
