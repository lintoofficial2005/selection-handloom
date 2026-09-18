import React, { useState } from 'react';
import { useModals } from '../../context/ModalContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { SafeImage } from '../ui/SafeImage';
import { X, Heart, ShoppingBag, ArrowRight, Check } from 'lucide-react';

export const QuickViewModal = ({ onNavigate }) => {
  const { quickViewProduct, closeQuickView, showToast } = useModals();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || 'Standard');
  const [selectedDim, setSelectedDim] = useState(product.dimensions?.[0]?.label || 'Standard');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const isWishlisted = isInWishlist(product.id);

  const handleAdd = () => {
    addToCart(product, {
      color: selectedColor,
      dimension: selectedDim,
      quantity,
      image: product.images[activeImageIndex] || product.images[0]
    });
    showToast(`Added ${quantity}x ${product.name} to your bag`);
    closeQuickView();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E2A21]/70 backdrop-blur-md p-4 overflow-y-auto">
      <div className="bg-[#FAF7F2] w-full max-w-4xl rounded-2xl shadow-2xl border border-[#D0DDD1] overflow-hidden relative my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={closeQuickView}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 border border-[#D0DDD1] flex items-center justify-center text-[#243528] hover:bg-[#243528] hover:text-white transition-all cursor-pointer shadow-sm"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* IMAGE SIDE */}
          <div className="bg-[#F5EFE6] p-6 flex flex-col justify-between">
            <div className="aspect-4/3 rounded-xl overflow-hidden bg-white shadow-sm mb-4 relative">
              <SafeImage
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-[#243528]/90 text-[#FAF7F2] text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-xs font-semibold">
                {product.categoryName}
              </span>
            </div>

            {/* Thumbnail Row */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-14 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx ? 'border-[#5B7A5E] scale-105 shadow-xs' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <SafeImage src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* DETAILS SIDE */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#5B7A5E] font-semibold">
                  {product.origin}
                </span>
                <button
                  onClick={() => {
                    toggleWishlist(product.id);
                    showToast(isWishlisted ? 'Removed from Wishlist' : 'Saved to Wishlist');
                  }}
                  className="text-[#243528] hover:text-[#739376] transition-colors p-1 cursor-pointer"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-[#739376] text-[#739376]' : ''}`} />
                </button>
              </div>

              <h3 className="font-brand-title text-xl sm:text-2xl font-semibold text-[#243528] leading-tight mb-2">
                {product.name}
              </h3>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-2xl font-bold text-[#1E2A21]">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#555C56]/60 line-through font-sans">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-xs bg-[#E6EDE6] text-[#49634C] px-2 py-0.5 rounded-full font-medium">
                  Handloom Certified
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#3A403B] leading-relaxed mb-6">
                {product.shortDescription}
              </p>

              {/* Color Swatches */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-wider text-[#555C56] font-semibold block mb-2">
                    Fabric Colorway: <strong className="text-[#243528]">{selectedColor}</strong>
                  </span>
                  <div className="flex gap-2.5">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center cursor-pointer ${
                          selectedColor === c.name ? 'border-[#243528] ring-2 ring-[#739376]/50' : 'border-stone-300'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      >
                        {selectedColor === c.name && (
                          <Check className={`w-3.5 h-3.5 ${c.hex === '#FFFFFF' || c.hex === '#FAF5EE' ? 'text-black' : 'text-white'}`} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Dimensions Selector */}
              {product.dimensions && product.dimensions.length > 0 && (
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-wider text-[#555C56] font-semibold block mb-2">
                    Select Dimensions / Cut:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {product.dimensions.map((dim) => (
                      <button
                        key={dim.id}
                        onClick={() => setSelectedDim(dim.label)}
                        className={`px-3 py-2 text-xs rounded-lg text-left border transition-all cursor-pointer ${
                          selectedDim === dim.label
                            ? 'border-[#243528] bg-[#E6EDE6] text-[#243528] font-semibold'
                            : 'border-[#D0DDD1] bg-white text-[#3A403B] hover:border-[#739376]'
                        }`}
                      >
                        {dim.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ACTION BUTTONS */}
            <div className="space-y-3 pt-4 border-t border-[#E6EDE6]">
              <div className="flex items-center gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-[#D0DDD1] rounded-lg bg-white px-2 py-1.5 shrink-0">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-6 text-sm font-bold text-[#555C56] hover:text-[#243528] cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-semibold text-[#243528]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-6 text-sm font-bold text-[#555C56] hover:text-[#243528] cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag CTA */}
                <button
                  onClick={handleAdd}
                  className="flex-1 py-3 px-4 bg-[#243528] text-white rounded-lg text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Shopping Bag
                </button>
              </div>

              {/* View Full Product Link */}
              <button
                onClick={() => {
                  onNavigate(`product-${product.id}`);
                  closeQuickView();
                }}
                className="w-full py-2.5 text-center text-xs uppercase tracking-wider text-[#5B7A5E] hover:text-[#243528] hover:underline font-semibold flex items-center justify-center gap-1 cursor-pointer"
              >
                View Full Textile Specifications <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
