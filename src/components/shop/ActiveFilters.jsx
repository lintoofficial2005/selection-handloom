import React from 'react';
import { X } from 'lucide-react';

export const ActiveFilters = ({
  selectedCategory,
  onClearCategory,
  selectedMaterial,
  onRemoveMaterial,
  selectedOpacity,
  onRemoveOpacity,
  priceRange,
  onResetPrice,
  onClearAll
}) => {
  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedMaterial.length > 0 ||
    selectedOpacity.length > 0 ||
    priceRange < 12000;

  if (!hasActiveFilters) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      <span className="text-xs uppercase tracking-wider text-[#555C56] font-semibold mr-1">
        Active Filters:
      </span>

      {selectedCategory !== 'all' && (
        <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-[#E6EDE6] text-[#243528] font-medium border border-[#D0DDD1]">
          <span>Collection: {selectedCategory}</span>
          <button onClick={onClearCategory} className="hover:text-red-600 cursor-pointer">
            <X className="w-3 h-3" />
          </button>
        </span>
      )}

      {selectedMaterial.map((m) => (
        <span
          key={m}
          className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-[#E6EDE6] text-[#243528] font-medium border border-[#D0DDD1]"
        >
          <span>{m}</span>
          <button onClick={() => onRemoveMaterial(m)} className="hover:text-red-600 cursor-pointer">
            <X className="w-3 h-3" />
          </button>
        </span>
      ))}

      {selectedOpacity.map((op) => (
        <span
          key={op}
          className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-[#E6EDE6] text-[#243528] font-medium border border-[#D0DDD1]"
        >
          <span>{op}</span>
          <button onClick={() => onRemoveOpacity(op)} className="hover:text-red-600 cursor-pointer">
            <X className="w-3 h-3" />
          </button>
        </span>
      ))}

      {priceRange < 12000 && (
        <span className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-[#E6EDE6] text-[#243528] font-medium border border-[#D0DDD1]">
          <span>Under ₹{priceRange.toLocaleString('en-IN')}</span>
          <button onClick={onResetPrice} className="hover:text-red-600 cursor-pointer">
            <X className="w-3 h-3" />
          </button>
        </span>
      )}

      <button
        onClick={onClearAll}
        className="text-xs text-[#5B7A5E] hover:underline font-semibold ml-2 cursor-pointer"
      >
        Clear All
      </button>
    </div>
  );
};
