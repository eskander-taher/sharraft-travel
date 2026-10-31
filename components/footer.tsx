import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { RiTiktokLine, RiInstagramLine, RiWhatsappLine, RiSnapchatLine, RiFacebookLine } from "react-icons/ri";
import { DEFAULT_MESSAGE, WHATSAPP_URL, whatsappLink } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/whatsapp-icon";

const quickLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/cities", label: "الوجهات" },
  { href: "/activities", label: "الفعاليات" },
  { href: "/services", label: "خدماتنا" },
  { href: "/hotels", label: "الفنادق" },
  { href: "/b2b", label: "للشركات (B2B)" },
  { href: "/about", label: "معلومات عنا" },
  { href: "/contact", label: "تواصل معنا" },
  { href: "/privacy", label: "سياسة الخصوصية" },
  { href: "/terms", label: "شروط الخدمة" },
];

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--ink))] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr] gap-12">
          <div>
            <p className="font-display text-3xl lg:text-4xl leading-snug mb-6 text-balance">
              {"رحلتك إلى روسيا تبدأ برسالة واحدة"}
            </p>
            <a
              href={whatsappLink(DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa inline-flex items-center gap-2 rounded-full px-7 py-3 font-bold"
            >
              <WhatsAppIcon />
              {"اطلب برنامج رحلتك على واتساب"}
            </a>
          </div>

          <div>
            <h3 className="font-sans text-sm font-bold text-white/70 mb-4">{"تواصل معنا"}</h3>
            <div className="flex flex-col gap-3 text-sm text-white/85">
              <a href="tel:+79261038152" className="flex items-center gap-2 py-1 hover:text-white">
                <Phone aria-hidden="true" className="w-4 h-4 shrink-0" />
                <span dir="ltr">{"+7 926 103-81-52"}</span>
              </a>
              {/* Mailbox domain is unverified (see the redesign report): kept available, never promoted. */}
              <a href="mailto:info@sharraftravels.com" className="flex items-center gap-2 py-1 text-white/70 hover:text-white">
                <Mail aria-hidden="true" className="w-4 h-4 shrink-0" />
                <span dir="ltr">{"info@sharraftravels.com"}</span>
              </a>
              <a href="mailto:booking@sharraftravels.com" className="flex items-center gap-2 py-1 text-white/70 hover:text-white">
                <Mail aria-hidden="true" className="w-4 h-4 shrink-0" />
                <span dir="ltr">{"booking@sharraftravels.com"}</span>
              </a>
              <p className="pt-2 text-white/70 text-xs leading-relaxed">
                {"شارع الشيخ زايد، دبي، الإمارات العربية المتحدة"}
              </p>
              <p className="text-white/70 text-xs">{"الأحد - الخميس: 9ص - 6م | الجمعة - السبت: 10ص - 2م"}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-5">
              <FooterSocial href={WHATSAPP_URL} label="WhatsApp">
                <RiWhatsappLine aria-hidden="true" className="w-5 h-5" />
              </FooterSocial>
              <FooterSocial href="https://instagram.com/sharraft_travel" label="Instagram">
                <RiInstagramLine aria-hidden="true" className="w-5 h-5" />
              </FooterSocial>
              <FooterSocial href="https://tiktok.com/@sharraft_travel" label="TikTok">
                <RiTiktokLine aria-hidden="true" className="w-5 h-5" />
              </FooterSocial>
              <FooterSocial href="https://facebook.com/sharraft_travel" label="Facebook">
                <RiFacebookLine aria-hidden="true" className="w-5 h-5" />
              </FooterSocial>
              <FooterSocial href="https://snapchat.com/add/mr_sharaf99" label="Snapchat">
                <RiSnapchatLine aria-hidden="true" className="w-5 h-5" />
              </FooterSocial>
            </div>
          </div>

          <div>
            <h3 className="font-sans text-sm font-bold text-white/70 mb-4">{"روابط سريعة"}</h3>
            <div className="grid grid-cols-2 gap-x-6 text-sm text-white/85">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="py-2 hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 flex items-center justify-between gap-4 text-xs text-white/70">
          <span>
            {"جميع الحقوق محفوظة"} &copy; {new Date().getFullYear()} {"شرف للسفر والسياحة"}
          </span>
          <Image src="/logo_white.png" alt="" width={84} height={50} className="w-16 h-auto" />
        </div>
      </div>
    </footer>
  );
}

function FooterSocial({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/85 hover:border-white hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}
