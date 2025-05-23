"use client";
import { useEffect, useRef } from 'react';

interface VideoPlayerProps {
  mobileSrc: string;
  desktopSrc: string;
  alt: string;
  loop?: boolean;
}

export default function VideoPlayer({ mobileSrc, desktopSrc, alt, loop = true }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0 // Only trigger when 100% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
        } else if (videoRef.current) {
          videoRef.current.pause();
          if (!loop) {
            videoRef.current.currentTime = 0;
          }
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [loop]);

  return (
    <video
      ref={videoRef}
      className="inset-0 w-full h-full object-cover"
      muted
      playsInline
      loop={loop}
    >
      <source src={desktopSrc} media="(min-width: 768px)" />
      <source src={mobileSrc} media="(max-width: 767px)" />
      {alt && <p>{alt}</p>} {/* Fallback text for unsupported browsers */}
    </video>
  );
}