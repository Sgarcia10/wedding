import Header from "@/components/Header";
import VideoSection from "@/components/VideoSection";
import LocationSection from "@/components/LocationSection";
import EmotionalSection from "@/components/EmotionalSection";
import AccommodationSection from "@/components/AccommodationSection";
import EngagementSection from "@/components/EngagementSection";
import Sidebar from "@/components/Sidebar";
import ScrollIndicator from "@/components/ScrollIndicator";

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

        <div id="engagement">
          <EngagementSection />
        </div>

        <div id="emotional">
          <EmotionalSection />
        </div>

        <div id="accommodation">
          <AccommodationSection />
        </div>
      </main>

      {/* Fixed scroll indicator */}
      <div className="fixed bottom-0 left-0 right-0 z-30 pointer-events-none">
        <ScrollIndicator />
      </div>
    </div>
  );
}