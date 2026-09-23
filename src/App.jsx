import React, { useState } from 'react';
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
    // Check if route has subcategory query parameter
    let baseRoute = currentRoute;
    let subcategory = 'all';

    if (currentRoute.includes('?sub=')) {
      const parts = currentRoute.split('?sub=');
      baseRoute = parts[0];
      subcategory = decodeURIComponent(parts[1]);
    }

    if (baseRoute === 'home') {
      return <HomePage onNavigate={navigateTo} />;
    }
    if (baseRoute === 'shop') {
      return <ShopPage onNavigate={navigateTo} initialCategory="all" initialSubcategory={subcategory} />;
    }
    if (baseRoute === 'new-arrivals') {
      return <ShopPage onNavigate={navigateTo} initialCategory="new-arrivals" initialSubcategory={subcategory} />;
    }
    if (baseRoute === 'category-home-furnishings') {
      return <ShopPage onNavigate={navigateTo} initialCategory="home-furnishings" initialSubcategory={subcategory} />;
    }
    if (baseRoute === 'category-bedding') {
      return <ShopPage onNavigate={navigateTo} initialCategory="bedding" initialSubcategory={subcategory} />;
    }
    if (baseRoute === 'category-curtains') {
      return <ShopPage onNavigate={navigateTo} initialCategory="curtains" initialSubcategory={subcategory} />;
    }
    if (baseRoute === 'category-bath-linen') {
      return <ShopPage onNavigate={navigateTo} initialCategory="bath-linen" initialSubcategory={subcategory} />;
    }
    if (baseRoute === 'category-soft-furnishings') {
      return <ShopPage onNavigate={navigateTo} initialCategory="soft-furnishings" initialSubcategory={subcategory} />;
    }
    if (baseRoute === 'category-suits' || baseRoute === 'category-ladies-suits') {
      return <ShopPage onNavigate={navigateTo} initialCategory="suits" initialSubcategory={subcategory} />;
    }
    // Legacy route redirects
    if (baseRoute === 'category-blinds') {
      return <ShopPage onNavigate={navigateTo} initialCategory="curtains" initialSubcategory={subcategory} />;
    }
    if (baseRoute === 'category-home-linen') {
      return <ShopPage onNavigate={navigateTo} initialCategory="bedding" initialSubcategory={subcategory} />;
    }
    if (baseRoute.startsWith('product-')) {
      const productId = baseRoute.replace('product-', '');
      return <ProductDetailPage productId={productId} onNavigate={navigateTo} />;
    }
    if (baseRoute === 'cart') {
      return <CartPage onNavigate={navigateTo} />;
    }
    if (baseRoute === 'checkout') {
      return <CheckoutPage onNavigate={navigateTo} />;
    }
    if (baseRoute === 'account') {
      return <AccountPage onNavigate={navigateTo} />;
    }
    if (baseRoute === 'wishlist') {
      return <WishlistPage onNavigate={navigateTo} />;
    }
    if (baseRoute === 'about') {
      return <AboutHeritagePage onNavigate={navigateTo} />;
    }
    if (baseRoute === 'store' || baseRoute === 'store-location') {
      return <StoreLocationPage onNavigate={navigateTo} />;
    }
    if (baseRoute === 'contact') {
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
