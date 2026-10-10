"use client";

import Image from "next/image";
import { Shield, Award, Briefcase, Users } from "lucide-react";

const stats = [
  { icon: Shield, label: "شركة موثوقة", value: "100%" },
  { icon: Award, label: "خدمات متكاملة", value: "11+" },
  { icon: Briefcase, label: "دعم على مدار الساعة", value: "24/7" },
  { icon: Users, label: "تواصل بالعربية", value: "100%" },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <Image
        src="/moscow-night.jpg"
        alt="مدينة روسية عند الغسق"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <p className="text-primary-foreground/80 text-sm mb-2 font-medium">
                {stat.label}
              </p>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
