import React, { useState } from 'react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { useModals } from '../../context/ModalContext';
import { SafeImage } from '../ui/SafeImage';
import { Heart, Eye, ShoppingBag, Check } from 'lucide-react';

export const ProductCard = ({ product, onNavigate, layout = 'grid' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);

  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { openQuickView, showToast } = useModals();

  const isWishlisted = isInWishlist(product.id);
  const currentImage = (product.colors && product.colors[selectedColorIdx]?.image) || product.images[0];
  const hoverImage = product.images[1] || currentImage;

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    addToCart(product, {
      color: product.colors?.[selectedColorIdx]?.name,
      quantity: 1,
      image: currentImage
    });
    showToast(`Added ${product.name} to your bag`);
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    toggleWishlist(product.id);
    showToast(isWishlisted ? 'Removed from Wishlist' : 'Saved to Wishlist');
  };

  const handleQuickViewClick = (e) => {
    e.stopPropagation();
    openQuickView(product);
  };

  if (layout === 'list') {
    return (
      <div 
        onClick={() => onNavigate(`product-${product.id}`)}
        className="bg-white rounded-xl border border-[#E6EDE6] p-3.5 sm:p-5 flex flex-col sm:flex-row gap-4 sm:gap-5 hover:border-[#8DA98F] active:border-[#8DA98F] hover:shadow-md transition-all duration-300 cursor-pointer group"
      >
        <div className="w-full sm:w-56 aspect-4/3 sm:aspect-square rounded-lg overflow-hidden bg-[#F5EFE6] relative shrink-0">
          <SafeImage
            src={isHovered ? hoverImage : currentImage}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <button
            onClick={handleWishlistToggle}
            className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-[#243528] active:scale-90 shadow-xs cursor-pointer"
            aria-label="Toggle Wishlist"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#739376] text-[#739376]' : ''}`} />
          </button>
        </div>

        <div className="flex flex-col justify-between flex-1">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#739376] font-semibold">
                {product.categoryName}
              </span>
              <span className="text-stone-300">•</span>
              <span className="text-[9px] sm:text-[10px] text-[#555C56]">
                {product.origin}
              </span>
            </div>

            <h3 className="font-brand-title text-sm sm:text-lg font-semibold text-[#1E2A21] group-hover:text-[#5B7A5E] transition-colors mb-1">
              {product.name}
            </h3>

            <p className="text-xs text-[#555C56] line-clamp-2 mb-2 sm:mb-3">
              {product.shortDescription}
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-[#49634C] mb-2 sm:mb-3">
              <span className="px-2 py-0.5 bg-[#F4F7F4] rounded border border-[#D0DDD1]">
                {product.material}
              </span>
              {product.opacity && (
                <span className="px-2 py-0.5 bg-[#F4F7F4] rounded border border-[#D0DDD1]">
                  {product.opacity}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2.5 sm:pt-3 border-t border-[#FAF7F2]">
            <div className="flex items-baseline gap-2">
              <span className="font-sans text-base sm:text-lg font-bold text-[#1E2A21]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-[11px] sm:text-xs text-[#555C56]/60 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleQuickViewClick}
                className="hidden sm:block px-3 py-1.5 rounded-lg border border-[#D0DDD1] text-xs text-[#243528] hover:border-[#243528] transition-colors cursor-pointer"
              >
                Quick View
              </button>
              <button
                onClick={handleQuickAdd}
                className="px-3.5 sm:px-4 py-1.5 rounded-lg bg-[#243528] text-white text-xs font-semibold hover:bg-[#3D503F] active:bg-[#3D503F] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Add to Bag</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => onNavigate(`product-${product.id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-white rounded-xl border border-[#E6EDE6] overflow-hidden hover:border-[#8DA98F] active:border-[#8DA98F] hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer relative"
    >
      {/* IMAGE CONTAINER */}
      <div className="aspect-4/5 bg-[#F5EFE6] overflow-hidden relative">
        <SafeImage
          src={isHovered ? hoverImage : currentImage}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* TAGS */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1 z-10">
          {product.isBestseller && (
            <span className="bg-[#243528]/90 text-[#FAF7F2] text-[8px] sm:text-[9px] uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded-full font-medium backdrop-blur-xs">
              Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="bg-[#739376]/95 text-white text-[8px] sm:text-[9px] uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded-full font-medium backdrop-blur-xs">
              New Weave
            </span>
          )}
        </div>

        {/* WISHLIST BUTTON — PERMANENT TOUCH TARGET ON MOBILE & DESKTOP */}
        <button
          onClick={handleWishlistToggle}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-[#243528] active:scale-90 shadow-xs z-10 transition-all cursor-pointer hover:scale-105"
          title={isWishlisted ? 'Remove from Wishlist' : 'Save to Wishlist'}
          aria-label="Wishlist"
        >
          <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWishlisted ? 'fill-[#739376] text-[#739376]' : ''}`} />
        </button>

        {/* DESKTOP QUICK ACTION HOVER OVERLAY */}
        <div className={`hidden sm:flex absolute inset-x-3 bottom-3 gap-2 z-10 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
        }`}>
          <button
            onClick={handleQuickViewClick}
            className="flex-1 py-2 px-2 bg-white/95 backdrop-blur-xs text-[#243528] text-[11px] font-semibold uppercase tracking-wider rounded-lg shadow-md hover:bg-[#243528] hover:text-white transition-all flex items-center justify-center gap-1 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            Quick View
          </button>
          <button
            onClick={handleQuickAdd}
            className="w-9 h-9 bg-[#243528] text-white rounded-lg shadow-md hover:bg-[#3D503F] transition-all flex items-center justify-center cursor-pointer shrink-0"
            title="Add to Bag"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-2.5 sm:p-4 flex flex-col justify-between flex-1">
        <div>
          {/* CATEGORY & ORIGIN */}
          <div className="flex items-center justify-between text-[8px] sm:text-[10px] uppercase tracking-widest text-[#739376] font-semibold mb-0.5 sm:mb-1">
            <span className="truncate max-w-[65%]">{product.categoryName}</span>
            <span className="text-stone-400 font-normal truncate max-w-[30%]">{product.origin.split(' ')[0]}</span>
          </div>

          {/* PRODUCT NAME */}
          <h3 className="font-brand-title text-xs sm:text-base font-semibold text-[#1E2A21] group-hover:text-[#5B7A5E] transition-colors leading-tight sm:leading-snug line-clamp-2 mb-1">
            {product.name}
          </h3>

          {/* MATERIAL SUMMARY */}
          <p className="text-[10px] sm:text-[11px] text-[#555C56] truncate mb-1.5 sm:mb-2.5">
            {product.material}
          </p>

          {/* COLOR SWATCHES */}
          {product.colors && product.colors.length > 1 && (
            <div className="flex gap-1 sm:gap-1.5 mb-2 sm:mb-3" onClick={(e) => e.stopPropagation()}>
              {product.colors.slice(0, 4).map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColorIdx(i)}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border transition-all cursor-pointer ${
                    selectedColorIdx === i ? 'ring-1.5 sm:ring-2 ring-[#243528] scale-110' : 'border-stone-300'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                  aria-label={c.name}
                />
              ))}
              {product.colors.length > 4 && (
                <span className="text-[8px] sm:text-[9px] text-stone-400 self-center">
                  +{product.colors.length - 4}
                </span>
              )}
            </div>
          )}
        </div>

        {/* PRICING & RATING */}
        <div className="flex items-baseline justify-between pt-1.5 sm:pt-2 border-t border-[#FAF7F2]">
          <div className="flex items-baseline gap-1 sm:gap-2">
            <span className="font-sans text-xs sm:text-base font-bold text-[#1E2A21]">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-[9px] sm:text-[11px] text-[#555C56]/60 line-through hidden xs:inline">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          <span className="text-[9px] sm:text-[10px] text-[#5B7A5E] font-medium tracking-wide">
            ★ {product.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

