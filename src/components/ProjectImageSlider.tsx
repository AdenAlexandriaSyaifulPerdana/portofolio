"use client";

import { useEffect, useMemo, useState } from "react";

type ProjectImageSliderProps = {
  title: string;
  images?: string[];
  className?: string;
  showDots?: boolean;
};

export default function ProjectImageSlider({
  title,
  images = [],
  className = "",
  showDots = false,
}: ProjectImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<string[]>([]);

  const availableImages = useMemo(() => {
    return images.filter((image) => !failedImages.includes(image));
  }, [images, failedImages]);

  useEffect(() => {
    if (currentIndex > availableImages.length - 1) {
      setCurrentIndex(0);
    }
  }, [availableImages.length, currentIndex]);

  useEffect(() => {
    if (availableImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === availableImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [availableImages.length]);

  const handleImageError = (image: string) => {
    setFailedImages((prevImages) => {
      if (prevImages.includes(image)) return prevImages;
      return [...prevImages, image];
    });
  };

  if (availableImages.length === 0) {
    return (
      <div
        className={`flex items-center justify-center bg-slate-800 text-slate-500 ${className}`}
      >
        <div className="text-center">
          <p className="text-4xl font-bold text-cyan-400">
            {title.slice(0, 2).toUpperCase()}
          </p>
          <p className="mt-2 text-sm text-slate-500">Project Screenshot</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-slate-800 ${className}`}>
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {availableImages.map((image, index) => (
          <div key={image} className="flex h-full min-w-full items-center justify-center">
            <img
              src={image}
              alt={`${title} screenshot ${index + 1}`}
              className="h-full w-full object-contain p-2"
              onError={() => handleImageError(image)}
            />
          </div>
        ))}
      </div>

      {showDots && availableImages.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {availableImages.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                currentIndex === index ? "bg-cyan-400" : "bg-white/30"
              }`}
              aria-label={`Show ${title} screenshot ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}