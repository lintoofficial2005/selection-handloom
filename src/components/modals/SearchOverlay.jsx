import React, { useState, useEffect, useRef } from 'react';
import { useModals } from '../../context/ModalContext';
import { products } from '../../data/products';
import { SafeImage } from '../ui/SafeImage';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';

export const SearchOverlay = ({ onNavigate }) => {
  const { isSearchOpen, closeSearch, openQuickView } = useModals();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredProducts = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.categoryName.toLowerCase().includes(query.toLowerCase()) ||
          p.material.toLowerCase().includes(query.toLowerCase()) ||
          p.shortDescription.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const popularTags = ['Botanical Linen', 'Timber Blinds', 'Hand-Block Cushions', 'Merino Wool', 'Silk Jacquard', 'Blackout Drapes'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-[#FAF7F2] sm:bg-[#1E2A21]/70 sm:backdrop-blur-md pt-0 sm:pt-20 px-0 sm:px-4">
      <div className="bg-[#FAF7F2] w-full h-full sm:h-auto sm:max-w-3xl sm:rounded-2xl shadow-2xl border-none sm:border border-[#D0DDD1] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* SEARCH HEADER INPUT */}
        <div className="p-3.5 sm:p-5 border-b border-[#E6EDE6] flex items-center gap-3 bg-white pt-safe">
          <Search className="w-5 h-5 sm:w-6 sm:h-6 text-[#5B7A5E] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search curtains, timber blinds, pure linen..."
            className="w-full text-sm sm:text-lg bg-transparent border-none outline-none text-[#243528] placeholder:text-[#555C56]/60 font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#555C56] hover:text-[#243528] px-2 py-1 bg-[#F5EFE6] rounded-md cursor-pointer shrink-0"
            >
              Clear
            </button>
          )}
          <button
            onClick={closeSearch}
            className="w-9 h-9 flex items-center justify-center text-[#555C56] hover:text-[#243528] hover:bg-[#F5EFE6] active:bg-[#E6EDE6] rounded-full transition-colors cursor-pointer shrink-0"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* SEARCH BODY */}
        <div className="p-4 sm:p-6 flex-1 overflow-y-auto max-h-[calc(100vh-80px)] sm:max-h-[65vh] pb-safe">
          {query.trim() === '' ? (
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#739376] font-semibold mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Popular Textile Searches
                </p>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="text-xs px-3.5 py-1.5 rounded-full bg-[#E6EDE6] text-[#243528] hover:bg-[#739376] hover:text-white transition-all cursor-pointer font-medium"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-[#739376] font-semibold mb-3">
                  Browse by Collection
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: 'Curtains', route: 'category-curtains', count: '34 Styles' },
                    { label: 'Blinds', route: 'category-blinds', count: '22 Systems' },
                    { label: 'Home Linen', route: 'category-home-linen', count: '48 Pieces' },
                    { label: 'Suits & Fabrics', route: 'category-suits', count: '28 Weaves' },
                  ].map((cat) => (
                    <button
                      key={cat.label}
                      onClick={() => {
                        onNavigate(cat.route);
                        closeSearch();
                      }}
                      className="p-3 text-left rounded-xl border border-[#D0DDD1] bg-white hover:border-[#739376] hover:shadow-xs transition-all cursor-pointer"
                    >
                      <span className="font-brand-title text-sm block font-semibold text-[#243528]">
                        {cat.label}
                      </span>
                      <span className="text-[10px] text-[#5B7A5E]">{cat.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-[#555C56]">
                  Found {filteredProducts.length} matching textiles
                </span>
                {filteredProducts.length > 0 && (
                  <button
                    onClick={() => {
                      onNavigate('shop');
                      closeSearch();
                    }}
                    className="text-xs text-[#5B7A5E] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    View All in Shop <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="font-editorial text-xl italic text-[#555C56]">
                    "No handcrafted textiles found matching '{query}'"
                  </p>
                  <p className="text-xs text-[#739376] mt-2">
                    Try searching for linen, botanical, sheer, jacquard, or cashmere.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex gap-3.5 p-3 rounded-xl border border-[#E6EDE6] bg-white hover:border-[#8DA98F] transition-all group"
                    >
                      <div
                        onClick={() => {
                          onNavigate(`product-${product.id}`);
                          closeSearch();
                        }}
                        className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-[#F5EFE6] cursor-pointer"
                      >
                        <SafeImage
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex flex-col justify-between flex-1 min-w-0">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#739376] font-semibold">
                            {product.categoryName}
                          </span>
                          <h4
                            onClick={() => {
                              onNavigate(`product-${product.id}`);
                              closeSearch();
                            }}
                            className="font-brand-title text-xs sm:text-sm font-semibold text-[#243528] truncate hover:text-[#5B7A5E] cursor-pointer"
                          >
                            {product.name}
                          </h4>
                          <span className="text-xs text-[#555C56] block truncate">
                            {product.material}
                          </span>
                        </div>
                        <div className="flex items-center justify-between pt-1">
                          <span className="font-sans text-xs sm:text-sm font-bold text-[#243528]">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          <button
                            onClick={() => {
                              openQuickView(product);
                              closeSearch();
                            }}
                            className="text-[11px] text-[#5B7A5E] hover:underline font-medium cursor-pointer"
                          >
                            Quick View
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
