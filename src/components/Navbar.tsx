"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Wifi } from "lucide-react";
import { Button } from "./ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/our-services", label: "Our Services" },
  { href: "/network-installation", label: "Network Installation" },
  { href: "/fiber-optic", label: "Fiber Optic" },
  { href: "/wifi-setup", label: "WiFi Setup" },
  { href: "/ethernet", label: "Ethernet" },
  { href: "/cctv", label: "CCTV" },
  { href: "/voip", label: "VOIP" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Wifi className="w-8 h-8 text-primary" />
              <span className="text-lg font-bold text-slate-900">Technical Services</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button
              size="sm"
              className="ml-4"
              onClick={() => (window.location.href = "tel:+971569811332")}
            >
              Call Now
            </Button>
          </nav>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-slate-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-2">
          <nav className="flex flex-col space-y-3 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-primary font-medium py-2 transition-colors"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <Button
              size="sm"
              className="mt-4 w-full"
              onClick={() => (window.location.href = "tel:+971564836102")}
            >
              Call Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
