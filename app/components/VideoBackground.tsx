'use client';

export default function VideoBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="object-cover w-full h-full"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
} 