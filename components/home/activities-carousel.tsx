import Image from "next/image";
import Link from "next/link";
import { activities } from "@/lib/activities-data";

const carouselActivities = activities
  .filter((activity) => activity.image && !activity.image.includes("placeholder"))
  .slice(0, 8);

/** A strip of real moments. Native swipe with snap points, no script needed. */
export default function ActivitiesCarousel() {
  return (
    <section className="defer-section bg-[hsl(var(--secondary))] relative z-10 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-4xl lg:text-6xl mb-2">{"ماذا تفعل حين تصل؟"}</h2>
          <p className="text-muted-foreground">{"أنشطة وجولات مختارة في أجمل معالم روسيا"}</p>
        </div>
        <Link href="/activities" className="inline-block border border-foreground rounded-full px-7 py-3 font-bold hover:bg-foreground hover:text-background transition-colors">
          {"عرض جميع الأنشطة"}
        </Link>
      </div>
      <div className="rail" tabIndex={0} role="group" aria-label="الأنشطة السياحية">
        {carouselActivities.map((activity) => (
          <Link key={activity.slug} href={`/activities/${activity.slug}`} className="group w-[62vw] sm:w-64 lg:w-72">
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-full">
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 62vw, 288px"
              />
            </div>
            <h3 className="font-bold text-center mt-3">{activity.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
