import HeroSection from "@/components/home/hero-section";
import ServicesGrid from "@/components/home/services-grid";
import CitiesSection from "@/components/home/cities-section";
import TripPass from "@/components/home/trip-pass";
import ActivitiesCarousel from "@/components/home/activities-carousel";
import AboutSection from "@/components/home/about-section";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ServicesGrid />
      <CitiesSection />
      <TripPass />
      <ActivitiesCarousel />
      <AboutSection />
      <div className="lat-rail" aria-hidden="true">
        <span className="lat-rail-mark" />
      </div>
    </main>
  );
}
