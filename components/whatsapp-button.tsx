"use client";

import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/whatsapp-icon";
import { messageForPath, whatsappLink } from "@/lib/whatsapp";

/**
 * The always-reachable contact point.
 * Phones and tablets: a bar docked under the page (the body reserves its height, so it
 * never sits on top of content). Wide screens: a round button in the empty side margin;
 * between the two, the navbar's WhatsApp button is always on screen.
 */
export default function WhatsAppButton({ labels }: { labels: Record<string, string> }) {
  const pathname = usePathname();
  const href = whatsappLink(messageForPath(pathname, labels));

  return (
    <>
      <div className="contact-bar lg:hidden">
        <a href={href} target="_blank" rel="noopener noreferrer" className="btn-wa contact-bar-main">
          <WhatsAppIcon className="w-6 h-6" />
          {"اطلب برنامج رحلتك على واتساب"}
        </a>
        <a href="tel:+79261038152" aria-label="اتصل بنا هاتفيًا" className="contact-bar-call">
          <Phone aria-hidden="true" className="w-5 h-5" />
        </a>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="btn-wa hidden min-[1440px]:flex fixed bottom-6 left-3 z-40 w-14 h-14 rounded-full items-center justify-center shadow-lg"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </>
  );
}
