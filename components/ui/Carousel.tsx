"use client";

import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface SlideProps {
  image: string;
  title: string;
  description: string;
}

const slidesData = {
  commercialProducts: [
    { image: "/images/products1.jpg", title: "Organic Vegetables", description: "Freshly harvested organic vegetables." },
    { image: "/images/products2.jpg", title: "Dairy Products", description: "Pure and fresh dairy from our farm." },
    { image: "/images/products3.jpg", title: "Grains & Pulses", description: "Naturally grown and chemical-free grains." },
    { image: "/images/products4.jpg", title: "Cold-Pressed Oils", description: "Nutrient-rich oils processed naturally." },
    { image: "/images/products5.jpg", title: "Organic Honey", description: "Raw, unfiltered honey from our beehives." },
    { image: "/images/products6.jpg", title: "Herbal Teas", description: "Soothing blends from our herbal garden." },
    { image: "/images/products7.jpg", title: "Organic Spices", description: "Authentic farm-grown spices." },
    { image: "/images/products8.jpg", title: "Fruit Preserves", description: "Homemade fruit jams and pickles." }
  ],
  foodProcessing: [
    { image: "/images/products1.jpg", title: "Sun Drying", description: "Traditional drying method to retain nutrients." },
    { image: "/images/products2.jpg", title: "Cold Grinding", description: "Preserving flavor and nutrition through low-heat grinding." },
    { image: "/images/products3.jpg", title: "Natural Fermentation", description: "Enhancing probiotic value naturally." },
    { image: "/images/products4.jpg", title: "Cold Storage", description: "Maintaining freshness without preservatives." }
  ],
  recognition: [
    { image: "/images/products1.jpg", title: "Organic Certification", description: "Certified by national organic board." },
    { image: "/images/products2.jpg", title: "Sustainability Award", description: "Recognized for eco-friendly farming." },
    { image: "/images/products3.jpg", title: "Best Farm 2024", description: "Awarded for outstanding quality produce." },
    { image: "/images/products4.jpg", title: "Green Innovation", description: "Acknowledged for innovative green practices." }
  ]
};

const Card: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden p-2 w-full h-full">
    <h3 className="text-lg font-semibold text-green-800 mb-2 text-center">{title}</h3>
    {children}
  </div>
);

const OrganicCarousel: React.FC = () => {
  return (
    <section className="flex flex-row w-full gap-4 p-6 bg-green-50 rounded-xl">
      {/* Left Large Section - Commercial Products */}
      <div className="flex-1">
        <Card title="Commercial Products (8 Slides)">
          <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000}>
            {slidesData.commercialProducts.map((slide, index) => (
              <div key={index} className="relative h-64">
                <Image src={slide.image} alt={slide.title} fill className="object-cover rounded-xl" />
                <p className="legend text-sm bg-opacity-60">{slide.title}</p>
              </div>
            ))}
          </Carousel>
        </Card>
      </div>

      {/* Right Section - Two stacked carousels */}
      <div className="flex flex-col gap-4 w-1/3">
        <Card title="Food Processing Technique (4 Slides)">
          <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000}>
            {slidesData.foodProcessing.map((slide, index) => (
              <div key={index} className="relative h-32">
                <Image src={slide.image} alt={slide.title} fill className="object-cover rounded-xl" />
                <p className="legend text-xs bg-opacity-60">{slide.title}</p>
              </div>
            ))}
          </Carousel>
        </Card>

        <Card title="Recognition & Certification (4 Slides)">
          <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000}>
            {slidesData.recognition.map((slide, index) => (
              <div key={index} className="relative h-32">
                <Image src={slide.image} alt={slide.title} fill className="object-cover rounded-xl" />
                <p className="legend text-xs bg-opacity-60">{slide.title}</p>
              </div>
            ))}
          </Carousel>
        </Card>
      </div>
    </section>
  );
};

export default OrganicCarousel;
