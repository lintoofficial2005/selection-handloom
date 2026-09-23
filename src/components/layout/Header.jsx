import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useModals } from '../../context/ModalContext';
import { mainCategories } from '../../data/categories';
import { 
  Search, 
  Heart, 
  ShoppingBag, 
  User, 
  Menu, 
  X, 
  Calendar,
  ChevronDown,
  ChevronRight,
  Phone,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const Header = ({ currentRoute, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileFurnishingsOpen, setIsMobileFurnishingsOpen] = useState(true);
  const [isMobileSuitsOpen, setIsMobileSuitsOpen] = useState(false);
  const [isFurnishingsHovered, setIsFurnishingsHovered] = useState(false);

  const { totalItemsCount, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const { openSearch, openConsultation } = useModals();

  const isHome = currentRoute === 'home';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (route) => {
    onNavigate(route);
    setIsMobileMenuOpen(false);
    setIsFurnishingsHovered(false);
  };

  const homeFurnishingMeta = mainCategories.find(c => c.id === 'home-furnishings');

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled || !isHome
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E6EDE6]'
            : 'bg-[#FAF7F2]/90 backdrop-blur-sm text-[#1F2E25]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            
            {/* MOBILE: [☰] LEFT TRIGGER */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="w-10 h-10 -ml-1 rounded-full flex items-center justify-center text-[#243528] active:bg-[#E6EDE6] transition-colors cursor-pointer"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* BRAND LOGO */}
            <div className="flex items-center">
              <button
                onClick={() => onNavigate('home')}
                className="flex items-center gap-2.5 sm:gap-3.5 text-left group cursor-pointer"
              >
                <div className="relative w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border border-[#739376]/50 shadow-xs transition-transform duration-300 group-hover:scale-105 bg-white shrink-0">
                  <img
                    src="/assets/logo.jpg"
                    alt="Selection Handloom Emblem"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-brand-title text-sm sm:text-base lg:text-lg font-semibold tracking-[0.16em] sm:tracking-[0.18em] text-[#1E2A21] leading-none sm:leading-tight">
                    SELECTION
                  </span>
                  <span className="text-[8px] sm:text-[10px] lg:text-xs tracking-[0.22em] text-[#5B7A5E] font-medium font-sans uppercase mt-0.5 sm:mt-0">
                    HANDLOOM
                  </span>
                  <span className="text-[7px] sm:text-[8px] tracking-[0.18em] text-[#739376] uppercase font-sans hidden md:block">
                    ESTD. 1950 • MEERUT
                  </span>
                </div>
              </button>
            </div>

            {/* DESKTOP NAVIGATION WITH CENTER-EXPANDING LUXURY UNDERLINE */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {/* HOME */}
              <button
                onClick={() => onNavigate('home')}
                className={`relative py-1 text-xs uppercase tracking-[0.20em] font-medium transition-colors duration-200 cursor-pointer group ${
                  currentRoute === 'home' ? 'text-[#243528] font-bold' : 'text-[#3A403B] hover:text-[#243528]'
                }`}
              >
                <span>HOME</span>
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#5B7A5E] transition-all duration-300 ease-out ${
                    currentRoute === 'home' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>

              {/* HOME FURNISHINGS MEGA DROPDOWN */}
              <div
                className="relative py-2"
                onMouseEnter={() => setIsFurnishingsHovered(true)}
                onMouseLeave={() => setIsFurnishingsHovered(false)}
              >
                <button
                  onClick={() => onNavigate('category-home-furnishings')}
                  className={`relative py-1 text-xs uppercase tracking-[0.20em] font-medium transition-colors duration-200 cursor-pointer flex items-center gap-1 group ${
                    currentRoute.includes('bedding') || 
                    currentRoute.includes('curtains') || 
                    currentRoute.includes('bath') || 
                    currentRoute.includes('soft') || 
                    currentRoute === 'category-home-furnishings'
                      ? 'text-[#243528] font-bold'
                      : 'text-[#3A403B] hover:text-[#243528]'
                  }`}
                >
                  <span>HOME FURNISHINGS</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isFurnishingsHovered ? 'rotate-180 text-[#5B7A5E]' : 'opacity-60'}`} />
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#5B7A5E] transition-all duration-300 ease-out ${
                      currentRoute.includes('bedding') || 
                      currentRoute.includes('curtains') || 
                      currentRoute.includes('bath') || 
                      currentRoute.includes('soft') || 
                      currentRoute === 'category-home-furnishings'
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>

                {/* MEGA MENU CONTAINER */}
                {isFurnishingsHovered && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] xl:w-[780px] bg-[#FAF7F2] border border-[#D0DDD1] rounded-2xl shadow-2xl p-6 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    <div className="grid grid-cols-4 gap-5">
                      {homeFurnishingMeta?.categories.map((cat) => (
                        <div key={cat.id} className="space-y-2">
                          <button
                            onClick={() => handleNavClick(cat.slug)}
                            className="text-left font-brand-title text-sm font-bold text-[#1E2A21] hover:text-[#5B7A5E] transition-colors block border-b border-[#E6EDE6] pb-1.5 cursor-pointer"
                          >
                            {cat.name}
                          </button>
                          <ul className="space-y-1 text-xs text-[#555C56]">
                            {cat.subcategories.map((sub) => (
                              <li key={sub}>
                                <button
                                  onClick={() => handleNavClick(`${cat.slug}?sub=${encodeURIComponent(sub)}`)}
                                  className="text-left py-0.5 text-[#555C56] hover:text-[#243528] hover:translate-x-1 transition-all cursor-pointer block"
                                >
                                  {sub}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 pt-4 border-t border-[#E6EDE6] flex items-center justify-between bg-[#EDF3ED] -mx-6 -mb-6 px-6 py-3 rounded-b-2xl">
                      <span className="text-[11px] text-[#49634C] font-medium">
                        ✨ 75 Years of Masterhouse Furnishings • Made with 100% Certified Fibres
                      </span>
                      <button
                        onClick={() => handleNavClick('category-home-furnishings')}
                        className="text-xs text-[#243528] font-bold uppercase tracking-wider hover:text-[#5B7A5E] flex items-center gap-1 cursor-pointer"
                      >
                        <span>Explore All Furnishings</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* LADIES' SUITS */}
              <button
                onClick={() => onNavigate('category-suits')}
                className={`relative py-1 text-xs uppercase tracking-[0.20em] font-medium transition-colors duration-200 cursor-pointer group ${
                  currentRoute === 'category-suits' || currentRoute === 'category-ladies-suits'
                    ? 'text-[#243528] font-bold'
                    : 'text-[#3A403B] hover:text-[#243528]'
                }`}
              >
                <span>LADIES' SUITS</span>
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#5B7A5E] transition-all duration-300 ease-out ${
                    currentRoute === 'category-suits' || currentRoute === 'category-ladies-suits'
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>

              {/* NEW ARRIVALS */}
              <button
                onClick={() => onNavigate('new-arrivals')}
                className={`relative py-1 text-xs uppercase tracking-[0.20em] font-bold transition-colors duration-200 cursor-pointer flex items-center gap-1.5 group ${
                  currentRoute === 'new-arrivals' ? 'text-[#D96C4A]' : 'text-[#D96C4A] hover:text-[#B85333]'
                }`}
              >
                <Sparkles className="w-3 h-3 text-[#D99B26]" />
                <span>NEW ARRIVALS</span>
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#D96C4A] transition-all duration-300 ease-out ${
                    currentRoute === 'new-arrivals' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>

              {/* ABOUT US */}
              <button
                onClick={() => onNavigate('about')}
                className={`relative py-1 text-xs uppercase tracking-[0.20em] font-medium transition-colors duration-200 cursor-pointer group ${
                  currentRoute === 'about' ? 'text-[#243528] font-bold' : 'text-[#3A403B] hover:text-[#243528]'
                }`}
              >
                <span>ABOUT US</span>
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#5B7A5E] transition-all duration-300 ease-out ${
                    currentRoute === 'about' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>

              {/* CONTACT */}
              <button
                onClick={() => onNavigate('contact')}
                className={`relative py-1 text-xs uppercase tracking-[0.20em] font-medium transition-colors duration-200 cursor-pointer group ${
                  currentRoute === 'contact' ? 'text-[#243528] font-bold' : 'text-[#3A403B] hover:text-[#243528]'
                }`}
              >
                <span>CONTACT</span>
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#5B7A5E] transition-all duration-300 ease-out ${
                    currentRoute === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            </nav>

            {/* RIGHT UTILITIES: [SEARCH] [ACCOUNT] [WISHLIST] [CART] */}
            <div className="flex items-center gap-1 sm:gap-2.5 lg:gap-3.5">
              <button
                onClick={openConsultation}
                className="hidden xl:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-semibold border border-[#739376] text-[#243528] bg-[#E6EDE6]/60 hover:bg-[#739376] hover:text-white transition-all duration-300 cursor-pointer shadow-xs"
              >
                <Calendar className="w-3 h-3 text-[#5B7A5E]" />
                <span>Book Consultation</span>
              </button>

              <button
                onClick={openSearch}
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#243528] hover:text-[#5B7A5E] hover:bg-[#E6EDE6]/60 active:bg-[#E6EDE6] transition-colors cursor-pointer"
                aria-label="Search Collection"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('account')}
                className="hidden sm:flex w-10 h-10 rounded-full items-center justify-center text-[#243528] hover:text-[#5B7A5E] hover:bg-[#E6EDE6]/60 transition-colors cursor-pointer"
                aria-label="My Account"
              >
                <User className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('wishlist')}
                className="hidden sm:flex w-10 h-10 rounded-full items-center justify-center text-[#243528] hover:text-[#5B7A5E] relative hover:bg-[#E6EDE6]/60 transition-colors cursor-pointer"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#D96C4A] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                    {wishlistCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className="w-10 h-10 -mr-1 sm:mr-0 rounded-full flex items-center justify-center text-[#243528] hover:text-[#5B7A5E] active:bg-[#E6EDE6] relative transition-colors cursor-pointer"
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
      </header>

      {/* FULL-SCREEN LUXURY MOBILE SLIDE-OVER DRAWER */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* BACKDROP */}
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-[#1E2A21]/60 backdrop-blur-xs animate-in fade-in duration-300"
          />

          {/* SLIDE-OVER SHEET */}
          <div className="relative w-full max-w-[340px] sm:max-w-sm bg-[#FAF7F2] h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-left duration-300 border-r border-[#D0DDD1]">
            
            {/* DRAWER TOP BAR */}
            <div className="p-4 sm:p-5 border-b border-[#E6EDE6] bg-white flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-[#739376]/50 bg-white">
                  <img
                    src="/assets/logo.jpg"
                    alt="Selection Handloom"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-brand-title text-xs font-bold tracking-wider text-[#1E2A21]">
                    SELECTION HANDLOOM
                  </span>
                  <span className="text-[8px] tracking-widest text-[#5B7A5E] font-medium uppercase">
                    ESTD. 1950 • MEERUT
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-[#FAF7F2] flex items-center justify-center text-[#243528] active:bg-[#E6EDE6] cursor-pointer"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* DRAWER NAVIGATION LINKS */}
            <div className="p-4 sm:p-5 space-y-1.5 flex-1 overflow-y-auto">
              
              {/* HOME */}
              <button
                onClick={() => handleNavClick('home')}
                className={`w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase tracking-[0.18em] font-semibold flex items-center justify-between transition-colors ${
                  currentRoute === 'home' ? 'bg-[#E6EDE6] text-[#243528] font-bold' : 'text-[#3A403B] hover:bg-stone-100'
                }`}
              >
                <span>HOME</span>
                <ChevronRight className="w-4 h-4 text-[#739376]" />
              </button>

              {/* HOME FURNISHINGS ACCORDION */}
              <div className="rounded-xl overflow-hidden border border-[#D0DDD1]/60 bg-white/70">
                <div className="flex items-center justify-between p-1">
                  <button
                    onClick={() => handleNavClick('category-home-furnishings')}
                    className="flex-1 text-left py-2 px-2.5 text-xs uppercase tracking-[0.18em] font-bold text-[#1E2A21]"
                  >
                    HOME FURNISHINGS
                  </button>
                  <button
                    onClick={() => setIsMobileFurnishingsOpen(!isMobileFurnishingsOpen)}
                    className="p-2 text-[#5B7A5E] hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
                    aria-label="Toggle Furnishings Categories"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileFurnishingsOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {isMobileFurnishingsOpen && (
                  <div className="px-3 pb-3 pt-1 space-y-1 border-t border-[#E6EDE6] bg-[#EDF3ED]/40 text-xs">
                    {/* Bedding */}
                    <button
                      onClick={() => handleNavClick('category-bedding')}
                      className="w-full text-left py-2 px-2.5 font-semibold text-[#243528] flex items-center justify-between hover:bg-white rounded-lg transition-colors"
                    >
                      <span>Bedding</span>
                      <span className="text-[10px] text-[#739376]">Bedsheets, Dohars, Quilts</span>
                    </button>

                    {/* Curtains */}
                    <button
                      onClick={() => handleNavClick('category-curtains')}
                      className="w-full text-left py-2 px-2.5 font-semibold text-[#243528] flex items-center justify-between hover:bg-white rounded-lg transition-colors"
                    >
                      <span>Curtains</span>
                      <span className="text-[10px] text-[#739376]">Stitched &amp; Unstitched</span>
                    </button>

                    {/* Bath & Linen */}
                    <button
                      onClick={() => handleNavClick('category-bath-linen')}
                      className="w-full text-left py-2 px-2.5 font-semibold text-[#243528] flex items-center justify-between hover:bg-white rounded-lg transition-colors"
                    >
                      <span>Bath &amp; Linen</span>
                      <span className="text-[10px] text-[#739376]">Towels &amp; Bathrobes</span>
                    </button>

                    {/* Soft Furnishings */}
                    <button
                      onClick={() => handleNavClick('category-soft-furnishings')}
                      className="w-full text-left py-2 px-2.5 font-semibold text-[#243528] flex items-center justify-between hover:bg-white rounded-lg transition-colors"
                    >
                      <span>Soft Furnishings</span>
                      <span className="text-[10px] text-[#739376]">Covers, Cushions, Bolsters</span>
                    </button>
                  </div>
                )}
              </div>

              {/* LADIES' SUITS ACCORDION */}
              <div className="rounded-xl overflow-hidden border border-[#D0DDD1]/60 bg-white/70">
                <div className="flex items-center justify-between p-1">
                  <button
                    onClick={() => handleNavClick('category-suits')}
                    className="flex-1 text-left py-2 px-2.5 text-xs uppercase tracking-[0.18em] font-bold text-[#1E2A21]"
                  >
                    LADIES' SUITS
                  </button>
                  <button
                    onClick={() => setIsMobileSuitsOpen(!isMobileSuitsOpen)}
                    className="p-2 text-[#5B7A5E] hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
                    aria-label="Toggle Suits Categories"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileSuitsOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {isMobileSuitsOpen && (
                  <div className="px-3 pb-3 pt-1 space-y-1 border-t border-[#E6EDE6] bg-[#EDF3ED]/40 text-xs">
                    <button
                      onClick={() => handleNavClick('category-suits')}
                      className="w-full text-left py-2 px-2.5 font-semibold text-[#243528] flex items-center justify-between hover:bg-white rounded-lg transition-colors"
                    >
                      <span>Unstitched</span>
                      <span className="text-[10px] text-[#739376]">Matka Silk, Chanderi, Merino</span>
                    </button>
                  </div>
                )}
              </div>

              {/* NEW ARRIVALS */}
              <button
                onClick={() => handleNavClick('new-arrivals')}
                className={`w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase tracking-[0.18em] font-bold flex items-center justify-between transition-colors ${
                  currentRoute === 'new-arrivals' ? 'bg-[#FBEBE6] text-[#D96C4A]' : 'text-[#D96C4A] hover:bg-stone-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#D99B26]" />
                  <span>NEW ARRIVALS</span>
                </div>
                <span className="text-[9px] bg-[#D96C4A] text-white px-2 py-0.5 rounded-full font-bold uppercase">
                  Fresh
                </span>
              </button>

              {/* ABOUT US */}
              <button
                onClick={() => handleNavClick('about')}
                className={`w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase tracking-[0.18em] font-medium flex items-center justify-between transition-colors ${
                  currentRoute === 'about' ? 'bg-[#E6EDE6] text-[#243528] font-bold' : 'text-[#3A403B] hover:bg-stone-100'
                }`}
              >
                <span>ABOUT US (75 YEARS)</span>
                <ChevronRight className="w-4 h-4 text-[#739376]" />
              </button>

              {/* CONTACT */}
              <button
                onClick={() => handleNavClick('contact')}
                className={`w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase tracking-[0.18em] font-medium flex items-center justify-between transition-colors ${
                  currentRoute === 'contact' ? 'bg-[#E6EDE6] text-[#243528] font-bold' : 'text-[#3A403B] hover:bg-stone-100'
                }`}
              >
                <span>CONTACT</span>
                <ChevronRight className="w-4 h-4 text-[#739376]" />
              </button>

              {/* QUICK ACCOUNT & WISHLIST ROW */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={() => handleNavClick('account')}
                  className="py-2.5 px-3 bg-white rounded-xl border border-[#D0DDD1] text-xs font-semibold text-[#243528] flex items-center justify-center gap-1.5 active:bg-[#E6EDE6]"
                >
                  <User className="w-4 h-4 text-[#5B7A5E]" />
                  <span>My Account</span>
                </button>
                <button
                  onClick={() => handleNavClick('wishlist')}
                  className="py-2.5 px-3 bg-white rounded-xl border border-[#D0DDD1] text-xs font-semibold text-[#243528] flex items-center justify-center gap-1.5 active:bg-[#E6EDE6] relative"
                >
                  <Heart className="w-4 h-4 text-[#5B7A5E]" />
                  <span>Wishlist</span>
                  {wishlistCount > 0 && (
                    <span className="w-4 h-4 bg-[#D96C4A] text-white text-[9px] font-bold rounded-full flex items-center justify-center ml-1">
                      {wishlistCount}
                    </span>
                  )}
                </button>
              </div>

            </div>

            {/* DRAWER FOOTER / CONCIERGE CALLOUT */}
            <div className="p-4 bg-white border-t border-[#E6EDE6] space-y-2.5 pb-safe">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openConsultation();
                }}
                className="w-full py-3.5 bg-[#243528] text-[#FAF7F2] rounded-xl text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 active:bg-[#3D503F] shadow-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#AEC4B0]" />
                <span>Book Consultation</span>
              </button>

              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#243528]">
                  <Phone className="w-3.5 h-3.5 text-[#5B7A5E]" />
                  <span>Flagship: +91 121 264 5075</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
