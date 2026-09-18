import React, { useState } from 'react';
import { X, Calculator, Check, Sparkles, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useModals } from '../../context/ModalContext';

export const CustomizerModal = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const { showToast } = useModals();

  const [widthInches, setWidthInches] = useState(48);
  const [heightInches, setHeightInches] = useState(84);
  const [fullness, setFullness] = useState('2.0x'); // 1.5x, 2.0x, 2.5x
  const [lining, setLining] = useState('standard'); // standard, thermal-blackout, cotton-muslin
  const [headerStyle, setHeaderStyle] = useState('Triple Pinch Pleat');

  if (!isOpen || !product) return null;

  // Calculate dynamic price based on sq ft & options
  const basePrice = product.price;
  const areaMultiplier = (widthInches * heightInches) / (48 * 84);
  const fullnessMultiplier = fullness === '2.5x' ? 1.35 : fullness === '2.0x' ? 1.15 : 1.0;
  const liningCost = lining === 'thermal-blackout' ? 1200 : lining === 'cotton-muslin' ? 650 : 0;
  
  const estimatedPrice = Math.round(basePrice * areaMultiplier * fullnessMultiplier + liningCost);

  const handleAddCustom = () => {
    const customLabel = `Custom: ${widthInches}"W x ${heightInches}"H (${fullness} Fullness, ${headerStyle})`;
    addToCart(product, {
      dimension: customLabel,
      finalPrice: estimatedPrice,
      headerType: headerStyle,
      quantity: 1,
      image: product.images[0]
    });
    showToast(`Added tailored ${product.name} (₹${estimatedPrice.toLocaleString('en-IN')}) to bag`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E2A21]/70 backdrop-blur-md p-4 overflow-y-auto">
      <div className="bg-[#FAF7F2] w-full max-w-2xl rounded-2xl shadow-2xl border border-[#D0DDD1] overflow-hidden relative my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* HEADER */}
        <div className="p-6 border-b border-[#E6EDE6] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#5B7A5E]" />
            <div>
              <h3 className="font-brand-title text-lg font-bold text-[#1E2A21]">
                Custom Dimension Calculator
              </h3>
              <p className="text-xs text-[#555C56]">
                Tailored for {product.name}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#FAF7F2] text-[#555C56] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* DIMENSION SLIDERS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-4 bg-white rounded-xl border border-[#E6EDE6]">
            <div>
              <div className="flex justify-between items-center mb-1 text-xs">
                <span className="font-bold text-[#243528]">Track / Rod Width:</span>
                <span className="font-bold text-[#5B7A5E] font-sans">{widthInches} inches ({(widthInches * 2.54).toFixed(0)} cm)</span>
              </div>
              <input
                type="range"
                min="24"
                max="144"
                step="2"
                value={widthInches}
                onChange={(e) => setWidthInches(Number(e.target.value))}
                className="w-full accent-[#5B7A5E] cursor-pointer"
              />
              <span className="text-[10px] text-[#555C56]">Standard: 48" Window / 72" Patio Door</span>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1 text-xs">
                <span className="font-bold text-[#243528]">Curtain Finished Drop:</span>
                <span className="font-bold text-[#5B7A5E] font-sans">{heightInches} inches ({(heightInches * 2.54).toFixed(0)} cm)</span>
              </div>
              <input
                type="range"
                min="48"
                max="144"
                step="2"
                value={heightInches}
                onChange={(e) => setHeightInches(Number(e.target.value))}
                className="w-full accent-[#5B7A5E] cursor-pointer"
              />
              <span className="text-[10px] text-[#555C56]">Standard: 60" Window / 84" Door / 108" Long</span>
            </div>
          </div>

          {/* FULLNESS MULTIPLIER */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#3A403B] font-semibold mb-2">
              Select Gathered Fullness:
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: '1.5x', label: '1.5x Tailored', desc: 'Sleek, modern ripple folds' },
                { id: '2.0x', label: '2.0x Classic (Recommended)', desc: 'Deep, luxurious standard pleating' },
                { id: '2.5x', label: '2.5x Ultra Luxe', desc: 'Heirloom heavy acoustic drape' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFullness(f.id)}
                  className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                    fullness === f.id
                      ? 'border-[#243528] bg-[#E6EDE6] ring-1 ring-[#243528]'
                      : 'border-[#D0DDD1] bg-white hover:border-[#739376]'
                  }`}
                >
                  <span className="text-xs font-bold text-[#243528] block">{f.label}</span>
                  <span className="text-[10px] text-[#555C56] mt-0.5 block">{f.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* HEADER STYLES */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#3A403B] font-semibold mb-2">
              Header Pleat Style:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                'Triple Pinch Pleat',
                'American Double Pleat',
                'Eyelet Brass Grommets',
                'Tailored Wave Fold'
              ].map((style) => (
                <button
                  key={style}
                  onClick={() => setHeaderStyle(style)}
                  className={`p-2.5 text-center text-xs rounded-lg border transition-all cursor-pointer ${
                    headerStyle === style
                      ? 'bg-[#243528] text-white border-[#243528] font-bold'
                      : 'bg-white text-[#3A403B] border-[#D0DDD1] hover:border-[#739376]'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* LINING OPTIONS */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#3A403B] font-semibold mb-2">
              Interlining / Backing:
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: 'standard', label: 'Unlined Natural Slub', price: 'Included' },
                { id: 'cotton-muslin', label: 'Pure Cotton Muslin Lining', price: '+₹650' },
                { id: 'thermal-blackout', label: '100% Thermal Blackout Lining', price: '+₹1,200' },
              ].map((l) => (
                <button
                  key={l.id}
                  onClick={() => setLining(l.id)}
                  className={`p-2.5 text-left rounded-lg border transition-all cursor-pointer ${
                    lining === l.id
                      ? 'border-[#243528] bg-[#E6EDE6] font-semibold'
                      : 'border-[#D0DDD1] bg-white hover:border-[#739376]'
                  }`}
                >
                  <span className="text-xs text-[#243528] block">{l.label}</span>
                  <span className="text-[10px] text-[#5B7A5E] font-sans font-bold">{l.price}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* FOOTER TOTAL & ADD TO BAG */}
        <div className="p-6 bg-white border-t border-[#D0DDD1] flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#555C56] block">
              Estimated Bespoke Total:
            </span>
            <span className="font-sans text-xl sm:text-2xl font-bold text-[#1E2A21]">
              ₹{estimatedPrice.toLocaleString('en-IN')}
            </span>
            <span className="text-[10px] text-[#5B7A5E] block">
              Includes pre-shrinking &amp; tailored lead weights
            </span>
          </div>

          <button
            onClick={handleAddCustom}
            className="py-3.5 px-6 bg-[#243528] text-white rounded-lg text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <ShoppingBag className="w-4 h-4" />
            Add Custom Cut to Bag
          </button>
        </div>

      </div>
    </div>
  );
};
