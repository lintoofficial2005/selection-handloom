import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useModals } from '../../context/ModalContext';
import { 
  Search, 
  Heart, 
  ShoppingBag, 
  User, 
  Menu, 
  X, 
  Calendar,
  ChevronDown
} from 'lucide-react';

export const Header = ({ currentRoute, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopHovered, setIsShopHovered] = useState(false);

  const { totalItemsCount, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const { openSearch, openConsultation } = useModals();

  const isHome = currentRoute === 'home';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', route: 'home' },
    { label: 'SHOP', route: 'shop', hasDropdown: true },
    { label: 'CURTAINS', route: 'category-curtains' },
    { label: 'BLINDS', route: 'category-blinds' },
    { label: 'HOME LINEN', route: 'category-home-linen' },
    { label: 'SUITS', route: 'category-suits' },
    { label: 'ABOUT', route: 'about' },
    { label: 'CONTACT', route: 'contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        isScrolled || !isHome
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E6EDE6]'
          : 'bg-[#FAF7F2]/80 backdrop-blur-sm text-[#1F2E25]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Mobile menu trigger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#243528] hover:text-[#5B7A5E] focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* BRAND LOGO */}
          <div className="flex items-center">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3.5 text-left group cursor-pointer"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#739376]/40 shadow-sm transition-transform duration-300 group-hover:scale-105 bg-white shrink-0">
                <img
                  src="/assets/logo.jpg"
                  alt="Selection Handloom Logo - Estd 1950"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-brand-title text-base sm:text-lg font-semibold tracking-[0.18em] text-[#1E2A21] leading-tight">
                  SELECTION
                </span>
                <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[#5B7A5E] font-medium font-sans uppercase">
                  HANDLOOM
                </span>
                <span className="text-[8px] tracking-[0.2em] text-[#739376] uppercase font-sans hidden sm:block">
                  ESTD. 1950 • MEERUT
                </span>
              </div>
            </button>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative py-2"
                onMouseEnter={() => item.hasDropdown && setIsShopHovered(true)}
                onMouseLeave={() => item.hasDropdown && setIsShopHovered(false)}
              >
                <button
                  onClick={() => onNavigate(item.route)}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                    currentRoute === item.route
                      ? 'text-[#243528] font-bold border-b-2 border-[#5B7A5E] pb-1'
                      : 'text-[#3A403B] hover:text-[#5B7A5E]'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-3 h-3 opacity-60" />}
                </button>

                {/* Dropdown Menu for SHOP */}
                {item.hasDropdown && isShopHovered && (
                  <div className="absolute top-full left-0 w-64 bg-[#FAF7F2] border border-[#D0DDD1] rounded-lg shadow-xl py-3 px-4 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    <div className="text-[10px] uppercase tracking-widest text-[#739376] font-semibold mb-2 border-b border-[#E6EDE6] pb-1.5">
                      Explore Handlooms
                    </div>
                    <div className="flex flex-col gap-2 text-xs">
                      <button 
                        onClick={() => { onNavigate('category-curtains'); setIsShopHovered(false); }}
                        className="text-left py-1 text-[#243528] hover:text-[#5B7A5E] hover:translate-x-1 transition-all cursor-pointer"
                      >
                        Curtains &amp; Drapery
                      </button>
                      <button 
                        onClick={() => { onNavigate('category-blinds'); setIsShopHovered(false); }}
                        className="text-left py-1 text-[#243528] hover:text-[#5B7A5E] hover:translate-x-1 transition-all cursor-pointer"
                      >
                        Timber &amp; Roman Blinds
                      </button>
                      <button 
                        onClick={() => { onNavigate('category-home-linen'); setIsShopHovered(false); }}
                        className="text-left py-1 text-[#243528] hover:text-[#5B7A5E] hover:translate-x-1 transition-all cursor-pointer"
                      >
                        Home Linen &amp; Throws
                      </button>
                      <button 
                        onClick={() => { onNavigate('category-suits'); setIsShopHovered(false); }}
                        className="text-left py-1 text-[#243528] hover:text-[#5B7A5E] hover:translate-x-1 transition-all cursor-pointer"
                      >
                        Suiting &amp; Silk Fabrics
                      </button>
                      <div className="border-t border-[#E6EDE6] my-1" />
                      <button 
                        onClick={() => { onNavigate('shop'); setIsShopHovered(false); }}
                        className="text-left py-1 text-[#5B7A5E] font-semibold hover:underline cursor-pointer"
                      >
                        View All Collections →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT UTILITIES */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={openConsultation}
              className="hidden xl:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-semibold border border-[#739376] text-[#243528] bg-[#E6EDE6]/60 hover:bg-[#739376] hover:text-white transition-all cursor-pointer shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>

            <button
              onClick={openSearch}
              className="p-2 text-[#243528] hover:text-[#5B7A5E] transition-colors cursor-pointer rounded-full hover:bg-[#E6EDE6]/60"
              aria-label="Search Collection"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => onNavigate('account')}
              className="p-2 text-[#243528] hover:text-[#5B7A5E] transition-colors cursor-pointer rounded-full hover:bg-[#E6EDE6]/60"
              aria-label="My Account"
            >
              <User className="w-5 h-5" />
            </button>

            <button
              onClick={() => onNavigate('wishlist')}
              className="p-2 text-[#243528] hover:text-[#5B7A5E] transition-colors relative cursor-pointer rounded-full hover:bg-[#E6EDE6]/60"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#739376] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-[#243528] hover:text-[#5B7A5E] transition-colors relative cursor-pointer rounded-full hover:bg-[#E6EDE6]/60"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItemsCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#243528] text-[#FAF7F2] text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#D0DDD1] px-6 py-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  onNavigate(item.route);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left text-sm uppercase tracking-widest py-2 border-b border-[#E6EDE6] flex items-center justify-between cursor-pointer ${
                  currentRoute === item.route ? 'text-[#243528] font-bold' : 'text-[#3A403B]'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#739376]">→</span>
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  openConsultation();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-[#243528] text-white rounded-lg text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Book Measurement Consultation
              </button>
              <div className="text-center text-xs text-[#555C56] mt-2">
                Meerut Flagship: +91 121 264 5075
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
