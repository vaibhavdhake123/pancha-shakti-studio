import { useState } from "react";
import { Menu, X, Search, ShoppingCart, User, ChevronDown, Heart } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Top Section */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="w-14 h-14 bg-gradient-to-br from-yellow-900 to-yellow-800 rounded-full flex items-center 
          justify-center text-white font-bold text-2xl border-2 border-yellow-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            P
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8 items-center">
            <a href="/" className="text-gray-500 hover:text-green-600 transition-colors duration-300 font-medium">HOME</a>
            <a href="#" className="text-gray-800 font-bold hover:text-green-600 transition-colors duration-300">SHOP</a>
            <a href="#" className="text-gray-800 font-bold hover:text-green-600 transition-colors duration-300">BUNDLES</a>

            <button className="text-gray-800 font-bold flex items-center gap-1 hover:text-green-600 transition-colors duration-300 group">
              ABOUT <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>

            <a href="#" className="text-gray-800 font-bold hover:text-green-600 transition-colors duration-300">BLOG</a>
            <a href="#" className="text-gray-800 font-bold hover:text-green-600 transition-colors duration-300">TESTIMONIALS</a>
            <a href="/contact-us" className="text-gray-800 font-bold hover:text-green-600 transition-colors duration-300">CONTACT US</a>
          </nav>

          {/* Right Icons */}
          <div className="hidden lg:flex gap-6 items-center">
            {/* User Icon */}
            <button className="text-gray-700 hover:text-green-600 transition-all duration-300 transform hover:scale-110">
              <User size={22} />
            </button>

            {/* Wishlist Icon */}
            <button className="text-gray-700 hover:text-green-600 transition-all duration-300 transform hover:scale-110">
              <Heart size={22} />
            </button>

            {/* Shopping Cart */}
            <button className="relative text-gray-700 hover:text-green-600 transition-all duration-300 transform hover:scale-110">
              <ShoppingCart size={22} />
              <span className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white text-xs font-bold rounded-full 
              w-6 h-6 flex items-center justify-center shadow-md">0</span>
            </button>

            {/* Search Bar - Horizontal Expand */}
            <div className={`transition-all duration-300 overflow-hidden ${searchOpen ? 'w-64' : 'w-0'}`}>
              <div className="relative ml-2">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full px-3 py-2 pl-9 border-2 border-green-600 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm"
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Search Icon */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-700 hover:text-green-600 transition-all duration-300 transform hover:scale-110"
            >
              <Search size={22} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-700 hover:text-green-600 transition-all duration-300 transform hover:scale-110"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="lg:hidden bg-gradient-to-b from-gray-50 to-white border-t-2 border-green-600 px-4 py-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="space-y-3">
            <a href="/" className="block text-gray-700 py-2 hover:text-green-600 hover:translate-x-2 transition-all duration-300 font-medium">HOME</a>
            <a href="#" className="block text-gray-800 font-bold py-2 hover:text-green-600 hover:translate-x-2 transition-all duration-300">SHOP</a>
            <a href="#" className="block text-gray-800 font-bold py-2 hover:text-green-600 hover:translate-x-2 transition-all duration-300">BUNDLES</a>
            <a href="#" className="block text-gray-800 font-bold py-2 hover:text-green-600 hover:translate-x-2 transition-all duration-300">ABOUT</a>
            <a href="#" className="block text-gray-800 font-bold py-2 hover:text-green-600 hover:translate-x-2 transition-all duration-300">BLOG</a>
            <a href="#" className="block text-gray-800 font-bold py-2 hover:text-green-600 hover:translate-x-2 transition-all duration-300">TESTIMONIALS</a>
            <a href="/contact-us" className="block text-gray-800 font-bold py-2 hover:text-green-600 hover:translate-x-2 transition-all duration-300">CONTACT US</a>
          </div>

          {/* Mobile Search */}
          <div className="mt-4 pt-4 border-t-2 border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 border-2 border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}