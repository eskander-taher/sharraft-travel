import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import HeroSection from "@/components/home/hero-section";
import CompanyTitleSection from "@/components/home/company-title-section";
import PackagesBanner from "@/components/home/packages-banner";
import ServicesGrid from "@/components/home/services-grid";
import ActivitiesCarousel from "@/components/home/activities-carousel";
import StatsSection from "@/components/home/stats-section";
import AboutSection from "@/components/home/about-section";
// import VideoSection from "@/components/home/video-section";
// import HolidaysBanner from "@/components/home/holidays-banner";
// import InstagramSection from "@/components/home/instagram-section";

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesGrid />
      <PackagesBanner />
      <ActivitiesCarousel />
      <CompanyTitleSection />
      <StatsSection />
      <AboutSection />
      <Footer />
      <WhatsAppButton />
      {/* <VideoSection /> */}
      {/* <HolidaysBanner /> */}
      {/* <InstagramSection /> */}
    </main>
  );
}
