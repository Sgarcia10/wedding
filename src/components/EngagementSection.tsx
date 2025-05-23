import VideoPlayer from './VideoPlayer';

export default function EngagementSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden bg-background">
      <VideoPlayer
        mobileSrc="https://9ohczhtqjcehesjt.public.blob.vercel-storage.com/engagement2-2lgg7JfB5RUZijHVsj2GD4v2xfO38s.mp4"
        desktopSrc="https://9ohczhtqjcehesjt.public.blob.vercel-storage.com/engagement2-2lgg7JfB5RUZijHVsj2GD4v2xfO38s.mp4"
        alt="Wedding Video"
        loop={false}
      />
      
      <div className="absolute inset-0 flex flex-col items-center pt-24 md:pt-32 bg-black/20">
        <div className="text-center text-white">
          <p className="text-xl md:text-3xl lg:text-4xl italic font-light tracking-wide max-w-4xl px-4">
            &quot;Fuimos hasta el fin del mundo para encontrar el comienzo de nuestra historia juntos.&quot;
          </p>
        </div>
      </div>
    </section>
  );
} 