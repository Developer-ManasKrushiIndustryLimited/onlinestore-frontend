"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function OrganicCarouselSlide() {

  const [commercialSlide, setCommercialSlide] = useState(0);
  const [processingSlide, setProcessingSlide] = useState(0);
  const [certificationSlide, setCertificationSlide] = useState(0);

  // Commercial Products - 8 Slides
  const commercialProducts = [
    { icon: '🌾', name: 'Brown Rice', tagline: 'Farm Fresh & Naturally Grown', desc: '100% Organic Brown Rice from our certified farm' },
    { icon: '🥥', name: 'Pure Cow Ghee', tagline: 'Traditional A2 Ghee', desc: 'Made from grass-fed desi cow milk' },
    { icon: '🌾', name: 'Whole Wheat Flour', tagline: 'Stone Ground Perfection', desc: 'Traditionally milled whole wheat atta' },
    { icon: '🍯', name: 'Jaggery Powder', tagline: 'Natural Sweetness', desc: 'Unrefined organic jaggery powder' },
    { icon: '🫒', name: 'Cold Press Oil', tagline: 'Pure & Chemical Free', desc: 'Traditional cold pressed cooking oils' },
    { icon: '🌶️', name: 'Red Chilli Powder', tagline: 'Farm Fresh Spices', desc: 'Sun-dried organic red chillies' },
    { icon: '🥭', name: 'Mango Pulp', tagline: 'Seasonal Delight', desc: 'Fresh organic mango pulp' },
    { icon: '🫚', name: 'Turmeric Powder', tagline: 'Golden Goodness', desc: 'High curcumin organic turmeric' }
  ];

  // Processing Techniques - 4 Slides
  const processingTechniques = [
    { title: 'Cold Press Method', subtitle: 'Oil Extraction', points: ['No Heat Applied', 'Retains Nutrients', 'Chemical-Free Process'] },
    { title: 'Stone Grinding', subtitle: 'Traditional Milling', points: ['Low Temperature', 'Preserves Nutrients', 'Authentic Taste'] },
    { title: 'Hand Pounding', subtitle: 'Spice Processing', points: ['Traditional Method', 'Sun Dried Spices', 'No Machines'] },
    { title: 'Natural Process', subtitle: 'Quality Assurance', points: ['Non-Refined', 'No Additives', 'Farm to Table'] }
  ];

  // Certifications - 4 Slides
  const certifications = [
    { title: 'Certified Organic', subtitle: 'Global Standards', points: ['India Organic', 'EU Certified', 'USDA Standard'] },
    { title: 'Since 2001', subtitle: 'Two Decades', points: ['Certified Farm', 'Trusted Quality', 'Proven Track Record'] },
    { title: 'Recognition', subtitle: 'Awarded', points: ['NCOF Training Agency', 'MH-SSC Supported', 'NHM Facilitator'] },
    { title: '200+ Acres', subtitle: 'Infrastructure', points: ['Organic Farmland', 'Modern Equipment', 'Skilled Team'] }
  ];

  return (

    <div className="w-full bg-white py-6 md:py-8 px-3 md:px-6">
      <div className="max-w-full mx-auto">
        
        {/* Carousel Container */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-3">
          
          {/* Left Large Panel - Commercial Products */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
            
            {/* Navigation Arrows */}
            <button 
              onClick={() => setCommercialSlide((commercialSlide - 1 + commercialProducts.length) % commercialProducts.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
            <button 
              onClick={() => setCommercialSlide((commercialSlide + 1) % commercialProducts.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>

            {/* Content */}
            <div className="relative h-[420px] md:h-full flex flex-col justify-center items-center text-center p-8 md:p-12">
              
              {/* Product Icon */}
              <div className="mb-6">
                <div className="w-40 h-40 md:w-56 md:h-56 bg-white/70 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-8xl md:text-9xl">{commercialProducts[commercialSlide].icon}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-2 mb-6">
                <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
                  {commercialProducts[commercialSlide].name}
                </h3>
                <p className="text-lg md:text-xl font-semibold text-orange-600">
                  {commercialProducts[commercialSlide].tagline}
                </p>
                <p className="text-sm md:text-base text-gray-700 max-w-md mx-auto">
                  {commercialProducts[commercialSlide].desc}
                </p>
              </div>

              {/* CTA Button */}
              <button className="px-8 py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-full shadow-lg transition-all duration-300 hover:scale-105">
                Shop Now
              </button>

              {/* Carousel Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {commercialProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCommercialSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      commercialSlide === index ? 'bg-green-700 w-8' : 'bg-gray-300 w-2'
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

          {/* Bottom Two Panels - Side by Side on Mobile */}
          <div className="grid grid-cols-2 md:contents gap-3">
            
            {/* Top Right Panel - Processing Techniques */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-amber-50 to-orange-100">
              
              {/* Navigation Arrows */}
              <button 
                onClick={() => setProcessingSlide((processingSlide - 1 + processingTechniques.length) % processingTechniques.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-1.5 rounded-full shadow-md transition-all"
              >
                <ChevronLeft className="w-3.5 h-3.5 text-gray-800" />
              </button>
              <button 
                onClick={() => setProcessingSlide((processingSlide + 1) % processingTechniques.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-1.5 rounded-full shadow-md transition-all"
              >
                <ChevronRight className="w-3.5 h-3.5 text-gray-800" />
              </button>

              {/* Content */}
              <div className="relative h-[200px] md:h-auto flex flex-col justify-center p-4 md:p-6">
                <div className="text-[10px] md:text-xs font-bold text-orange-700 mb-1 uppercase tracking-wide">
                  {processingTechniques[processingSlide].subtitle}
                </div>
                <h4 className="text-lg md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  {processingTechniques[processingSlide].title}
                </h4>
                <ul className="space-y-1.5">
                  {processingTechniques[processingSlide].points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-700">
                      <span className="w-1 h-1 bg-orange-600 rounded-full mt-1.5 flex-shrink-0"></span>
                      <span className="font-medium">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Carousel Dots */}
                <div className="flex justify-center gap-1.5 mt-4">
                  {processingTechniques.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setProcessingSlide(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        processingSlide === index ? 'bg-orange-700 w-6' : 'bg-orange-300 w-1.5'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Right Panel - Certifications */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-green-50 to-emerald-100">
              
              {/* Navigation Arrows */}
              <button 
                onClick={() => setCertificationSlide((certificationSlide - 1 + certifications.length) % certifications.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-1.5 rounded-full shadow-md transition-all"
              >
                <ChevronLeft className="w-3.5 h-3.5 text-gray-800" />
              </button>
              <button 
                onClick={() => setCertificationSlide((certificationSlide + 1) % certifications.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-1.5 rounded-full shadow-md transition-all"
              >
                <ChevronRight className="w-3.5 h-3.5 text-gray-800" />
              </button>

              {/* Content */}
              <div className="relative h-[200px] md:h-auto flex flex-col justify-center p-4 md:p-6">
                <div className="text-[10px] md:text-xs font-bold text-green-700 mb-1 uppercase tracking-wide">
                  {certifications[certificationSlide].subtitle}
                </div>
                <h4 className="text-lg md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  {certifications[certificationSlide].title}
                </h4>
                <ul className="space-y-1.5">
                  {certifications[certificationSlide].points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span className="font-medium">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Carousel Dots */}
                <div className="flex justify-center gap-1.5 mt-4">
                  {certifications.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCertificationSlide(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        certificationSlide === index ? 'bg-green-700 w-6' : 'bg-green-300 w-1.5'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}