import React from 'react';
import { LayoutGrid, List, ArrowUpDown, Filter } from 'lucide-react';

export const SortBar = ({
  totalResults,
  sortBy,
  onSortChange,
  layout,
  onLayoutChange,
  onOpenFilterMobile
}) => {
  return (
    <div className="bg-white p-3 sm:p-4 rounded-xl border border-[#D0DDD1] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6 shadow-xs">
      
      {/* MOBILE TOP ROW: COUNT & FILTER TRIGGER */}
      <div className="w-full sm:w-auto flex items-center justify-between gap-2">
        <div className="text-xs text-[#555C56]">
          Showing <strong className="text-[#243528] font-bold">{totalResults}</strong> textiles
        </div>

        {/* MOBILE FILTER TRIGGER BUTTON */}
        {onOpenFilterMobile && (
          <button
            onClick={onOpenFilterMobile}
            className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 bg-[#E6EDE6] text-[#243528] rounded-lg text-xs font-semibold active:bg-[#739376] active:text-white transition-colors cursor-pointer"
          >
            <Filter className="w-3.5 h-3.5 text-[#5B7A5E]" />
            <span>Filters</span>
          </button>
        )}
      </div>

      <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-2.5 sm:pt-0 border-[#FAF7F2]">
        {/* SORT DROPDOWN */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-1 sm:flex-initial">
          <ArrowUpDown className="w-3.5 h-3.5 text-[#5B7A5E] shrink-0" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full sm:w-auto text-xs font-medium text-[#243528] bg-[#FAF7F2] border border-[#D0DDD1] rounded-lg px-2 sm:px-2.5 py-1.5 focus:border-[#243528] outline-none cursor-pointer"
          >
            <option value="featured">Featured Curations</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
            <option value="newest">Newest Weaves</option>
          </select>
        </div>

        {/* LAYOUT TOGGLE */}
        <div className="flex items-center border border-[#D0DDD1] rounded-lg p-0.5 bg-[#FAF7F2] shrink-0">
          <button
            onClick={() => onLayoutChange('grid')}
            className={`p-1.5 rounded-md transition-colors cursor-pointer ${
              layout === 'grid' ? 'bg-[#243528] text-white shadow-xs' : 'text-[#555C56] hover:text-[#243528]'
            }`}
            title="Grid View"
            aria-label="Grid View"
          >
            <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
          <button
            onClick={() => onLayoutChange('list')}
            className={`p-1.5 rounded-md transition-colors cursor-pointer ${
              layout === 'list' ? 'bg-[#243528] text-white shadow-xs' : 'text-[#555C56] hover:text-[#243528]'
            }`}
            title="List View"
            aria-label="List View"
          >
            <List className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};

