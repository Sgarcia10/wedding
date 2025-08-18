import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ScrollIndicator from "@/components/ScrollIndicator";
import ItinerarySection from "@/components/invitation/ItinerarySection";
import LocationsSection from "@/components/invitation/LocationsSection";
import DressCodeSection from "@/components/invitation/DressCodeSection";
import InvitationHeader from "@/components/invitation/InvitationHeader";
import CountdownSection from "@/components/invitation/CountdownSection";

interface SiteHostsPageProps {
    inviteName: string;
}

export default function SiteHostsPage({ inviteName }: SiteHostsPageProps) {
    return (
        <div className="relative min-h-screen bg-background text-foreground">
            <Header />
            <Sidebar />

            {/* Elegant Invitation Header */}
            <div className="pt-20 md:pt-24">
                <InvitationHeader inviteName={inviteName} />
                <CountdownSection />
            </div>

            <main>
                <div id="dresscode">
                    <DressCodeSection />
                </div>
                <div id="itinerary">
                    <ItinerarySection />
                </div>
                <div id="locations">
                    <LocationsSection />
                </div>
            </main>

            {/* Fixed scroll indicator */}
            <div className="fixed bottom-0 left-0 right-0 z-30 pointer-events-none">
                <ScrollIndicator />
            </div>
        </div>
    );
}
