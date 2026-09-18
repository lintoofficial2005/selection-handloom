import React from 'react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useModals } from '../../context/ModalContext';
import { SafeImage } from '../ui/SafeImage';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  ArrowRight, 
  Tag, 
  Truck
} from 'lucide-react';

export const CartDrawer = ({ onNavigate }) => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    discountAmount,
    discountPercent,
    shipping,
    total,
    freeShippingProgress,
    amountForFreeShipping,
    couponCode,
    applyCoupon,
    removeCoupon
  } = useCart();

  const { toggleWishlist } = useWishlist();
  const { showToast } = useModals();
  const [promoInput, setPromoInput] = React.useState('');
  const [promoError, setPromoError] = React.useState('');

  if (!isCartOpen) return null;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyCoupon(promoInput);
    if (res.success) {
      showToast(res.message);
      setPromoError('');
      setPromoInput('');
    } else {
      setPromoError(res.message);
    }
  };

  const handleSaveForLater = (item) => {
    toggleWishlist(item.id);
    removeFromCart(item.cartId);
    showToast(`Saved "${item.name}" to Wishlist`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* BACKDROP */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-[#1E2A21]/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl border-l border-[#D0DDD1] flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* DRAWER HEADER */}
          <div className="p-6 border-b border-[#E6EDE6] bg-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#5B7A5E]" />
              <h3 className="font-brand-title text-lg font-bold text-[#1E2A21] tracking-wider uppercase">
                Shopping Bag
              </h3>
              <span className="text-xs bg-[#E6EDE6] text-[#49634C] px-2 py-0.5 rounded-full font-semibold">
                {cart.reduce((s, i) => s + i.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full hover:bg-[#F5EFE6] text-[#555C56] hover:text-[#243528] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* FREE SHIPPING PROGRESS */}
          <div className="bg-[#E6EDE6]/70 px-6 py-3 border-b border-[#D0DDD1]">
            <div className="flex items-center justify-between text-xs text-[#243528] mb-1.5">
              <span className="flex items-center gap-1.5 font-medium">
                <Truck className="w-3.5 h-3.5 text-[#5B7A5E]" />
                {amountForFreeShipping === 0 ? (
                  <strong className="text-[#3D503F]">Complimentary White-Glove Delivery Unlocked!</strong>
                ) : (
                  <span>
                    Add <strong>₹{amountForFreeShipping.toLocaleString('en-IN')}</strong> for Free Delivery
                  </span>
                )}
              </span>
              <span className="font-bold text-[11px]">{freeShippingProgress}%</span>
            </div>
            <div className="w-full h-1.5 bg-stone-300/60 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#5B7A5E] transition-all duration-500 rounded-full"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* CART ITEMS LIST */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#E6EDE6] text-[#5B7A5E] flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-7 h-7 opacity-70" />
                </div>
                <h4 className="font-brand-title text-xl font-medium text-[#243528]">
                  Your Bag is Empty
                </h4>
                <p className="text-xs text-[#555C56] max-w-xs mx-auto leading-relaxed">
                  Explore our curated collections of handwoven curtains, timber blinds, and heirloom home linens.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    onNavigate('shop');
                  }}
                  className="py-2.5 px-6 bg-[#243528] text-white rounded-lg text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  Explore Collections <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.cartId}
                  className="p-3.5 bg-white rounded-xl border border-[#E6EDE6] shadow-xs flex gap-3.5 group hover:border-[#8DA98F] transition-all"
                >
                  <div
                    onClick={() => {
                      setIsCartOpen(false);
                      onNavigate(`product-${item.id}`);
                    }}
                    className="w-20 h-24 rounded-lg overflow-hidden bg-[#F5EFE6] shrink-0 cursor-pointer"
                  >
                    <SafeImage
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h5
                          onClick={() => {
                            setIsCartOpen(false);
                            onNavigate(`product-${item.id}`);
                          }}
                          className="font-brand-title text-xs sm:text-sm font-semibold text-[#243528] leading-snug truncate hover:text-[#5B7A5E] cursor-pointer"
                        >
                          {item.name}
                        </h5>
                        <button
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-stone-400 hover:text-red-600 transition-colors p-1 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-[11px] text-[#555C56] mt-0.5 truncate">
                        {item.color} • {item.dimension}
                      </p>
                      {item.headerType && (
                        <p className="text-[10px] text-[#739376]">
                          Style: {item.headerType}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2 mt-1 border-t border-[#FAF7F2]">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-[#D0DDD1] rounded-md bg-[#FAF7F2] px-1.5 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="w-5 text-xs font-bold text-[#555C56] hover:text-[#243528] cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-xs font-semibold text-[#243528]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="w-5 text-xs font-bold text-[#555C56] hover:text-[#243528] cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="font-sans text-xs sm:text-sm font-bold text-[#243528]">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    <div className="pt-1 text-right">
                      <button
                        onClick={() => handleSaveForLater(item)}
                        className="text-[10px] text-[#5B7A5E] hover:underline cursor-pointer font-medium"
                      >
                        Save for later
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* CART FOOTER */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#D0DDD1] bg-white space-y-4">
              
              {/* PROMO CODE BOX */}
              <div className="space-y-1.5">
                {couponCode ? (
                  <div className="flex items-center justify-between bg-[#E6EDE6] px-3 py-2 rounded-lg text-xs text-[#243528]">
                    <div className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-[#5B7A5E]" />
                      <span className="font-bold tracking-wider">{couponCode}</span>
                      <span className="text-[11px] text-[#49634C]">({discountPercent}% OFF)</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-xs text-red-600 hover:underline cursor-pointer font-medium"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      placeholder="Heirloom Code (e.g. HERITAGE75)"
                      className="flex-1 px-3 py-2 text-xs rounded-lg border border-[#D0DDD1] bg-[#FAF7F2] text-[#243528] uppercase focus:border-[#243528] outline-none"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 bg-[#FAF7F2] border border-[#739376] text-[#243528] hover:bg-[#739376] hover:text-white rounded-lg text-xs font-semibold tracking-wider transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {promoError && (
                  <p className="text-[10px] text-red-600 pl-1">{promoError}</p>
                )}
              </div>

              {/* SUBTOTAL BREAKDOWN */}
              <div className="space-y-1.5 text-xs text-[#555C56]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#243528] font-medium font-sans">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#49634C]">
                    <span>Privilege Discount ({discountPercent}%)</span>
                    <span className="font-medium font-sans">
                      -₹{discountAmount.toLocaleString('en-IN')}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping &amp; Handling</span>
                  <span className="font-sans">
                    {shipping === 0 ? (
                      <strong className="text-[#49634C] uppercase text-[10px] tracking-wider">Free</strong>
                    ) : (
                      `₹${shipping}`
                    )}
                  </span>
                </div>
                <div className="border-t border-[#E6EDE6] pt-2 flex justify-between text-sm font-bold text-[#1E2A21]">
                  <span>Total Amount</span>
                  <span className="font-sans text-base">
                    ₹{total.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* CHECKOUT BUTTONS */}
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    onNavigate('checkout');
                  }}
                  className="w-full py-3.5 bg-[#243528] text-white rounded-lg text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    onNavigate('cart');
                  }}
                  className="w-full py-2.5 text-center text-xs text-[#5B7A5E] hover:underline font-semibold cursor-pointer"
                >
                  View Full Cart &amp; Custom Sizing
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
