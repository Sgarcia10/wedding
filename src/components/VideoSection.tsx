import VideoPlayer from "./VideoPlayer";

export default function VideoSection() {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden">
      <VideoPlayer
        mobileSrc="https://9ohczhtqjcehesjt.public.blob.vercel-storage.com/save_date-xIhFcRzZMZ7Gn2xWlLLEyfebPmYOpB.mp4"
        desktopSrc="https://9ohczhtqjcehesjt.public.blob.vercel-storage.com/save_date_desk-lXAkNkfaJvbmnnczB7rds8tGznAEUr.mp4"
        alt="Wedding Video"
      />
      
      {/* Save the Date Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
        <div className="text-center text-white">
          <h2 className="save-date mb-6">
            <span className="block text-xl md:text-2xl mb-4">Save the date</span>
            <span className="block text-4xl md:text-6xl font-light tracking-widest">06 · 12 · 2025</span>
          </h2>
          <div className="decorative-line w-48 mx-auto my-8"></div>
        </div>
      </div>
    </section>
  );
} 