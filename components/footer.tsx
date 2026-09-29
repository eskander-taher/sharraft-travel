import React from "react"
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { RiTiktokLine, RiInstagramLine, RiWhatsappLine, RiSnapchatLine, RiFacebookLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-gradient-luxury-5 text-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-5">{"تواصل معنا"}</h3>
            <p className="text-sm text-white/70 mb-3">{"Свяжитесь с нами | Contact Us"}</p>
            <div className="flex flex-col gap-3 text-sm text-white/80">
              <a
                href="tel:+79261038152"
                className="flex items-center gap-2 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span dir="ltr">{"+79261038152"}</span>
              </a>
              <a
                href="mailto:info@sharraftravels.com"
                className="flex items-center gap-2 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span dir="ltr">{"info@sharraftravels.com"}</span>
              </a>
              <a
                href="mailto:booking@sharraftravels.com"
                className="flex items-center gap-2 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span dir="ltr">{"booking@sharraftravels.com"}</span>
              </a>
              <p className="pt-2 text-white/60 text-xs leading-relaxed">
                {"شارع الشيخ زايد، دبي، الإمارات العربية المتحدة"}
              </p>
              <p className="text-white/50 text-xs">
                {"الأحد - الخميس: 9ص - 6م | الجمعة - السبت: 10ص - 2م"}
              </p>
            </div>
          </div>

          {/* Center Logo & Socials */}
          <div className="flex flex-col items-center text-center">
            <Link href="/" className="flex items-center justify-center mb-5 hover:scale-105 transition-all duration-300">
              <Image
                src="/logo_white.png"
                alt="شرف للسفر والسياحة"
                width={200}
                height={120}
                className="w-32 h-20 lg:w-44 lg:h-28 object-contain"
              />
            </Link>
            <div className="flex items-center gap-3">
              <FooterSocial href="https://wa.me/79261038152" label="WhatsApp">
                <RiWhatsappLine className="w-4 h-4" />
              </FooterSocial>
              <FooterSocial href="https://instagram.com/sharraft_travel" label="Instagram">
                <RiInstagramLine className="w-4 h-4" />
              </FooterSocial>
              <FooterSocial href="https://tiktok.com/@sharraft_travel" label="TikTok">
                <RiTiktokLine className="w-4 h-4" />
              </FooterSocial>
              <FooterSocial href="https://facebook.com/sharraft_travel" label="Facebook">
                <RiFacebookLine className="w-4 h-4" />
              </FooterSocial>
              <FooterSocial href="https://snapchat.com/add/mr_sharaf99" label="Snapchat">
                <RiSnapchatLine className="w-4 h-4" />
              </FooterSocial>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:text-left">
            <h3 className="text-lg font-bold mb-5">{"روابط سريعة"}</h3>
            <div className="flex flex-col gap-3 text-sm text-white/80">
              <Link href="/" className="hover:text-white transition-all duration-300 hover:scale-105">{"الرئيسية"}</Link>
              <Link href="/activities" className="hover:text-white transition-all duration-300 hover:scale-105">{"الفعاليات"}</Link>
              <Link href="/services" className="hover:text-white transition-all duration-300 hover:scale-105">{"خدماتنا"}</Link>
              <Link href="/hotels" className="hover:text-white transition-all duration-300 hover:scale-105">{"الفنادق"}</Link>
              <Link href="/about" className="hover:text-white transition-all duration-300 hover:scale-105">{"معلومات عنا"}</Link>
              <Link href="/contact" className="hover:text-white transition-all duration-300 hover:scale-105">{"تواصل معنا"}</Link>
              <Link href="/privacy" className="hover:text-white transition-all duration-300 hover:scale-105">{"سياسة الخصوصية"}</Link>
              <Link href="/terms" className="hover:text-white transition-all duration-300 hover:scale-105">{"شروط الخدمة"}</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-white/60">
          {"جميع الحقوق محفوظة"} &copy; {new Date().getFullYear()} شرف Travel & Tourism
        </div>
      </div>
    </footer>
  );
}

function FooterSocial({
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
      className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white/80 hover:bg-white/30 hover:text-white transition-all duration-300 hover:scale-110 border border-white/10"
    >
      {children}
    </a>
  );
}
