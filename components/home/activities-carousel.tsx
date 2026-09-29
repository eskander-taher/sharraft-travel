"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { activities } from "@/lib/activities-data";

// Get only activities with images for carousel
const carouselActivities = activities
  .filter((activity) => activity.image && !activity.image.includes("placeholder"))
  .slice(0, 8); // Show first 8 activities for carousel

export default function ActivitiesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-accent">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-accent-foreground text-center mb-4">
          {"استكشف أنشطتنا السياحية"}
        </h2>
        <p className="text-center text-accent-foreground/80 mb-10">
          {"Наши туристические мероприятия | Исследуйте наши туристические мероприятия"}
        </p>
        <div className="relative">
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/90 text-foreground shadow-lg flex items-center justify-center hover:bg-background transition-colors -mr-3"
            aria-label="التالي"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/90 text-foreground shadow-lg flex items-center justify-center hover:bg-background transition-colors -ml-3"
            aria-label="السابق"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-2 pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {carouselActivities.map((activity) => (
              <Link
                key={activity.slug}
                href={`/activities/${activity.slug}`}
                className="group flex-shrink-0 w-56 md:w-64"
              >
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    <h3 className="text-sm font-bold text-white text-center drop-shadow-lg">
                      {activity.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* View All Activities Button */}
        <div className="text-center mt-10">
          <Link
            href="/activities"
            className="inline-block bg-white text-accent px-8 py-3 rounded-full text-lg font-bold hover:bg-accent hover:text-white transition-all duration-300 shadow-lg border-2 border-white"
          >
            {"عرض جميع الأنشطة"}
          </Link>
        </div>
      </div>
    </section>
  );
}
