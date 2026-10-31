"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/cities-data";

const partnerTypes = [
  "وكالة سفر",
  "منظم رحلات",
  "شركة (رحلات حوافز وفعاليات)",
  "وكيل سياحة علاجية أو تعليمية",
  "أخرى",
];

const volumes = ["أقل من 10 مسافرين", "10 - 50 مسافرًا", "50 - 200 مسافر", "أكثر من 200 مسافر"];

const inputClass =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary";

export default function B2BInquiryForm() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    country: "",
    phone: "",
    type: partnerTypes[0],
    volume: volumes[1],
    notes: "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      "مرحبًا، نرغب بالشراكة مع شرف للسفر والسياحة (B2B)",
      `الشركة: ${form.company}`,
      `الاسم: ${form.name}`,
      `الدولة: ${form.country}`,
      `الهاتف: ${form.phone}`,
      `نوع النشاط: ${form.type}`,
      `الحجم الشهري المتوقع: ${form.volume}`,
      form.notes && `ملاحظات: ${form.notes}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input required placeholder="اسم الشركة" value={form.company} onChange={update("company")} className={inputClass} />
      <input required placeholder="اسم المسؤول" value={form.name} onChange={update("name")} className={inputClass} />
      <input required placeholder="الدولة" value={form.country} onChange={update("country")} className={inputClass} />
      <input
        required
        type="tel"
        dir="ltr"
        placeholder="رقم الهاتف / واتساب"
        value={form.phone}
        onChange={update("phone")}
        className={`${inputClass} text-right`}
      />
      <select value={form.type} onChange={update("type")} className={inputClass} aria-label="نوع النشاط">
        {partnerTypes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>
      <select value={form.volume} onChange={update("volume")} className={inputClass} aria-label="الحجم الشهري المتوقع">
        {volumes.map((v) => (
          <option key={v}>{v}</option>
        ))}
      </select>
      <textarea
        rows={4}
        placeholder="أخبرنا عن احتياجاتكم: المدن، المواسم، نوع الرحلات..."
        value={form.notes}
        onChange={update("notes")}
        className={`${inputClass} sm:col-span-2`}
      />
      <button
        type="submit"
        className="sm:col-span-2 btn-wa px-8 py-3 rounded-full text-lg font-bold hover:opacity-90 transition-opacity shadow-lg"
      >
        {"أرسل الطلب عبر واتساب"}
      </button>
    </form>
  );
}
