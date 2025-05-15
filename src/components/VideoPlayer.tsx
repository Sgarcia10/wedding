interface VideoPlayerProps {
  mobileSrc: string;
  desktopSrc: string;
  alt: string;
}

export default function VideoPlayer({ mobileSrc, desktopSrc, alt }: VideoPlayerProps) {
  return (
    <video
      className="inset-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={desktopSrc} media="(min-width: 768px)" />
      <source src={mobileSrc} media="(max-width: 767px)" />
      {alt && <p>{alt}</p>} {/* Fallback text for unsupported browsers */}
    </video>
  );
}