import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useModals } from '../context/ModalContext';
import { SafeImage } from '../components/ui/SafeImage';
import { Trash2, ArrowRight, ShoppingBag, Truck, Tag, ShieldCheck } from 'lucide-react';

export const CartPage = ({ onNavigate }) => {
  const {
    cart,
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
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');

  const handleApply = (e) => {
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

  if (cart.length === 0) {
    return (
      <div className="py-24 bg-[#FAF7F2] min-h-[70vh] flex items-center justify-center animate-in fade-in duration-300">
        <div className="text-center max-w-md px-4 space-y-6">
          <div className="w-20 h-20 rounded-full bg-[#E6EDE6] text-[#5B7A5E] flex items-center justify-center mx-auto">
            <ShoppingBag className="w-9 h-9" />
          </div>
          <h2 className="font-editorial text-3xl font-light text-[#1E2A21]">
            Your Bag is Empty
          </h2>
          <p className="text-xs sm:text-sm text-[#555C56] leading-relaxed">
            Discover our masterhouse collections of slub flax curtains, architectural timber blinds, and artisanal bedding.
          </p>
          <button
            onClick={() => onNavigate('shop')}
            className="px-8 py-3.5 bg-[#243528] text-white rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Explore Master Catalogue</span>
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
            SELECTION HANDLOOM
          </span>
          <h1 className="font-editorial text-3xl sm:text-4xl font-light text-[#1E2A21]">
            Your Curated Bag ({cart.reduce((s, i) => s + i.quantity, 0)} items)
          </h1>
        </div>

        {/* FREE SHIPPING PROGRESS WITH SOFT SAGE CONTAINER */}
        <div className="bg-[#EAF0EA] p-4 rounded-2xl border border-[#D0DDD1] mb-8">
          <div className="flex items-center justify-between text-xs text-[#243528] mb-1.5">
            <span className="flex items-center gap-2 font-medium">
              <Truck className="w-4 h-4 text-[#5B7A5E]" />
              {amountForFreeShipping === 0 ? (
                <strong className="text-[#3D503F]">Complimentary White-Glove Delivery Unlocked!</strong>
              ) : (
                <span>
                  Add <strong>₹{amountForFreeShipping.toLocaleString('en-IN')}</strong> more for Free Pan-India Delivery
                </span>
              )}
            </span>
            <span className="font-bold">{freeShippingProgress}%</span>
          </div>
          <div className="w-full h-2 bg-stone-300/60 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#5B7A5E] transition-all duration-500 rounded-full"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* ITEMS LIST */}
          <div className="lg:col-span-8 space-y-4">
            {cart.map((item) => (
              <div
                key={item.cartId}
                className="p-5 bg-white rounded-2xl border border-[#E6EDE6] shadow-xs flex flex-col sm:flex-row gap-5 hover:border-[#8DA98F] transition-all"
              >
                <div
                  onClick={() => onNavigate(`product-${item.id}`)}
                  className="w-full sm:w-28 aspect-square rounded-xl overflow-hidden bg-[#F5EFE6] shrink-0 cursor-pointer"
                >
                  <SafeImage
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#739376] font-semibold">
                          {item.category}
                        </span>
                        <h3
                          onClick={() => onNavigate(`product-${item.id}`)}
                          className="font-brand-title text-base font-bold text-[#1E2A21] hover:text-[#5B7A5E] transition-colors cursor-pointer"
                        >
                          {item.name}
                        </h3>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-stone-400 hover:text-red-600 transition-colors p-1 cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs text-[#555C56] mt-1">
                      Colorway: <strong>{item.color}</strong> • Cut: <strong>{item.dimension}</strong>
                    </p>
                    {item.headerType && (
                      <p className="text-xs text-[#739376]">
                        Header Style: {item.headerType}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-3 border-t border-[#FAF7F2]">
                    <div className="flex items-center gap-4">
                      {/* Quantity */}
                      <div className="flex items-center border border-[#D0DDD1] rounded-lg bg-[#FAF7F2] px-2 py-1">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="w-6 text-sm font-bold text-[#555C56] hover:text-[#243528] cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-xs font-semibold text-[#243528]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="w-6 text-sm font-bold text-[#555C56] hover:text-[#243528] cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => handleSaveForLater(item)}
                        className="text-xs text-[#5B7A5E] hover:underline font-medium cursor-pointer"
                      >
                        Save to Wishlist
                      </button>
                    </div>

                    <span className="font-sans text-base font-bold text-[#1E2A21]">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ORDER SUMMARY */}
          <div className="lg:col-span-4">
            <div className="bg-white p-6 rounded-2xl border border-[#D0DDD1] space-y-6 sticky top-28 shadow-xs">
              
              <h3 className="font-brand-title text-base font-bold text-[#1E2A21] uppercase tracking-wider border-b border-[#E6EDE6] pb-3">
                Order Summary
              </h3>

              {/* PROMO BOX */}
              <div>
                {couponCode ? (
                  <div className="flex items-center justify-between bg-[#E6EDE6] px-3.5 py-2.5 rounded-xl text-xs text-[#243528]">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-[#5B7A5E]" />
                      <div>
                        <strong className="tracking-wider block">{couponCode}</strong>
                        <span className="text-[10px] text-[#49634C]">{discountPercent}% Heritage Jubilee Privilege</span>
                      </div>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-xs text-red-600 hover:underline font-medium cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApply} className="flex gap-2">
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      placeholder="Privilege Code (HERITAGE75)"
                      className="flex-1 px-3 py-2.5 text-xs rounded-xl border border-[#D0DDD1] bg-[#FAF7F2] text-[#243528] uppercase focus:border-[#243528] outline-none"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 bg-[#243528] text-white rounded-xl text-xs font-semibold tracking-wider hover:bg-[#3D503F] cursor-pointer transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {promoError && <p className="text-[10px] text-red-600 mt-1 pl-1">{promoError}</p>}
              </div>

              {/* FINANCIAL BREAKDOWN */}
              <div className="space-y-2.5 text-xs text-[#555C56]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#243528] font-bold font-sans">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#49634C]">
                    <span>Privilege Discount ({discountPercent}%)</span>
                    <span className="font-bold font-sans">
                      -₹{discountAmount.toLocaleString('en-IN')}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping &amp; Transit Insurance</span>
                  <span className="font-sans">
                    {shipping === 0 ? (
                      <strong className="text-[#49634C] uppercase text-[10px] tracking-wider">Free</strong>
                    ) : (
                      `₹${shipping}`
                    )}
                  </span>
                </div>
                <div className="border-t border-[#E6EDE6] pt-3 flex justify-between text-base font-bold text-[#1E2A21]">
                  <span>Total Payable</span>
                  <span className="font-sans text-xl">
                    ₹{total.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* CHECKOUT BUTTON */}
              <button
                onClick={() => onNavigate('checkout')}
                className="w-full py-4 bg-[#243528] text-white rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Proceed to Secure Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 text-center text-[11px] text-[#555C56] space-y-1">
                <div className="flex items-center justify-center gap-1.5 text-[#5B7A5E]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-semibold">Selection 75-Year Authenticity Guarantee</span>
                </div>
                <p>Tax invoice and GST details generated at checkout.</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
