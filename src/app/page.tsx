import Header from "@/components/Header";
import VideoSection from "@/components/VideoSection";
import LocationSection from "@/components/LocationSection";
import EmotionalSection from "@/components/EmotionalSection";
import AccommodationSection from "@/components/AccommodationSection";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Header />
      <Sidebar />
      
      <main className="pt-20 md:pt-24">
        <div id="video">
          <VideoSection />
        </div>

        <div id="location">
          <LocationSection />
        </div>

        <div id="emotional">
          <EmotionalSection />
        </div>

        <div id="accommodation">
          <AccommodationSection />
        </div>
      </main>
    </div>
  );
}