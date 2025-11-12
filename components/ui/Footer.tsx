"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Shield,
  Leaf,
  TruckIcon,
  Award,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    // API call will go here
    setSubscribeStatus("Thank you for subscribing!");
    setEmail("");
    setTimeout(() => setSubscribeStatus(""), 3000);
  };

  const handleSupportClick = () => {
    console.log("Navigate to contact form page");
    // Navigation to contact form will go here
  };

  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white mt-12">
      {/* Trust Badges Section */}
      <div className="bg-amber-50 py-6 border-t-2 border-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {/* Badge 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <Leaf className="w-6 h-6 text-green-700" />
              </div>
              <h4 className="text-sm font-bold text-gray-800">100% Organic</h4>
              <p className="text-xs text-gray-600 mt-1">Certified Products</p>
            </div>

            {/* Badge 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <TruckIcon className="w-6 h-6 text-green-700" />
              </div>
              <h4 className="text-sm font-bold text-gray-800">Free Delivery</h4>
              <p className="text-xs text-gray-600 mt-1">
                On Orders Above ₹1000
              </p>
            </div>

            {/* Badge 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 text-green-700" />
              </div>
              <h4 className="text-sm font-bold text-gray-800">
                Secure Payment
              </h4>
              <p className="text-xs text-gray-600 mt-1">100% Protected</p>
            </div>

            {/* Badge 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-green-700" />
              </div>
              <h4 className="text-sm font-bold text-gray-800">Since 1956</h4>
              <p className="text-xs text-gray-600 mt-1">Trusted Quality</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 mb-12">
          {/* Left Section - Company Info */}
          <div className="col-span-3">
            {/* Logo + Name */}
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-4xl">🌾</span>
              <span className="text-2xl font-bold">Manas Krushi</span>
            </div>
            <p className="text-green-100 text-sm mb-6 leading-relaxed">
              Your trusted partner for 100% organic farm products. Bringing
              nature's goodness directly from our fields to your table since
              1956.
            </p>

            {/* Address */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-green-100">
                  <p>Village Pandhari, Tal. Shevgaon,</p>
                  <p>Dist. Ahmednagar, Maharashtra</p>
                  <p>PIN - 414502</p>
                </div>
              </div>

              {/* Phone and Mobile */}
              {/* <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-sm text-green-100 hover:text-amber-400 transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:info@manaskrushi.com"
                  className="text-sm text-green-100 hover:text-amber-400 transition-colors"
                >
                  info@manaskrushi.com
                </a>
              </div> */}
            </div>

            {/* Support Team Link */}
            <button
              onClick={handleSupportClick}
              className="flex items-center space-x-2 text-amber-400 hover:text-amber-300 font-semibold transition-colors group"
            >
              <div className="w-5 h-5 bg-amber-400 rounded-sm flex items-center justify-center group-hover:bg-amber-300 transition-colors">
                <span className="text-green-900 text-xs font-extrabold">↗</span>
              </div>
              <span className="text-sm">Support Team</span>
            </button>
          </div>

          {/* Middle Section - Links */}
          <div className="col-span-5 grid grid-cols-2 gap-3 pl-12">
            {/* gap-8 and no padding = original */}
            {/* Social Media Column */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-amber-400">
                Social Media
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm flex items-center space-x-2"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>YouTube</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm flex items-center space-x-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm flex items-center space-x-2"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm flex items-center space-x-2"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm flex items-center space-x-2"
                  >
                    <Twitter className="w-4 h-4" />
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://threads.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm flex items-center space-x-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 14.5c-.85 2.158-2.877 3.315-5.894 3.315-3.017 0-5.043-1.157-5.894-3.315C5.527 12.842 6.254 11 8.5 11c1.125 0 2.053.458 2.617 1.29.282.416.447.916.447 1.46 0 .544-.165 1.044-.447 1.46C10.553 16.042 9.625 16.5 8.5 16.5c-1.125 0-2.053-.458-2.617-1.29-.282-.416-.447-.916-.447-1.46h1.5c0 .272.083.524.224.738.282.428.76.762 1.34.762s1.058-.334 1.34-.762c.141-.214.224-.466.224-.738 0-.272-.083-.524-.224-.738-.282-.428-.76-.762-1.34-.762-1.786 0-3 1.343-3 3 0 2.485 2.015 4.5 4.5 4.5s4.5-2.015 4.5-4.5c0-1.657-.657-3-1.606-3.5z" />
                    </svg>
                    <span>Thread</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Policies Column */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-amber-400">
                Policies
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/faq"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/shipping-policy"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm"
                  >
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/cancellation-policy"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm"
                  >
                    Cancellation Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/return-policy"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm"
                  >
                    Return Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-and-conditions"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section - Newsletter & Quote */}
          <div className="col-span-4 space-y-6">
            {/* Newsletter */}
            <div className="bg-green-800/50 rounded-lg p-6 border border-green-700">
              <h3 className="text-lg font-bold mb-2 text-amber-400">
                Newsletter
              </h3>
              <p className="text-sm text-green-100 mb-4">
                Stay updated with our latest products and offers
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-green-600 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-green-900 font-bold py-2.5 rounded-lg transition-colors shadow-md hover:shadow-lg text-sm"
                >
                  Subscribe
                </button>
              </form>
              {subscribeStatus && (
                <p className="text-sm text-amber-400 mt-2 text-center">
                  {subscribeStatus}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8 mx-2">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-3xl">🌾</span>
              <span className="text-xl font-bold">Manas Krushi</span>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Your trusted partner for 100% organic farm products. Bringing
              nature's goodness directly from our fields to your table since
              1956.
            </p>
          </div>

          {/* Newsletter and Quote Side by Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Newsletter */}
            <div className="bg-green-800/50 rounded-lg p-4 border border-green-700">
              <h3 className="text-base font-bold mb-2 text-amber-400">
                Newsletter
              </h3>
              <p className="text-xs text-green-100 mb-3">
                Stay updated with our latest products
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-green-600 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-green-900 font-bold py-2 rounded-lg transition-colors text-sm"
                >
                  Subscribe
                </button>
              </form>
              {subscribeStatus && (
                <p className="text-xs text-amber-400 mt-2 text-center">
                  {subscribeStatus}
                </p>
              )}
            </div>
          </div>

          {/* Address Grid */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-amber-400">Contact Us</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-green-100">
                <p>Village Pandhari, Tal. Shevgaon,</p>
                <p>Dist. Ahmednagar, Maharashtra - 414502</p>
              </div>
            </div>

            {/* Phone & Email */}
            {/* <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <a
                href="tel:+919876543210"
                className="text-sm text-green-100 hover:text-amber-400"
              >
                +91 98765 43210
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <a
                href="mailto:info@manaskrushi.com"
                className="text-sm text-green-100 hover:text-amber-400"
              >
                info@manaskrushi.com
              </a>
            </div> */}

            {/* Support Team */}
            <button
              onClick={handleSupportClick}
              className="flex items-center space-x-2 text-amber-400 hover:text-amber-300 font-semibold transition-colors mt-2"
            >
              <div className="w-4 h-4 bg-amber-400 rounded-sm flex items-center justify-center">
                <span className="text-green-900 text-xs font-bold">↗</span>
              </div>
              <span className="text-sm">Support Team</span>
            </button>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Social Media */}
            <div>
              <h3 className="text-base font-bold mb-3 text-amber-400">
                Social Media
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm flex items-center space-x-2"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>YouTube</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm flex items-center space-x-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm flex items-center space-x-2"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm flex items-center space-x-2"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm flex items-center space-x-2"
                  >
                    <Twitter className="w-4 h-4" />
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://threads.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm flex items-center space-x-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 14.5c-.85 2.158-2.877 3.315-5.894 3.315-3.017 0-5.043-1.157-5.894-3.315C5.527 12.842 6.254 11 8.5 11c1.125 0 2.053.458 2.617 1.29.282.416.447.916.447 1.46 0 .544-.165 1.044-.447 1.46C10.553 16.042 9.625 16.5 8.5 16.5c-1.125 0-2.053-.458-2.617-1.29-.282-.416-.447-.916-.447-1.46h1.5c0 .272.083.524.224.738.282.428.76.762 1.34.762s1.058-.334 1.34-.762c.141-.214.224-.466.224-.738 0-.272-.083-.524-.224-.738-.282-.428-.76-.762-1.34-.762-1.786 0-3 1.343-3 3 0 2.485 2.015 4.5 4.5 4.5s4.5-2.015 4.5-4.5c0-1.657-.657-3-1.606-3.5z" />
                    </svg>
                    <span>Thread</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h3 className="text-base font-bold mb-3 text-amber-400">
                Policies
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/faq"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/shipping-policy"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm"
                  >
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/cancellation-policy"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm"
                  >
                    Cancellation Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/return-policy"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm"
                  >
                    Return Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-and-conditions"
                    className="text-green-100 hover:text-amber-400 transition-colors text-sm"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-green-700 mt-4 pt-3">
          <p className="text-center text-sm text-green-300">
            .... All Right Reserved ....
          </p>
        </div>
      </div>
    </footer>
  );
}
