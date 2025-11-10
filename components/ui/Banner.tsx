"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  commercialProducts,
  processingTechniques,
  certifications,
  SlideContent,
} from "@/lib/data";

export default function OrganicShowcaseCarousel() {
    
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = commercialProducts.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="relative w-full bg-gray-50 py-8 px-4 md:px-8 overflow-hidden rounded-xl">
      <div className="max-w-full mx-auto">
        {/* Main 3-panel grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Panel: Commercial Products */}
          <Panel
            slide={commercialProducts[currentIndex]}
            isLarge
            className="md:col-span-2"
          />

          {/* Right Panels: Two stacked */}
          <div className="flex flex-col gap-4">
            <Panel slide={processingTechniques[currentIndex % 4]} />
            <Panel slide={certifications[currentIndex % 4]} />
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 md:p-3 rounded-full shadow-md transition-all z-30"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 md:p-3 rounded-full shadow-md transition-all z-30"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {commercialProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-6 rounded-full transition-all ${
              index === currentIndex ? "bg-green-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

/* Panel Component */
function Panel({
  slide,
  isLarge = false,
  className = "",
}: {
  slide: SlideContent;
  isLarge?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={slide.link}
      className={`relative overflow-hidden rounded-2xl shadow-lg group block ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-500">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end h-[250px] md:h-[400px]">
        <div className="text-left text-white space-y-2">
          <p className="text-sm uppercase tracking-wide text-white/80">
            {slide.subtitle}
          </p>
          <h3
            className={`font-bold leading-tight ${
              isLarge ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"
            }`}
          >
            {slide.title}
          </h3>
          <p className="text-sm md:text-base opacity-90 max-w-md">
            {slide.description}
          </p>
          <div className="mt-3 inline-block text-sm font-semibold text-white/90 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
            Explore →
          </div>
        </div>
      </div>
    </Link>
  );
}
