"use client";

import { useState } from "react";
import {
  Search,
  ShoppingCart,
  User
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Change to true to test logged-in state

  const categories = [
    { id: 1, name: "Grains & Pulses", icon: "🌾" },
    { id: 2, name: "Dairy Product", icon: "🥛" },
    { id: 3, name: "Sweetener & Pickel", icon: "🍯" },
    { id: 4, name: "Fruits & Vege's", icon: "🥬" },
    { id: 5, name: "Seeds & Edible oil", icon: "🌻" },
    { id: 6, name: "Spices & Condiment", icon: "🌶️" },
  ];

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
    // API call for search will go here
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleCategoryClick = (categoryName: string) => {
    console.log("Category clicked:", categoryName);
    // Navigate to category page or apply filter
  };

  return (
    <nav className="bg-white border-none">
      {/* Desktop Navbar */}
      <div className="hidden lg:block">
        {/* Top Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity">
              <span className="text-3xl">🌾</span>
              <span className="text-2xl font-bold text-green-800 mr-3">
                Manas Krushi
              </span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for fresh produce, dairy, grains..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchKeyPress}
                  className="w-full pl-4 pr-12 py-3 border-2 border-green-200 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-amber-50"
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Menu */}
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-green-700 font-medium transition-colors">
                <span className="text-sm ml-2">Farmlife</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="relative text-gray-700 hover:text-green-700 transition-colors flex items-center space-x-1">
                <ShoppingCart className="w-5 h-5" />
                <span className="text-sm font-medium">Cart</span>
                {/* Cart badge - show only when items present */}
                {isLoggedIn && (
                  // Number of item entered in the cart -- make it dynamic later on
                  <span className="absolute -top-2 -left-2 bg-green-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                    3
                  </span>
                )}
              </button>
              <button
                className="flex items-center space-x-2 text-gray-700 hover:text-green-700 transition-colors font-medium text-sm"
                onClick={() =>
                  console.log(
                    isLoggedIn ? "Navigate to Profile" : "Navigate to Login"
                  )
                }
              >
                <User className="w-5 h-5" />
                <span>{isLoggedIn ? "Profile" : "Login"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Bar */}
        <div className="border-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 py-4 flex-wrap">
                {/* space-x-4 py-4 */}
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.name)}
                    className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full border-2 border-green-200 hover:border-green-500 hover:bg-green-50 transition-all font-medium text-gray-700 hover:text-green-800 shadow-sm"
                >
                  <span className="text-lg">{category.icon}</span> 
                  <span className="text-sm whitespace-nowrap">
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden">
        {/* Top Bar */}
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            {/* Logo */}
            <div className="flex items-center space-x-1.5">
              <span className="text-2xl">🌾</span>
              <span className="text-xl font-bold text-green-800 mr-3">
                Manas Krushi
              </span>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-3">
              {/* About us */}
              <button className="flex items-center space-x-1 text-gray-700 hover:text-green-700 text-sm font-medium">
                <span className="text-sm ml-2">Farmlife</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Cart */}
              <button className="relative text-gray-700 hover:text-green-700 flex items-center space-x-1">
                <ShoppingCart className="w-5 h-5" />
                <span className="text-sm font-medium">Cart</span>
                {isLoggedIn && (
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                    3
                  </span>
                )}
              </button>

              {/* User */}
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-green-700 transition-colors text-sm font-medium"
                onClick={() =>
                  console.log(
                    isLoggedIn ? "Navigate to Profile" : "Navigate to Login"
                  )
                }
              >
                <User className="w-5 h-5" />
                <span>{isLoggedIn ? "Profile" : "Login"}</span>
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKeyPress}
              className="w-full pl-4 pr-10 py-2.5 border-2 border-green-200 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-amber-50 text-sm"
            />
            <button
              onClick={handleSearch}
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-green-600 text-white p-1.5 rounded-full hover:bg-green-700 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Scroll Section */}
        <div className="border-none py-3 px-2">
          <div className="relative">
            {/* Category Scroll Container */}
            <div
              id="category-scroll"
              className="flex space-x-3 overflow-x-auto px-2 scroll-smooth hide-scrollbar
              [&::-webkit-scrollbar]:none [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.name)}
                  className="flex-shrink-0 flex flex-col items-center space-y-1 px-4 py-2 bg-white rounded-2xl border-2 border-green-200 hover:border-green-500 hover:bg-green-50 transition-all shadow-sm min-w-[100px]"
                >
                  <span className="text-2xl">{category.icon}</span>
                  <span className="text-xs font-medium text-gray-700 text-center whitespace-nowrap">
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
