import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { ModalProvider } from './context/ModalContext';

import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Toast } from './components/ui/Toast';

import { CartDrawer } from './components/cart/CartDrawer';
import { SearchOverlay } from './components/modals/SearchOverlay';
import { QuickViewModal } from './components/modals/QuickViewModal';
import { ConsultationModal } from './components/modals/ConsultationModal';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { AccountPage } from './pages/AccountPage';
import { WishlistPage } from './pages/WishlistPage';
import { AboutHeritagePage } from './pages/AboutHeritagePage';
import { StoreLocationPage } from './pages/StoreLocationPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  const [currentRoute, setCurrentRoute] = useState('home');

  const navigateTo = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderRoute = () => {
    if (currentRoute === 'home') {
      return <HomePage onNavigate={navigateTo} />;
    }
    if (currentRoute === 'shop') {
      return <ShopPage onNavigate={navigateTo} initialCategory="all" />;
    }
    if (currentRoute === 'category-curtains') {
      return <ShopPage onNavigate={navigateTo} initialCategory="curtains" />;
    }
    if (currentRoute === 'category-blinds') {
      return <ShopPage onNavigate={navigateTo} initialCategory="blinds" />;
    }
    if (currentRoute === 'category-home-linen') {
      return <ShopPage onNavigate={navigateTo} initialCategory="home-linen" />;
    }
    if (currentRoute === 'category-suits') {
      return <ShopPage onNavigate={navigateTo} initialCategory="suits" />;
    }
    if (currentRoute.startsWith('product-')) {
      const productId = currentRoute.replace('product-', '');
      return <ProductDetailPage productId={productId} onNavigate={navigateTo} />;
    }
    if (currentRoute === 'cart') {
      return <CartPage onNavigate={navigateTo} />;
    }
    if (currentRoute === 'checkout') {
      return <CheckoutPage onNavigate={navigateTo} />;
    }
    if (currentRoute === 'account') {
      return <AccountPage onNavigate={navigateTo} />;
    }
    if (currentRoute === 'wishlist') {
      return <WishlistPage onNavigate={navigateTo} />;
    }
    if (currentRoute === 'about') {
      return <AboutHeritagePage onNavigate={navigateTo} />;
    }
    if (currentRoute === 'store') {
      return <StoreLocationPage onNavigate={navigateTo} />;
    }
    if (currentRoute === 'contact') {
      return <ContactPage />;
    }
    return <NotFoundPage onNavigate={navigateTo} />;
  };

  return (
    <ModalProvider>
      <CartProvider>
        <WishlistProvider>
          <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#242824] font-sans antialiased selection:bg-[#7F9A83] selection:text-white">
            
            {/* ANNOUNCEMENT BANNER */}
            <AnnouncementBar onNavigate={navigateTo} />

            {/* DYNAMIC HEADER */}
            <Header currentRoute={currentRoute} onNavigate={navigateTo} />

            {/* MAIN CONTENT */}
            <main className="flex-1">
              {renderRoute()}
            </main>

            {/* 75-YEAR HERITAGE FOOTER */}
            <Footer onNavigate={navigateTo} />

            {/* GLOBAL DRAWERS & MODALS */}
            <CartDrawer onNavigate={navigateTo} />
            <SearchOverlay onNavigate={navigateTo} />
            <QuickViewModal onNavigate={navigateTo} />
            <ConsultationModal />
            <Toast />

          </div>
        </WishlistProvider>
      </CartProvider>
    </ModalProvider>
  );
}

export default App;
