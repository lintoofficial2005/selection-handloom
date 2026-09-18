import React from 'react';
import { LayoutGrid, List, ArrowUpDown } from 'lucide-react';

export const SortBar = ({
  totalResults,
  sortBy,
  onSortChange,
  layout,
  onLayoutChange
}) => {
  return (
    <div className="bg-white p-4 rounded-xl border border-[#D0DDD1] flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
      
      {/* RESULTS COUNT */}
      <div className="text-xs text-[#555C56]">
        Showing <strong className="text-[#243528] font-bold">{totalResults}</strong> handcrafted textiles
      </div>

      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
        {/* SORT DROPDOWN */}
        <div className="flex items-center gap-2">
          <ArrowUpDown className="w-3.5 h-3.5 text-[#5B7A5E]" />
          <span className="text-xs text-[#555C56] hidden sm:inline">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="text-xs font-medium text-[#243528] bg-[#FAF7F2] border border-[#D0DDD1] rounded-lg px-2.5 py-1.5 focus:border-[#243528] outline-none cursor-pointer"
          >
            <option value="featured">Featured Curations</option>
            <option value="price-low">Price: Low to High (INR)</option>
            <option value="price-high">Price: High to Low (INR)</option>
            <option value="rating">Highest Customer Rating</option>
            <option value="newest">Newest Weaves</option>
          </select>
        </div>

        {/* LAYOUT TOGGLE */}
        <div className="flex items-center border border-[#D0DDD1] rounded-lg p-0.5 bg-[#FAF7F2]">
          <button
            onClick={() => onLayoutChange('grid')}
            className={`p-1.5 rounded-md transition-colors cursor-pointer ${
              layout === 'grid' ? 'bg-[#243528] text-white shadow-xs' : 'text-[#555C56] hover:text-[#243528]'
            }`}
            title="Grid View"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => onLayoutChange('list')}
            className={`p-1.5 rounded-md transition-colors cursor-pointer ${
              layout === 'list' ? 'bg-[#243528] text-white shadow-xs' : 'text-[#555C56] hover:text-[#243528]'
            }`}
            title="List View"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
