import VideoPlayer from './VideoPlayer';

export default function EngagementSection() {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden bg-background">
      <VideoPlayer
        mobileSrc="https://9ohczhtqjcehesjt.public.blob.vercel-storage.com/engagement-UATfSSHAzSwo9NinZpw3xVFB4rLpwg.mp4"
        desktopSrc="https://9ohczhtqjcehesjt.public.blob.vercel-storage.com/engagement-UATfSSHAzSwo9NinZpw3xVFB4rLpwg.mp4"
        alt="Wedding Video"
        loop={false}
      />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
        <div className="text-center text-white">
          <p className="text-xl md:text-3xl lg:text-4xl italic font-light tracking-wide max-w-4xl px-4">
            "Fuimos hasta el fin del mundo para encontrar el comienzo de nuestra historia juntos."
          </p>
        </div>
      </div>
    </section>
  );
} 