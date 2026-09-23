import React, { useState, useMemo, useEffect } from 'react';
import { products } from '../data/products';
import { mainCategories } from '../data/categories';
import { ProductCard } from '../components/shop/ProductCard';
import { FilterSidebar } from '../components/shop/FilterSidebar';
import { SortBar } from '../components/shop/SortBar';
import { ActiveFilters } from '../components/shop/ActiveFilters';
import { Sparkles } from 'lucide-react';

export const ShopPage = ({ onNavigate, initialCategory = 'all', initialSubcategory = 'all' }) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSubcategory, setSelectedSubcategory] = useState(initialSubcategory);
  const [selectedMaterial, setSelectedMaterial] = useState([]);
  const [priceRange, setPriceRange] = useState(12000);
  const [sortBy, setSortBy] = useState('featured');
  const [layout, setLayout] = useState('grid');
  const [visibleCount, setVisibleCount] = useState(12);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sync if prop changes
  useEffect(() => {
    if (initialCategory) setSelectedCategory(initialCategory);
    if (initialSubcategory) setSelectedSubcategory(initialSubcategory);
  }, [initialCategory, initialSubcategory]);

  const toggleMaterial = (mat) => {
    setSelectedMaterial(prev =>
      prev.includes(mat) ? prev.filter(m => m !== mat) : [...prev, mat]
    );
  };

  const resetAllFilters = () => {
    setSelectedCategory('all');
    setSelectedSubcategory('all');
    setSelectedMaterial([]);
    setPriceRange(12000);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // 1. Category match
      if (selectedCategory === 'new-arrivals') {
        if (!p.isNew) return false;
      } else if (selectedCategory === 'home-furnishings' || selectedCategory === 'category-home-furnishings') {
        if (p.mainCategory !== 'Home Furnishings') return false;
      } else if (selectedCategory === 'bedding' || selectedCategory === 'category-bedding') {
        if (p.category !== 'Bedding') return false;
      } else if (selectedCategory === 'curtains' || selectedCategory === 'category-curtains') {
        if (p.category !== 'Curtains') return false;
      } else if (selectedCategory === 'bath-linen' || selectedCategory === 'category-bath-linen') {
        if (p.category !== 'Bath & Linen') return false;
      } else if (selectedCategory === 'soft-furnishings' || selectedCategory === 'category-soft-furnishings') {
        if (p.category !== 'Soft Furnishings') return false;
      } else if (selectedCategory === 'suits' || selectedCategory === 'category-suits' || selectedCategory === 'ladies-suits') {
        if (p.mainCategory !== "Ladies' Suits" && p.category !== "Ladies' Suits") return false;
      }

      // 2. Subcategory match
      if (selectedSubcategory && selectedSubcategory !== 'all') {
        if (p.subcategory !== selectedSubcategory && !p.subcategory.includes(selectedSubcategory)) {
          return false;
        }
      }

      // 3. Price match
      if (p.price > priceRange) {
        return false;
      }

      // 4. Material match
      if (selectedMaterial.length > 0 && !selectedMaterial.includes(p.material)) {
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
  }, [selectedCategory, selectedSubcategory, selectedMaterial, priceRange, sortBy]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  // Dynamic titles and banner text
  const getBannerDetails = () => {
    if (selectedCategory === 'new-arrivals') {
      return {
        badge: 'FRESH TEXTILES',
        title: 'New Arrivals',
        desc: 'Discover our newest seasonal weaves across Bedding, Curtains, Bath, Soft Furnishings, and Ladies’ Suits.'
      };
    }
    if (selectedCategory === 'bedding' || selectedCategory === 'category-bedding') {
      return {
        badge: 'HOME FURNISHINGS • BEDDING',
        title: 'Heirloom Bedding Collection',
        desc: 'Heirloom bedsheets, pre-washed waffle bedcovers, Jaipuri mulmul dohars, winter quilts, and diwan sets.'
      };
    }
    if (selectedCategory === 'curtains' || selectedCategory === 'category-curtains') {
      return {
        badge: 'HOME FURNISHINGS • CURTAINS',
        title: 'Curtains & Drapery Atelier',
        desc: 'Ready-to-hang Stitched Drapes and Unstitched Running Fabric by the metre in Belgian flax and jacquard.'
      };
    }
    if (selectedCategory === 'bath-linen' || selectedCategory === 'category-bath-linen') {
      return {
        badge: 'HOME FURNISHINGS • BATH & LINEN',
        title: 'Bath & Linen Sanctuary',
        desc: '700 GSM zero-twist combed cotton towels and breathable pre-washed flax waffle bathrobes.'
      };
    }
    if (selectedCategory === 'soft-furnishings' || selectedCategory === 'category-soft-furnishings') {
      return {
        badge: 'HOME FURNISHINGS • SOFT FURNISHINGS',
        title: 'Artisanal Soft Furnishings',
        desc: 'Hand-block cushion sets, quilted sofa protectors, pure silk bolsters, and Kantha embroidered pillow covers.'
      };
    }
    if (selectedCategory === 'suits' || selectedCategory === 'category-suits' || selectedCategory === 'ladies-suits') {
      return {
        badge: "LADIES' SUITS • UNSTITCHED",
        title: "Ladies' Suits & Silk Cuts",
        desc: 'Unstitched lengths in hand-reeled Matka raw silk, featherweight Chanderi tissue, and Himalayan Merino cashmere.'
      };
    }
    if (selectedCategory === 'home-furnishings' || selectedCategory === 'category-home-furnishings') {
      return {
        badge: 'SELECTION HANDLOOM',
        title: 'Home Furnishings Collection',
        desc: 'Explore our masterhouse collections of Bedding, Curtains, Bath Linens, and Soft Furnishings.'
      };
    }
    return {
      badge: 'SELECTION HANDLOOM ATELIER',
      title: 'The Master Catalogue',
      desc: 'All collections of heirloom bedding, architectural drapery, bath linens, soft furnishings, and unstitched silks.'
    };
  };

  const banner = getBannerDetails();

  return (
    <div className="py-6 sm:py-12 bg-[#FAF7F2] min-h-screen animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* SHOP HERO BANNER */}
        <div className={`text-center max-w-3xl mx-auto mb-6 sm:mb-10 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border ${
          selectedCategory === 'new-arrivals'
            ? 'bg-[#FBEBE6] border-[#C86D51]/30'
            : 'bg-[#EDF3ED] border-[#D0DDD1]/60'
        }`}>
          <span className={`text-[9px] sm:text-[11px] uppercase tracking-[0.25em] font-bold block mb-1 ${
            selectedCategory === 'new-arrivals' ? 'text-[#C86D51]' : 'text-[#5B7A5E]'
          }`}>
            {banner.badge}
          </span>
          <h1 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-light text-[#1E2A21]">
            {banner.title}
          </h1>
          <p className="text-xs sm:text-sm text-[#555C56] mt-1.5 sm:mt-2 max-w-xl mx-auto">
            {banner.desc}
          </p>
        </div>

        {/* ACTIVE FILTER PILLS */}
        <ActiveFilters
          selectedCategory={selectedCategory}
          onClearCategory={() => setSelectedCategory('all')}
          selectedSubcategory={selectedSubcategory}
          onClearSubcategory={() => setSelectedSubcategory('all')}
          selectedMaterial={selectedMaterial}
          onRemoveMaterial={toggleMaterial}
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
            selectedSubcategory={selectedSubcategory}
            onSelectSubcategory={setSelectedSubcategory}
            selectedMaterial={selectedMaterial}
            onSelectMaterial={toggleMaterial}
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
                  Try clearing subcategory filters or widening your price range.
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
