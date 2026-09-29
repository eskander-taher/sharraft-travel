"use client";

import React from "react"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { RiTiktokLine, RiInstagramLine, RiWhatsappLine, RiSnapchatLine } from "react-icons/ri";

const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "الفعاليات", href: "/activities" },
  { label: "خدماتنا", href: "/services" },
  { label: "الفنادق", href: "/hotels" },
  { label: "البرامج السياحية", href: "/tour-programs" },
  { label: "السياحة الروسية", href: "/russian-tourism" },
  { label: "معلومات عنا", href: "/about" },
  { label: "تواصل معنا", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state for background blur
      setScrolled(currentScrollY > 50);
      
      // Handle navbar visibility
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up or at top
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-gradient-luxury-1 backdrop-blur-md shadow-luxury-lg"
          : "bg-gradient-luxury-1"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Social Icons - Left side */}
          <div className="hidden lg:flex items-center gap-3">
            <SocialIcon href="https://tiktok.com/@sharraft_travel" label="TikTok">
              <RiTiktokLine className="w-4 h-4" />
            </SocialIcon>
            <SocialIcon href="https://instagram.com/sharraft_travel" label="Instagram">
              <RiInstagramLine className="w-4 h-4" />
            </SocialIcon>
            <SocialIcon href="https://wa.me/79261038152" label="WhatsApp">
              <RiWhatsappLine className="w-4 h-4" />
            </SocialIcon>
            <SocialIcon href="https://snapchat.com/add/mr_sharaf99" label="Snapchat">
              <RiSnapchatLine className="w-4 h-4" />
            </SocialIcon>
          </div>

          {/* Nav Links - Center */}
          <div className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-white/90 hover:text-white text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  pathname === link.href ? "text-yellow-300 font-bold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo - Right side */}
          <Link href="/" className="flex items-center hover:scale-105 transition-all duration-300">
            <Image
              src="/logo_white.png"
              alt="شرف للسفر والسياحة"
              width={140}
              height={84}
              className="w-24 h-14 lg:w-36 lg:h-20 object-contain"
              priority
            />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
            aria-label="فتح القائمة"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-6 flex flex-col gap-3 bg-gradient-luxury-1 backdrop-blur-md shadow-luxury-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/90 hover:text-white text-sm font-medium py-2 border-b border-white/10 transition-all duration-300 hover:scale-105"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-3">
            <SocialIcon href="https://tiktok.com" label="TikTok">
              <RiTiktokLine className="w-4 h-4" />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" label="Instagram">
              <RiInstagramLine className="w-4 h-4" />
            </SocialIcon>
            <SocialIcon href="https://wa.me/79261038152" label="WhatsApp">
              <RiWhatsappLine className="w-4 h-4" />
            </SocialIcon>
            <SocialIcon href="https://snapchat.com" label="Snapchat">
              <RiSnapchatLine className="w-4 h-4" />
            </SocialIcon>
          </div>
        </div>
      </div>
    </nav>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 border border-white/10"
    >
      {children}
    </a>
  );
}
