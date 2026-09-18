import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/shop/ProductCard';
import { FilterSidebar } from '../components/shop/FilterSidebar';
import { SortBar } from '../components/shop/SortBar';
import { ActiveFilters } from '../components/shop/ActiveFilters';

export const ShopPage = ({ onNavigate, initialCategory = 'all' }) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedMaterial, setSelectedMaterial] = useState([]);
  const [selectedOpacity, setSelectedOpacity] = useState([]);
  const [priceRange, setPriceRange] = useState(12000);
  const [sortBy, setSortBy] = useState('featured');
  const [layout, setLayout] = useState('grid');
  const [visibleCount, setVisibleCount] = useState(10);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sync if prop changes
  React.useEffect(() => {
    if (initialCategory) setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const toggleMaterial = (mat) => {
    setSelectedMaterial(prev =>
      prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
    );
  };

  const toggleOpacity = (op) => {
    setSelectedOpacity(prev =>
      prev.includes(op) ? prev.filter(o => o !== op) : [...prev, op]
    );
  };

  const resetAllFilters = () => {
    setSelectedCategory('all');
    setSelectedMaterial([]);
    setSelectedOpacity([]);
    setPriceRange(12000);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category match
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      // Price match
      if (p.price > priceRange) {
        return false;
      }
      // Material match
      if (selectedMaterial.length > 0 && !selectedMaterial.includes(p.material)) {
        return false;
      }
      // Opacity match
      if (selectedOpacity.length > 0 && (!p.opacity || !selectedOpacity.includes(p.opacity))) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, selectedMaterial, selectedOpacity, priceRange, sortBy]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="py-6 sm:py-12 bg-[#FAF7F2] min-h-screen animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* SHOP HERO BANNER WITH SUBTLE PALE SAGE CONTAINER */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 bg-[#EDF3ED] p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#D0DDD1]/60">
          <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block mb-1">
            SELECTION HANDLOOM ATELIER
          </span>
          <h1 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-light text-[#1E2A21]">
            The Master Catalogue
          </h1>
          <p className="text-xs sm:text-sm text-[#555C56] mt-1.5 sm:mt-2 max-w-xl mx-auto">
            Curtains, architectural blinds, pure linen beddings, and cashmere suiting fabrics hand-selected for enduring tranquility.
          </p>
        </div>

        {/* ACTIVE FILTER PILLS */}
        <ActiveFilters
          selectedCategory={selectedCategory}
          onClearCategory={() => setSelectedCategory('all')}
          selectedMaterial={selectedMaterial}
          onRemoveMaterial={toggleMaterial}
          selectedOpacity={selectedOpacity}
          onRemoveOpacity={toggleOpacity}
          priceRange={priceRange}
          onResetPrice={() => setPriceRange(12000)}
          onClearAll={resetAllFilters}
        />

        {/* MAIN LAYOUT: SIDEBAR + PRODUCT GRID */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          
          {/* FILTER SIDEBAR (DESKTOP + MOBILE MODAL) */}
          <FilterSidebar
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            selectedMaterial={selectedMaterial}
            onSelectMaterial={toggleMaterial}
            selectedOpacity={selectedOpacity}
            onSelectOpacity={toggleOpacity}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
            onResetFilters={resetAllFilters}
            isOpenMobile={isMobileFilterOpen}
            onCloseMobile={() => setIsMobileFilterOpen(false)}
          />

          {/* MAIN GRID */}
          <div className="flex-1">
            <SortBar
              totalResults={filteredProducts.length}
              sortBy={sortBy}
              onSortChange={setSortBy}
              layout={layout}
              onLayoutChange={setLayout}
              onOpenFilterMobile={() => setIsMobileFilterOpen(true)}
            />

            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-[#D0DDD1] p-8 sm:p-12 text-center space-y-4">
                <p className="font-editorial text-xl sm:text-2xl italic text-[#555C56]">
                  "No textiles match the current filter selection"
                </p>
                <p className="text-xs text-[#739376]">
                  Try widening your price range or clearing material filters.
                </p>
                <button
                  onClick={resetAllFilters}
                  className="px-6 py-2.5 bg-[#243528] text-white rounded-lg text-xs uppercase tracking-wider font-semibold hover:bg-[#3D503F] active:bg-[#3D503F] cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className={
                layout === 'grid'
                  ? "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6"
                  : "space-y-3 sm:space-y-4"
              }>
                {displayedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onNavigate={onNavigate}
                    layout={layout}
                  />
                ))}
              </div>
            )}

            {/* LOAD MORE BUTTON */}
            {visibleCount < filteredProducts.length && (
              <div className="text-center mt-8 sm:mt-12">
                <button
                  onClick={() => setVisibleCount(prev => prev + 6)}
                  className="w-full sm:w-auto px-8 py-3.5 bg-white border border-[#243528] text-[#243528] rounded-xl text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#243528] hover:text-white active:bg-[#243528] active:text-white transition-all cursor-pointer shadow-xs"
                >
                  Load More Masterpieces ({filteredProducts.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

