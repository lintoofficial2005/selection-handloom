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
