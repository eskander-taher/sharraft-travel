import React from "react"
import Image from "next/image";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { RiTiktokLine, RiInstagramLine, RiWhatsappLine, RiSnapchatLine, RiFacebookLine } from "react-icons/ri";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "تواصل معنا | شرف للسفر والسياحة",
  description:
    "تواصل مع شركة شرف للسفر والسياحة - نحن هنا لمساعدتك في تخطيط رحلتك إلى روسيا",
};

const contactInfo = [
  {
    icon: Phone,
    title: "الهاتف / واتساب",
    details: ["+79261038152"],
    links: ["tel:+79261038152"],
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    details: ["info@sharraftravels.com", "booking@sharraftravels.com"],
    links: ["mailto:info@sharraftravels.com", "mailto:booking@sharraftravels.com"],
  },
  {
    icon: MapPin,
    title: "الموقع",
    details: ["شارع الشيخ زايد، دبي، الإمارات"],
    links: [],
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    details: ["الأحد - الخميس: 9ص - 6م", "الجمعة - السبت: 10ص - 2م"],
    links: [],
  },
];

export default function ContactPage() {
  return (
    <main>

      {/* Hero */}
      <PageHero
        title="تواصل معنا"
        subtitle="نحن هنا لمساعدتك في تخطيط رحلتك المثالية"
        image="/contact_us.webp"
        imageAlt="تواصل مع شرف للسفر والسياحة"
        message='مرحبًا، أبغى برنامج رحلة إلى روسيا'
      >
      </PageHero>

      {/* Contact Cards */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-sm border border-border p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-card-foreground mb-3">
                  {item.title}
                </h3>
                <div className="flex flex-col gap-1">
                  {item.details.map((detail, i) =>
                    item.links[i] ? (
                      <a
                        key={detail}
                        href={item.links[i]}
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                        dir="ltr"
                      >
                        {detail}
                      </a>
                    ) : (
                      <p key={detail} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Image */}
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
              <Image
                src="/contact_us.webp"
                alt="تواصل معنا"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[hsl(var(--ink))]/55" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                  {"نحن في خدمتكم"}
                </h2>
                <p className="text-primary-foreground/90 text-base mb-6">
                  {"تواصلوا معنا عبر أي من قنوات الاتصال المتاحة"}
                </p>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {"طرق التواصل"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {"يسعدنا تواصلكم معنا عبر أي من قنوات الاتصال المتاحة. فريقنا المتخصص جاهز لمساعدتكم في تخطيط رحلتكم إلى روسيا وتقديم أفضل العروض والباقات السياحية."}
              </p>

              {/* WhatsApp */}
              <a
                href="https://wa.me/79261038152"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366]/10 rounded-sm p-5 hover:bg-[#25D366]/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                  <RiWhatsappLine className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground group-hover:text-[#25D366] transition-colors">
                    {"واتساب"}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {"تواصل مباشر وسريع مع فريقنا"}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+79261038152"
                className="flex items-center gap-4 bg-secondary rounded-sm p-5 hover:bg-secondary/80 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {"اتصل بنا"}
                  </h3>
                  <p className="text-muted-foreground text-sm" dir="ltr">
                    {"+79261038152"}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@sharraftravels.com"
                className="flex items-center gap-4 border border-border rounded-sm p-4 group"
              >
                <div className="w-10 h-10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {"البريد الإلكتروني"}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {"info@sharraftravels.com"}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {"booking@sharraftravels.com"}
                  </p>
                </div>
              </a>

              {/* Social Media */}
              <div className="bg-card rounded-sm border border-border p-5">
                <h3 className="font-bold text-card-foreground mb-4">
                  {"تابعنا على وسائل التواصل"}
                </h3>
                <div className="flex items-center gap-3">
                  <SocialLink href="https://instagram.com/sharraft_travel" label="Instagram">
                    <RiInstagramLine className="w-5 h-5" />
                  </SocialLink>
                  <SocialLink href="https://tiktok.com/@sharraft_travel" label="TikTok">
                    <RiTiktokLine className="w-5 h-5" />
                  </SocialLink>
                  <SocialLink href="https://facebook.com/sharraft_travel" label="Facebook">
                    <RiFacebookLine className="w-5 h-5" />
                  </SocialLink>
                  <SocialLink href="https://snapchat.com/add/mr_sharaf99" label="Snapchat">
                    <RiSnapchatLine className="w-5 h-5" />
                  </SocialLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

function SocialLink({
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
      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
    >
      {children}
    </a>
  );
}
