"use client";

import { useEffect, useState } from "react";

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

export default function CustomCarousel() {
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
    <div className="w-full bg-gray-50 py-6 md:py-8 px-3 md:px-6">
      <div className="max-w-full mx-auto">
        {/* Carousel Container */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-3">
          {/* Left Large Panel - Commercial Products */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                  index === currentSlide
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
          </div>

          {/* Bottom Two Panels - Side by Side on Mobile */}
          <div className="grid grid-cols-2 md:contents gap-3">
            {/* Top Right Panel - Processing Techniques */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-amber-50 to-orange-100">
              {/* Content */}
              <div className="relative h-[200px] md:h-auto flex flex-col justify-center p-4 md:p-6">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                      index === currentSlide
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
              </div>
            </div>

            {/* Bottom Right Panel - Certifications */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-green-50 to-emerald-100">
              {/* Content */}
              <div className="relative h-[200px] md:h-auto flex flex-col justify-center p-4 md:p-6">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                      index === currentSlide
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
