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
  ChevronDown,
  ChevronRight,
  Phone,
  Sparkles
} from 'lucide-react';

export const Header = ({ currentRoute, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileShopOpen, setIsMobileShopOpen] = useState(false);
  const [isShopHovered, setIsShopHovered] = useState(false);

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

  const handleNavClick = (route) => {
    onNavigate(route);
    setIsMobileMenuOpen(false);
  };

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

            {/* BRAND LOGO — COMPACT & CENTERED ON MOBILE, ALIGNED LEFT ON DESKTOP */}
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
                    <div className="absolute top-full left-0 w-64 bg-[#FAF7F2] border border-[#D0DDD1] rounded-xl shadow-xl py-3 px-4 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
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

            {/* RIGHT UTILITIES: [SEARCH] [CART] ON MOBILE + EXTENDED ON DESKTOP */}
            <div className="flex items-center gap-1 sm:gap-2.5 lg:gap-4">
              <button
                onClick={openConsultation}
                className="hidden xl:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-semibold border border-[#739376] text-[#243528] bg-[#E6EDE6]/60 hover:bg-[#739376] hover:text-white transition-all cursor-pointer shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Consultation</span>
              </button>

              <button
                onClick={openSearch}
                className="w-10 h-10 rounded-full flex items-center justify-center text-[#243528] hover:text-[#5B7A5E] active:bg-[#E6EDE6] transition-colors cursor-pointer"
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
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#739376] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
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
            <div className="p-5 space-y-1 flex-1">
              
              {/* HOME */}
              <button
                onClick={() => handleNavClick('home')}
                className={`w-full text-left py-3 px-3 rounded-xl text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-between transition-colors ${
                  currentRoute === 'home' ? 'bg-[#E6EDE6] text-[#243528] font-bold' : 'text-[#3A403B] hover:bg-stone-100'
                }`}
              >
                <span>HOME</span>
                <ChevronRight className="w-4 h-4 text-[#739376]" />
              </button>

              {/* SHOP WITH ACCORDION */}
              <div className="rounded-xl overflow-hidden">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleNavClick('shop')}
                    className={`flex-1 text-left py-3 px-3 rounded-l-xl text-xs uppercase tracking-[0.2em] font-semibold transition-colors ${
                      currentRoute === 'shop' ? 'bg-[#E6EDE6] text-[#243528] font-bold' : 'text-[#3A403B] hover:bg-stone-100'
                    }`}
                  >
                    SHOP ALL TEXTILES
                  </button>
                  <button
                    onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
                    className="p-3 text-[#5B7A5E] hover:bg-stone-100 rounded-r-xl transition-colors cursor-pointer"
                    aria-label="Toggle Shop Categories"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileShopOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* ACCORDION CATEGORIES */}
                {isMobileShopOpen && (
                  <div className="bg-[#EDF3ED]/60 rounded-xl p-2.5 my-1 space-y-1 border border-[#D0DDD1]/50 animate-in fade-in duration-200">
                    <button
                      onClick={() => handleNavClick('category-curtains')}
                      className="w-full text-left py-2 px-3 text-xs text-[#243528] font-medium hover:text-[#5B7A5E] flex items-center justify-between rounded-lg hover:bg-white/60"
                    >
                      <span>Curtains &amp; Drapery</span>
                      <span className="text-[10px] text-[#739376]">34 Styles</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('category-blinds')}
                      className="w-full text-left py-2 px-3 text-xs text-[#243528] font-medium hover:text-[#5B7A5E] flex items-center justify-between rounded-lg hover:bg-white/60"
                    >
                      <span>Timber &amp; Roman Blinds</span>
                      <span className="text-[10px] text-[#739376]">22 Systems</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('category-home-linen')}
                      className="w-full text-left py-2 px-3 text-xs text-[#243528] font-medium hover:text-[#5B7A5E] flex items-center justify-between rounded-lg hover:bg-white/60"
                    >
                      <span>Home Linen &amp; Cushions</span>
                      <span className="text-[10px] text-[#739376]">48 Pieces</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('category-suits')}
                      className="w-full text-left py-2 px-3 text-xs text-[#243528] font-medium hover:text-[#5B7A5E] flex items-center justify-between rounded-lg hover:bg-white/60"
                    >
                      <span>Suiting &amp; Silk Fabrics</span>
                      <span className="text-[10px] text-[#739376]">28 Cuts</span>
                    </button>
                  </div>
                )}
              </div>

              {/* DIRECT CATEGORY SHORTCUTS */}
              <button
                onClick={() => handleNavClick('category-curtains')}
                className={`w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-between transition-colors ${
                  currentRoute === 'category-curtains' ? 'bg-[#E6EDE6] text-[#243528] font-bold' : 'text-[#555C56] hover:bg-stone-100'
                }`}
              >
                <span>CURTAINS</span>
                <span className="text-[10px] text-[#739376] font-sans">Flax / Jacquard</span>
              </button>

              <button
                onClick={() => handleNavClick('category-blinds')}
                className={`w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-between transition-colors ${
                  currentRoute === 'category-blinds' ? 'bg-[#E6EDE6] text-[#243528] font-bold' : 'text-[#555C56] hover:bg-stone-100'
                }`}
              >
                <span>BLINDS</span>
                <span className="text-[10px] text-[#739376] font-sans">Timber / Roman</span>
              </button>

              <button
                onClick={() => handleNavClick('category-home-linen')}
                className={`w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-between transition-colors ${
                  currentRoute === 'category-home-linen' ? 'bg-[#E6EDE6] text-[#243528] font-bold' : 'text-[#555C56] hover:bg-stone-100'
                }`}
              >
                <span>HOME LINEN</span>
                <span className="text-[10px] text-[#739376] font-sans">Block-Print / Throws</span>
              </button>

              <button
                onClick={() => handleNavClick('category-suits')}
                className={`w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-between transition-colors ${
                  currentRoute === 'category-suits' ? 'bg-[#E6EDE6] text-[#243528] font-bold' : 'text-[#555C56] hover:bg-stone-100'
                }`}
              >
                <span>SUITS &amp; FABRICS</span>
                <span className="text-[10px] text-[#739376] font-sans">Merino / Silk</span>
              </button>

              <div className="border-t border-[#E6EDE6] my-2" />

              {/* ABOUT & HERITAGE */}
              <button
                onClick={() => handleNavClick('about')}
                className={`w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-between transition-colors ${
                  currentRoute === 'about' ? 'bg-[#E6EDE6] text-[#243528] font-bold' : 'text-[#3A403B] hover:bg-stone-100'
                }`}
              >
                <span>OUR 75-YEAR HERITAGE</span>
                <Sparkles className="w-3.5 h-3.5 text-[#5B7A5E]" />
              </button>

              {/* STORE LOCATION */}
              <button
                onClick={() => handleNavClick('store-location')}
                className={`w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-between transition-colors ${
                  currentRoute === 'store-location' ? 'bg-[#E6EDE6] text-[#243528] font-bold' : 'text-[#3A403B] hover:bg-stone-100'
                }`}
              >
                <span>MEERUT SHOWROOM</span>
                <ChevronRight className="w-4 h-4 text-[#739376]" />
              </button>

              {/* CONTACT */}
              <button
                onClick={() => handleNavClick('contact')}
                className={`w-full text-left py-2.5 px-3 rounded-xl text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-between transition-colors ${
                  currentRoute === 'contact' ? 'bg-[#E6EDE6] text-[#243528] font-bold' : 'text-[#3A403B] hover:bg-stone-100'
                }`}
              >
                <span>CONTACT &amp; ENQUIRY</span>
                <ChevronRight className="w-4 h-4 text-[#739376]" />
              </button>

              {/* QUICK ACCOUNT & WISHLIST ROW */}
              <div className="grid grid-cols-2 gap-2 pt-3">
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
                    <span className="w-4 h-4 bg-[#739376] text-white text-[9px] font-bold rounded-full flex items-center justify-center ml-1">
                      {wishlistCount}
                    </span>
                  )}
                </button>
              </div>

            </div>

            {/* DRAWER FOOTER / CONCIERGE CALLOUT */}
            <div className="p-4 bg-white border-t border-[#E6EDE6] space-y-3 pb-safe">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openConsultation();
                }}
                className="w-full py-3.5 bg-[#243528] text-[#FAF7F2] rounded-xl text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 active:bg-[#3D503F] shadow-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#AEC4B0]" />
                <span>Book Laser Measurement</span>
              </button>

              <div className="text-center space-y-1">
                <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#243528]">
                  <Phone className="w-3.5 h-3.5 text-[#5B7A5E]" />
                  <span>Flagship: +91 121 264 5075</span>
                </div>
                <p className="text-[10px] text-[#555C56]">
                  Open 10:30 AM – 8:30 PM • Meerut Showroom
                </p>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

