import React, { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useModals } from '../context/ModalContext';
import { FabricSpecs } from '../components/product/FabricSpecs';
import { CustomizerModal } from '../components/product/CustomizerModal';
import { PairWithSection } from '../components/product/PairWithSection';
import { SafeImage } from '../components/ui/SafeImage';
import { 
  Heart, 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  Ruler, 
  Check, 
  ChevronRight, 
  Clock
} from 'lucide-react';

export const ProductDetailPage = ({ productId, onNavigate }) => {
  const product = products.find(p => p.id === productId) || products[0];
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { showToast, openConsultation } = useModals();

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || 'Standard');
  const [selectedDim, setSelectedDim] = useState(product.dimensions?.[0]?.label || 'Standard');
  const [selectedHeader, setSelectedHeader] = useState(product.headerTypes?.[0] || 'Standard');
  const [quantity, setQuantity] = useState(1);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  const isWishlisted = isInWishlist(product.id);

  // Calculate dynamic selected dimension price
  const activeDimObj = product.dimensions?.find(d => d.label === selectedDim);
  const multiplier = activeDimObj ? activeDimObj.priceMultiplier : 1;
  const currentPrice = Math.round(product.price * multiplier);

  const handleAddToCart = () => {
    addToCart(product, {
      color: selectedColor,
      dimension: selectedDim,
      headerType: selectedHeader,
      finalPrice: currentPrice,
      quantity,
      image: product.images[activeImageIdx] || product.images[0]
    });
    showToast(`Added ${quantity}x ${product.name} to your bag`);
  };

  const handleBuyNow = () => {
    addToCart(product, {
      color: selectedColor,
      dimension: selectedDim,
      headerType: selectedHeader,
      finalPrice: currentPrice,
      quantity,
      image: product.images[activeImageIdx] || product.images[0]
    });
    onNavigate('checkout');
  };

  return (
    <div className="py-6 sm:py-10 bg-[#FAF7F2] min-h-screen animate-in fade-in duration-300 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* BREADCRUMBS */}
        <nav className="flex items-center gap-1.5 sm:gap-2 text-xs text-[#555C56] mb-4 sm:mb-8 font-sans">
          <button onClick={() => onNavigate('home')} className="hover:text-[#243528] cursor-pointer">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <button onClick={() => onNavigate(`category-${product.category}`)} className="hover:text-[#243528] cursor-pointer">
            {product.categoryName}
          </button>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="text-[#243528] font-semibold truncate max-w-[140px] sm:max-w-xs">{product.name}</span>
        </nav>

        {/* MAIN PRODUCT SHOWCASE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          
          {/* LEFT: GALLERY WITH TOUCH SWIPE & PAGINATION */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            
            {/* MAIN STAGE IMAGE */}
            <div className="aspect-4/3 sm:aspect-16/11 bg-[#F5EFE6] rounded-2xl overflow-hidden border border-[#D0DDD1] shadow-xs relative group">
              <SafeImage
                src={product.images[activeImageIdx] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#243528]/90 text-[#FAF7F2] text-[9px] sm:text-[10px] uppercase tracking-widest px-2.5 sm:px-3 py-1 rounded-full backdrop-blur-xs font-semibold">
                {product.origin}
              </span>

              {/* MOBILE PREV/NEXT QUICK ARROWS */}
              {product.images.length > 1 && (
                <div className="sm:hidden absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIdx(prev => (prev > 0 ? prev - 1 : product.images.length - 1));
                    }}
                    className="pointer-events-auto w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-[#243528] shadow-sm"
                    aria-label="Previous Image"
                  >
                    ‹
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIdx(prev => (prev < product.images.length - 1 ? prev + 1 : 0));
                    }}
                    className="pointer-events-auto w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-[#243528] shadow-sm"
                    aria-label="Next Image"
                  >
                    ›
                  </button>
                </div>
              )}
            </div>

            {/* THUMBNAILS CAROUSEL + MOBILE DOTS */}
            <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-3 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`w-14 h-14 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer bg-white ${
                    activeImageIdx === idx
                      ? 'border-[#243528] ring-1.5 sm:ring-2 ring-[#739376]/40 scale-102 sm:scale-105 shadow-sm'
                      : 'border-[#D0DDD1] opacity-65 hover:opacity-100'
                  }`}
                  aria-label={`View photo ${idx + 1}`}
                >
                  <SafeImage src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* TACTILE PROMISE BADGE */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E6EDE6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#243528]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#5B7A5E] shrink-0" />
                <span>Certified Pure Warp &amp; Weft Integrity</span>
              </div>
              <button
                onClick={openConsultation}
                className="text-[#5B7A5E] hover:underline font-semibold cursor-pointer text-left"
              >
                Request Free Swatch Sample →
              </button>
            </div>

          </div>

          {/* RIGHT: DETAILS, CUSTOM SIZING & BUY ACTIONS */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold">
                  {product.categoryName} • ESTD. 1950
                </span>
                <button
                  onClick={() => {
                    toggleWishlist(product.id);
                    showToast(isWishlisted ? 'Removed from Wishlist' : 'Saved to Wishlist');
                  }}
                  className="p-2 rounded-full border border-[#D0DDD1] bg-white text-[#243528] active:scale-90 cursor-pointer"
                  title="Save to Wishlist"
                  aria-label="Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#739376] text-[#739376]' : ''}`} />
                </button>
              </div>

              <h1 className="font-brand-title text-xl sm:text-3xl font-bold text-[#1E2A21] leading-tight mb-1.5">
                {product.name}
              </h1>

              <p className="font-editorial text-sm italic text-[#555C56] mb-3">
                "{product.tagline}"
              </p>

              {/* PRICING */}
              <div className="flex items-baseline gap-2.5 sm:gap-3 pb-3 sm:pb-4 border-b border-[#E6EDE6]">
                <span className="font-sans text-2xl sm:text-3xl font-bold text-[#1E2A21]">
                  ₹{currentPrice.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-xs sm:text-sm text-[#555C56]/60 line-through font-sans">
                    ₹{(product.originalPrice * multiplier).toFixed(0).toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-[10px] sm:text-xs bg-[#E6EDE6] text-[#49634C] px-2 py-0.5 rounded-full font-semibold">
                  Jubilee Edition
                </span>
              </div>
            </div>

            {/* COLORWAYS */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <span className="text-xs uppercase tracking-wider text-[#555C56] font-semibold block mb-2">
                  Selected Weave Color: <strong className="text-[#243528]">{selectedColor}</strong>
                </span>
                <div className="flex gap-2.5 sm:gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 transition-all flex items-center justify-center cursor-pointer ${
                        selectedColor === c.name
                          ? 'border-[#243528] ring-2 ring-[#739376]/50 scale-105 shadow-sm'
                          : 'border-stone-300'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                      aria-label={c.name}
                    >
                      {selectedColor === c.name && (
                        <Check className={`w-4 h-4 ${c.hex === '#FFFFFF' || c.hex === '#FAF5EE' ? 'text-black' : 'text-white'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* DIMENSIONS SELECTOR */}
            {product.dimensions && product.dimensions.length > 0 && (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs uppercase tracking-wider text-[#555C56] font-semibold">
                    Dimensions / Cut:
                  </span>
                  <button
                    onClick={() => setIsCustomizerOpen(true)}
                    className="text-xs text-[#5B7A5E] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    Custom Sizing Calculator
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {product.dimensions.map((dim) => (
                    <button
                      key={dim.id}
                      onClick={() => setSelectedDim(dim.label)}
                      className={`p-2.5 sm:p-3 text-left rounded-xl border transition-all cursor-pointer ${
                        selectedDim === dim.label
                          ? 'border-[#243528] bg-[#E6EDE6] font-bold text-[#243528] ring-1 ring-[#243528]'
                          : 'border-[#D0DDD1] bg-white text-[#3A403B] hover:border-[#739376]'
                      }`}
                    >
                      <span className="text-xs block truncate">{dim.label}</span>
                      <span className="text-[10px] text-[#555C56] font-sans font-normal">
                        ₹{Math.round(product.price * dim.priceMultiplier).toLocaleString('en-IN')}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* HEADER TYPES */}
            {product.headerTypes && product.headerTypes.length > 0 && (
              <div>
                <span className="text-xs uppercase tracking-wider text-[#555C56] font-semibold block mb-2">
                  Header Style / Finish:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.headerTypes.map((ht) => (
                    <button
                      key={ht}
                      onClick={() => setSelectedHeader(ht)}
                      className={`px-3 py-1.5 rounded-lg text-xs border transition-all cursor-pointer ${
                        selectedHeader === ht
                          ? 'bg-[#243528] text-white border-[#243528] font-semibold'
                          : 'bg-white text-[#3A403B] border-[#D0DDD1] hover:border-[#739376]'
                      }`}
                    >
                      {ht}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* QUANTITY & INLINE ACTION BUTTONS */}
            <div className="space-y-3 pt-3 sm:pt-4 border-t border-[#E6EDE6]">
              <div className="flex items-center gap-2.5 sm:gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-[#D0DDD1] rounded-xl bg-white px-2.5 sm:px-3 py-2 shrink-0">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-6 text-sm font-bold text-[#555C56] hover:text-[#243528] cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-7 sm:w-8 text-center text-xs font-semibold text-[#243528]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-6 text-sm font-bold text-[#555C56] hover:text-[#243528] cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 px-4 sm:px-6 bg-[#243528] text-white rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] active:bg-[#3D503F] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag</span>
                </button>
              </div>

              {/* Buy Now */}
              <button
                onClick={handleBuyNow}
                className="w-full py-3 px-6 bg-[#E6EDE6] border border-[#739376] text-[#243528] rounded-xl text-xs uppercase tracking-widest font-bold hover:bg-[#739376] hover:text-white active:bg-[#739376] active:text-white transition-all cursor-pointer"
              >
                Instant Checkout
              </button>
            </div>

            {/* SERVICE HIGHLIGHTS */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-2 text-[10px] sm:text-[11px] text-[#555C56]">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5B7A5E] shrink-0" />
                <span>Free Delivery &gt; ₹5,000</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5B7A5E] shrink-0" />
                <span>Dispatched in 4-6 Days</span>
              </div>
            </div>

          </div>

        </div>

        {/* TECHNICAL SPECS TABS */}
        <FabricSpecs product={product} />

        {/* HARMONIOUS PAIRINGS */}
        <PairWithSection currentProductId={product.id} onNavigate={onNavigate} />

        {/* CUSTOMIZER MODAL */}
        <CustomizerModal
          product={product}
          isOpen={isCustomizerOpen}
          onClose={() => setIsCustomizerOpen(false)}
        />

      </div>

      {/* MOBILE STICKY BOTTOM ACTION BAR */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#D0DDD1] p-3 pb-safe shadow-xl">
        <div className="flex items-center gap-2.5">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-[#739376] font-semibold">Total Price</span>
            <span className="font-sans text-base font-bold text-[#1E2A21]">
              ₹{(currentPrice * quantity).toLocaleString('en-IN')}
            </span>
          </div>

          <div className="flex-1 flex gap-2">
            <button
              onClick={handleAddToCart}
              className="flex-1 py-3 px-3 bg-white border border-[#243528] text-[#243528] rounded-xl text-xs uppercase tracking-wider font-semibold active:bg-[#E6EDE6] flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add to Bag</span>
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 py-3 px-3 bg-[#243528] text-[#FAF7F2] rounded-xl text-xs uppercase tracking-wider font-bold active:bg-[#3D503F] flex items-center justify-center cursor-pointer shadow-md"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
