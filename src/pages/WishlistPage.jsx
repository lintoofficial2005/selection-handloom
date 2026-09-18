import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useModals } from '../context/ModalContext';
import { SafeImage } from '../components/ui/SafeImage';
import { Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export const WishlistPage = ({ onNavigate }) => {
  const { wishlistProducts, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { showToast } = useModals();

  const handleMoveToBag = (product) => {
    addToCart(product, { quantity: 1 });
    toggleWishlist(product.id);
    showToast(`Moved ${product.name} to your bag`);
  };

  if (wishlistProducts.length === 0) {
    return (
      <div className="py-24 bg-[#FAF7F2] min-h-[70vh] flex items-center justify-center animate-in fade-in duration-300">
        <div className="text-center max-w-md px-4 space-y-6">
          <div className="w-20 h-20 rounded-full bg-[#E6EDE6] text-[#5B7A5E] flex items-center justify-center mx-auto">
            <Heart className="w-9 h-9" />
          </div>
          <h2 className="font-editorial text-3xl font-light text-[#1E2A21]">
            Your Wishlist is Empty
          </h2>
          <p className="text-xs sm:text-sm text-[#555C56] leading-relaxed">
            Save your favourite draperies, blinds, and heirloom home linens as you browse our collections.
          </p>
          <button
            onClick={() => onNavigate('shop')}
            className="px-8 py-3.5 bg-[#243528] text-white rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Explore Collections</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="mb-8">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block mb-1">
            SELECTION CURATIONS
          </span>
          <h1 className="font-editorial text-3xl sm:text-4xl font-light text-[#1E2A21]">
            Saved Masterpieces ({wishlistProducts.length})
          </h1>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-[#E6EDE6] overflow-hidden shadow-xs hover:border-[#8DA98F] transition-all flex flex-col justify-between group"
            >
              <div
                onClick={() => onNavigate(`product-${product.id}`)}
                className="aspect-4/3 bg-[#F5EFE6] relative overflow-hidden cursor-pointer"
              >
                <SafeImage
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                    showToast('Removed from Wishlist');
                  }}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-stone-400 hover:text-red-600 flex items-center justify-center shadow-sm cursor-pointer"
                  title="Remove from wishlist"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#739376] font-semibold block mb-1">
                    {product.categoryName}
                  </span>
                  <h3
                    onClick={() => onNavigate(`product-${product.id}`)}
                    className="font-brand-title text-sm font-bold text-[#1E2A21] hover:text-[#5B7A5E] transition-colors line-clamp-2 mb-2 cursor-pointer"
                  >
                    {product.name}
                  </h3>
                  <span className="font-sans text-base font-bold text-[#1E2A21] block mb-4">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#FAF7F2]">
                  <button
                    onClick={() => handleMoveToBag(product)}
                    className="w-full py-2.5 px-4 bg-[#243528] text-white rounded-xl text-xs uppercase tracking-wider font-semibold hover:bg-[#3D503F] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Move to Shopping Bag
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
