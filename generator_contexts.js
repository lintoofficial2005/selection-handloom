const fs = require('fs');
const path = require('path');

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function write(filePath, content) {
  ensureDir(filePath);
  fs.writeFileSync(filePath, content.trim() + '\n', 'utf8');
  console.log('Wrote: ' + filePath);
}

// 1. CartContext.jsx
write('src/context/CartContext.jsx', 
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const INITIAL_CART = [
  {
    cartId: 'item-init-1',
    id: 'curt-01',
    name: 'Aethelgard Handwoven Botanical Curtain',
    category: 'Curtains',
    price: 3450,
    quantity: 2,
    color: 'Sage Leaf & Cream',
    dimension: 'Door (7 ft x 4 ft)',
    headerType: 'Eyelet Brass Rings',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80'
  },
  {
    cartId: 'item-init-2',
    id: 'linen-01',
    name: 'Ganga Heritage Hand-Block Cushion Set (Set of 3)',
    category: 'Home Linen',
    price: 2199,
    quantity: 1,
    color: 'Sage & Mustard Ochre',
    dimension: '18 x 18 inches',
    headerType: 'Standard Zippered',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80'
  }
];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('sh_cart');
      return saved ? JSON.parse(saved) : INITIAL_CART;
    } catch {
      return INITIAL_CART;
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  useEffect(() => {
    try {
      localStorage.setItem('sh_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const addToCart = (product, options = {}) => {
    const color = options.color || (product.colors && product.colors[0]?.name) || 'Standard';
    const dimension = options.dimension || (product.dimensions && product.dimensions[0]?.label) || 'Standard';
    const headerType = options.headerType || (product.headerTypes && product.headerTypes[0]) || 'Standard';
    const quantity = options.quantity || 1;
    const price = options.finalPrice || product.price;
    const image = options.image || (product.images && product.images[0]);

    const cartId = \\-\-\-\\;

    setCart(prev => {
      const existing = prev.find(item => item.cartId === cartId);
      if (existing) {
        return prev.map(item =>
          item.cartId === cartId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          cartId,
          id: product.id,
          name: product.name,
          category: product.categoryName || product.category,
          price,
          quantity,
          color,
          dimension,
          headerType,
          image
        }
      ];
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (cartId) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  const updateQuantity = (cartId, qty) => {
    if (qty <= 0) {
      removeFromCart(cartId);
      return;
    }
    setCart(prev =>
      prev.map(item => (item.cartId === cartId ? { ...item, quantity: qty } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyCoupon = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'HERITAGE75' || cleanCode === 'SELECTION10') {
      setCouponCode(cleanCode);
      setDiscountPercent(15);
      return { success: true, message: 'Heirloom Jubilee Privilege (15% OFF) Applied!' };
    } else if (cleanCode === 'MEERUT1950') {
      setCouponCode(cleanCode);
      setDiscountPercent(10);
      return { success: true, message: 'Heritage Welcome Privilege (10% OFF) Applied!' };
    }
    return { success: false, message: 'Invalid or expired heirloom privilege code' };
  };

  const removeCoupon = () => {
    setCouponCode('');
    setDiscountPercent(0);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const FREE_SHIPPING_THRESHOLD = 5000;
  const shipping = subtotal === 0 ? 0 : subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 299;
  const total = Math.max(0, subtotal - discountAmount + shipping);
  const freeShippingProgress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
  const amountForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        discountAmount,
        discountPercent,
        shipping,
        total,
        freeShippingProgress,
        amountForFreeShipping,
        FREE_SHIPPING_THRESHOLD,
        totalItemsCount,
        couponCode,
        applyCoupon,
        removeCoupon
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
);

// 2. WishlistContext.jsx
write('src/context/WishlistContext.jsx', 
import React, { createContext, useContext, useState, useEffect } from 'react';
import { products } from '../data/products';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('sh_wishlist');
      return saved ? JSON.parse(saved) : ['curt-01', 'suit-01', 'linen-02'];
    } catch {
      return ['curt-01', 'suit-01', 'linen-02'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sh_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        wishlistProducts,
        wishlistCount: wishlist.length
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used within WishlistProvider');
  return context;
};
);

// 3. ModalContext.jsx
write('src/context/ModalContext.jsx', 
import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type, id: Date.now() });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const openQuickView = (product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  const openConsultation = () => setIsConsultationOpen(true);
  const closeConsultation = () => setIsConsultationOpen(false);

  return (
    <ModalContext.Provider
      value={{
        quickViewProduct,
        openQuickView,
        closeQuickView,
        isSearchOpen,
        openSearch,
        closeSearch,
        isConsultationOpen,
        openConsultation,
        closeConsultation,
        toastMessage,
        showToast
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModals = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModals must be used within ModalProvider');
  return context;
};
);

console.log('Context files generated successfully.');
