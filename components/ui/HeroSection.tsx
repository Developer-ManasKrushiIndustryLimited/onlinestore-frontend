"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Pure A2 Dairy Products",
    subtitle: "From Our Farm to Your Table",
    description:
      "Experience the richness of traditional dairy farming with our pure A2 milk, ghee, and paneer made using time-honored methods.",
    image: "FrontPage Hero Banner 1.jpg",
    cta: "Shop Dairy Products",
    bgColor: "from-black/50 via-black/500 to-transparent",
  },
  {
    id: 2,
    title: "Fresh Organic Vegetables",
    subtitle: "Grown with Love, Harvested with Care",
    description:
      "Discover our seasonal collection of organic vegetables, grown without chemicals and packed with natural nutrients.",
    image:
      "https://imgs.search.brave.com/z5SHjJtzwX91nSiQG2SQ33flhM0sfRhmNg3iqEA8KX8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mjg1MDUwODY2MzUt/NGM2OWQ1ZjEwOTA4/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjAuMyZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1ueDhkbVZu/WjJsbGZHVnVmREI4/ZkRCOGZId3c",
    cta: "Browse Vegetables",
    // bgColor: "from-orange-500 to-orange-600",
    bgColor: "from-black/50 via-black/500 to-transparent",
  },
  {
    id: 3,
    title: "Learn Traditional Farming",
    subtitle: "Master the Art of Organic Agriculture",
    description:
      "Join our comprehensive courses and learn sustainable farming techniques passed down through generations.",
    image:
      "https://imgs.search.brave.com/TCi39UJ1aYdYctw0drNEznt2qNISZ1NdpOT3Zu9gCrw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTA4/Mzc4MzA4L3Bob3Rv/L2NoZWVyZnVsLWZh/cm1lci1zaXR0aW5n/LWluLXRoZS1ncmVl/bi1maWVsZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9QmEy/M2VmMXFSRHpUVXRs/cWp3N0JWSXRqdkt4/VU5sOE9YbWpUX2FO/WTRGRT0",
    // bgColor: "from-amber-500 to-amber-600",
    bgColor: "from-black/50 via-black/500 to-transparent",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${index === currentSlide
              ? "translate-x-0"
              : index < currentSlide
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image || "/placeholder.png"}
              alt={slide.title}
              className="absolute w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor} z-10`}
            />
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-2xl text-white">
                <h2 className="text-sm font-semibold uppercase tracking-wide mb-2 opacity-90">
                  {slide.subtitle}
                </h2>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
                  {slide.description}
                </p>
                <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm z-30"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm z-30"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide
                ? "bg-white scale-110"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
