"use client";

import { useState } from "react";
import WhatsAppIcon from "@/components/whatsapp-icon";
import { WHATSAPP_URL, whatsappLink } from "@/lib/whatsapp";

const groups = [
  { key: "city", label: "وين ودك تروح؟", options: ["موسكو", "سانت بطرسبرغ", "سوتشي", "مورمانسك", "أكثر من مدينة"] },
  { key: "season", label: "متى؟", options: ["الصيف", "الشتاء والثلج", "ما قررت بعد"] },
  { key: "party", label: "من بيسافر؟", options: ["عائلة", "زوجان", "أصدقاء", "مجموعة كبيرة"] },
] as const;

type Key = (typeof groups)[number]["key"];

const titles: Record<Key, string> = { city: "الوجهة", season: "الموسم", party: "المسافرون" };

/** Three taps that write the WhatsApp message for the visitor. No backend, nothing stored. */
export default function TripPass() {
  const [choice, setChoice] = useState<Partial<Record<Key, string>>>({});
  const [ready, setReady] = useState(false);

  const lines = groups.flatMap(({ key }) => (choice[key] ? [`${titles[key]}: ${choice[key]}`] : []));
  const message = ["مرحبًا، أبغى برنامج رحلة إلى روسيا", ...lines].join("\n");

  return (
    <section id="trip-pass" className="relative z-10 bg-[hsl(var(--ink))] text-white py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-4xl lg:text-6xl mb-3 text-balance">{"تذكرتك جاهزة بثلاث نقرات"}</h2>
        <p className="text-white/85 mb-8 lg:mb-10">{"اختر، ونكتب الرسالة عنك. ترسلها بنفسك على واتساب ونرد عليك ببرنامج رحلتك."}</p>

        <form
          className="pass"
          onChange={() => setReady(true)}
          onSubmit={(e) => {
            e.preventDefault();
            window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
          }}
        >
          <div className="p-5 lg:p-8 flex flex-col gap-5">
            {groups.map(({ key, label, options }) => (
              <fieldset key={key}>
                <legend className="font-bold mb-2">{label}</legend>
                <div className="flex flex-wrap gap-2">
                  {options.map((option) => (
                    <label key={option} className="pass-chip">
                      <input
                        type="radio"
                        name={key}
                        value={option}
                        checked={choice[key] === option}
                        onChange={() => setChoice((prev) => ({ ...prev, [key]: option }))}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>
          <div className="pass-stub p-5 lg:p-8 grid lg:grid-cols-[1fr_auto] gap-5 items-center">
            <dl className="grid grid-cols-3 gap-3 text-sm">
              {groups.map(({ key }) => (
                <div key={key} className="min-w-0">
                  <dt className="text-muted-foreground text-xs">{titles[key]}</dt>
                  <dd className="font-bold truncate">{choice[key] ?? "—"}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-col gap-3">
              <button type="submit" className="btn-wa inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-bold text-lg">
                <WhatsAppIcon className="w-6 h-6" />
                {ready ? "أرسل تذكرتي على واتساب" : "أرسل طلبي على واتساب"}
              </button>
              <noscript>
                <a href={WHATSAPP_URL} className="underline text-center">{"افتح واتساب"}</a>
              </noscript>
            </div>
          </div>
          <div aria-hidden="true" className="pass-barcode mx-5 lg:mx-8 mb-5 lg:mb-8" />
        </form>
      </div>
    </section>
  );
}
