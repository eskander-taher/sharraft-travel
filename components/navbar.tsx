"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { RiTiktokLine, RiInstagramLine, RiWhatsappLine, RiSnapchatLine } from "react-icons/ri";
import WhatsAppIcon from "@/components/whatsapp-icon";
import { DEFAULT_MESSAGE, whatsappLink, WHATSAPP_URL } from "@/lib/whatsapp";

const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "الوجهات", href: "/cities" },
  { label: "الفعاليات", href: "/activities" },
  { label: "خدماتنا", href: "/services" },
  { label: "الفنادق", href: "/hotels" },
  { label: "للشركات", href: "/b2b" },
  { label: "معلومات عنا", href: "/about" },
  { label: "تواصل معنا", href: "/contact" },
];

const socials = [
  { href: "https://tiktok.com/@sharraft_travel", label: "TikTok", Icon: RiTiktokLine },
  { href: "https://instagram.com/sharraft_travel", label: "Instagram", Icon: RiInstagramLine },
  { href: WHATSAPP_URL, label: "WhatsApp", Icon: RiWhatsappLine },
  { href: "https://snapchat.com/add/mr_sharaf99", label: "Snapchat", Icon: RiSnapchatLine },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav aria-label="القائمة الرئيسية" className="site-nav fixed top-0 right-0 left-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between gap-4 h-16 lg:h-20">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="شرف للسفر والسياحة"
              width={140}
              height={84}
              className="w-20 h-12 lg:w-28 lg:h-16 object-contain"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <div className="hidden xl:flex items-center gap-2">
            {socials
              .filter((s) => s.label !== "WhatsApp")
              .map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-dot"
                >
                  <Icon aria-hidden="true" className="w-4 h-4" />
                </a>
              ))}
            </div>
            <a
              href={whatsappLink(DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold ms-2"
            >
              <WhatsAppIcon />
              {"واتساب"}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -me-2 min-w-11 min-h-11 flex items-center justify-center text-foreground"
            aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background max-h-[calc(100svh-4rem)] overflow-y-auto">
          <div className="px-4 pb-6 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className="font-display text-xl py-3 border-b border-border"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-4">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-dot"
                >
                  <Icon aria-hidden="true" className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
