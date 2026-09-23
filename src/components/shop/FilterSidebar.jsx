import React from 'react';
import { Filter, RotateCcw, Check, X, Sparkles } from 'lucide-react';

export const FilterSidebar = ({
  selectedCategory,
  onSelectCategory,
  selectedSubcategory,
  onSelectSubcategory,
  selectedMaterial,
  onSelectMaterial,
  priceRange,
  onPriceChange,
  onResetFilters,
  isOpenMobile = false,
  onCloseMobile
}) => {
  const departmentCategories = [
    { id: 'all', label: 'All Collections' },
    { id: 'new-arrivals', label: '✨ New Arrivals', highlight: true },
    { id: 'home-furnishings', label: 'Home Furnishings (All)' },
    { id: 'bedding', label: 'Bedding' },
    { id: 'curtains', label: 'Curtains' },
    { id: 'bath-linen', label: 'Bath & Linen' },
    { id: 'soft-furnishings', label: 'Soft Furnishings' },
    { id: 'suits', label: "Ladies' Suits" },
  ];

  // Dynamic subcategories per selected category
  const getSubcategories = () => {
    if (selectedCategory === 'bedding') {
      return ['Bedsheets', 'Bed Covers', 'Blankets', 'Quilts', 'Comforters', 'Dohars', 'Diwan Sets', 'Quilt Covers'];
    }
    if (selectedCategory === 'curtains') {
      return ['Stitched', 'Unstitched / Fabric'];
    }
    if (selectedCategory === 'bath-linen') {
      return ['Towels', 'Bathrobes'];
    }
    if (selectedCategory === 'soft-furnishings') {
      return ['Sofa Covers', 'Cushion Covers', 'Cushions', 'Pillow Covers', 'Bolsters'];
    }
    if (selectedCategory === 'suits') {
      return ['Unstitched'];
    }
    return [];
  };

  const subcategories = getSubcategories();

  const materials = [
    '100% Normandy Pre-Washed Flax',
    '100% Organic Mulmul Cotton',
    'Pure Glace Cotton & Zari Embroidery',
    '100% Long-Staple Combed Cotton',
    'Pure Handloom Pashmina Cashmere',
    'Pure Flax Linen',
    'Organic Cotton & Silk Blend',
    'Pure Matka Raw Silk',
    'Chanderi Silk Cotton Blend',
    'Merino Wool & Fine Cashmere'
  ];

  const sidebarContent = (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between pb-4 border-b border-[#E6EDE6]">
        <div className="flex items-center gap-2 text-[#243528]">
          <Filter className="w-4 h-4 text-[#5B7A5E]" />
          <h4 className="font-brand-title text-sm uppercase tracking-wider font-bold">
            Refine Catalog
          </h4>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onResetFilters}
            className="text-[11px] text-[#5B7A5E] hover:underline flex items-center gap-1 cursor-pointer font-medium"
          >
            <RotateCcw className="w-3 h-3" />
            Reset
          </button>
          {onCloseMobile && (
            <button
              onClick={onCloseMobile}
              className="lg:hidden p-1.5 rounded-full hover:bg-stone-100 text-[#243528]"
              aria-label="Close Filters"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* DEPARTMENT CATEGORIES */}
      <div>
        <h5 className="text-xs uppercase tracking-widest text-[#739376] font-semibold mb-3">
          Category
        </h5>
        <div className="space-y-1">
          {departmentCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.id);
                if (onSelectSubcategory) onSelectSubcategory('all');
                if (onCloseMobile) onCloseMobile();
              }}
              className={`w-full text-left text-xs py-2 px-3 rounded-lg transition-colors flex items-center justify-between cursor-pointer active:bg-[#E6EDE6] ${
                selectedCategory === cat.id
                  ? cat.highlight ? 'bg-[#FBEBE6] text-[#C86D51] font-bold' : 'bg-[#E6EDE6] text-[#243528] font-bold'
                  : cat.highlight ? 'text-[#C86D51] hover:bg-[#FBEBE6]/60 font-semibold' : 'text-[#3A403B] hover:bg-[#FAF7F2]'
              }`}
            >
              <span>{cat.label}</span>
              {selectedCategory === cat.id && <Check className={`w-3.5 h-3.5 ${cat.highlight ? 'text-[#C86D51]' : 'text-[#5B7A5E]'}`} />}
            </button>
          ))}
        </div>
      </div>

      {/* DYNAMIC SUBCATEGORIES (IF APPLICABLE) */}
      {subcategories.length > 0 && (
        <div className="pt-2 border-t border-[#E6EDE6]">
          <h5 className="text-xs uppercase tracking-widest text-[#739376] font-semibold mb-2.5">
            Subcategory
          </h5>
          <div className="space-y-1">
            <button
              onClick={() => onSelectSubcategory('all')}
              className={`w-full text-left text-xs py-1.5 px-2.5 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                selectedSubcategory === 'all' || !selectedSubcategory
                  ? 'bg-[#243528] text-white font-semibold'
                  : 'text-[#555C56] hover:bg-[#FAF7F2]'
              }`}
            >
              <span>All {departmentCategories.find(c => c.id === selectedCategory)?.label}</span>
            </button>
            {subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => onSelectSubcategory(sub)}
                className={`w-full text-left text-xs py-1.5 px-2.5 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                  selectedSubcategory === sub
                    ? 'bg-[#5B7A5E] text-white font-semibold'
                    : 'text-[#555C56] hover:bg-[#FAF7F2]'
                }`}
              >
                <span>{sub}</span>
                {selectedSubcategory === sub && <Check className="w-3 h-3 text-white" />}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* PRICE RANGE (INR) */}
      <div className="pt-2 border-t border-[#E6EDE6]">
        <div className="flex justify-between items-center mb-2">
          <h5 className="text-xs uppercase tracking-widest text-[#739376] font-semibold">
            Max Price (INR)
          </h5>
          <span className="text-xs font-bold text-[#243528] font-sans">
            ₹{priceRange.toLocaleString('en-IN')}
          </span>
        </div>
        <input
          type="range"
          min="1000"
          max="12000"
          step="500"
          value={priceRange}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-full accent-[#243528] cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-[#555C56] mt-1 font-sans">
          <span>₹1,000</span>
          <span>₹12,000+</span>
        </div>
      </div>

      {/* NATURAL FIBRES & MATERIALS */}
      <div className="pt-2 border-t border-[#E6EDE6]">
        <h5 className="text-xs uppercase tracking-widest text-[#739376] font-semibold mb-3">
          Fabric &amp; Material
        </h5>
        <div className="space-y-1.5 max-h-44 overflow-y-auto pr-1">
          {materials.map((mat) => {
            const isChecked = selectedMaterial.includes(mat);
            return (
              <label
                key={mat}
                className={`flex items-center gap-2.5 text-xs py-1.5 px-2 rounded-lg cursor-pointer transition-colors ${
                  isChecked ? 'bg-[#E6EDE6] text-[#243528] font-medium' : 'text-[#3A403B] hover:bg-[#FAF7F2]'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => onSelectMaterial(mat)}
                  className="rounded border-[#D0DDD1] text-[#243528] focus:ring-[#739376] cursor-pointer"
                />
                <span className="truncate">{mat}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* HERITAGE GUARANTEE BADGE */}
      <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#D0DDD1] text-center space-y-1">
        <span className="text-[10px] uppercase tracking-wider text-[#5B7A5E] font-bold block">
          75-Year Quality Standard
        </span>
        <p className="text-[11px] text-[#555C56] leading-tight">
          Authentic Indian weaves certified for warp-and-weft integrity.
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* DESKTOP ASIDE */}
      <aside className="hidden lg:block w-64 bg-white p-5 rounded-2xl border border-[#D0DDD1] space-y-6 shrink-0 h-fit sticky top-28 shadow-xs">
        {sidebarContent}
      </aside>

      {/* MOBILE FULL-SCREEN SLIDE-OVER SHEET */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            onClick={onCloseMobile}
            className="fixed inset-0 bg-[#1E2A21]/60 backdrop-blur-xs animate-in fade-in duration-300"
          />
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl p-5 overflow-y-auto flex flex-col justify-between animate-in slide-in-from-right duration-300 pb-safe">
            <div>
              {sidebarContent}
            </div>
            <div className="pt-4 border-t border-[#E6EDE6] mt-6 sticky bottom-0 bg-white">
              <button
                onClick={onCloseMobile}
                className="w-full py-3.5 bg-[#243528] text-white rounded-xl text-xs uppercase tracking-widest font-semibold active:bg-[#3D503F] shadow-md cursor-pointer"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
