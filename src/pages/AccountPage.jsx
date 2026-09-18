import React, { useState } from 'react';
import { useWishlist } from '../context/WishlistContext';
import { useModals } from '../context/ModalContext';
import { SafeImage } from '../components/ui/SafeImage';
import { 
  Package, 
  Heart, 
  MapPin, 
  User
} from 'lucide-react';

export const AccountPage = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('orders');
  const { wishlistProducts } = useWishlist();
  const { openConsultation } = useModals();

  const mockOrders = [
    {
      id: 'SH-1950-8472',
      date: '14 Sep 2026',
      total: 9349,
      status: 'In Weaving Atelier',
      statusStep: 2, // 1: Placed, 2: Weaving/Tailoring, 3: Quality Check, 4: Shipped, 5: Delivered
      estimatedDelivery: '22 Sep 2026',
      items: [
        {
          name: 'Aethelgard Handwoven Botanical Curtain',
          qty: 2,
          color: 'Sage Leaf & Cream',
          size: 'Door (7 ft x 4 ft)',
          price: 3450,
          image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Ganga Heritage Hand-Block Cushion Set',
          qty: 1,
          color: 'Sage & Mustard Ochre',
          size: '18 x 18 inches',
          price: 2199,
          image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=400&q=80'
        }
      ]
    },
    {
      id: 'SH-1950-7120',
      date: '02 Aug 2026',
      total: 8900,
      status: 'Delivered',
      statusStep: 5,
      estimatedDelivery: '07 Aug 2026 (Delivered)',
      items: [
        {
          name: 'Pashmina & Merino Wool Suit Fabric (3.5m)',
          qty: 1,
          color: 'Olive Green Twill',
          size: '3.5 Metres (Full 2-Piece Suit)',
          price: 8900,
          image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=400&q=80'
        }
      ]
    }
  ];

  const savedAddresses = [
    {
      id: 'addr-1',
      title: 'Home (Civil Lines)',
      name: 'Radhika Sharma',
      phone: '+91 98370 12345',
      address: '42, Civil Lines, Near Circuit House, Meerut, Uttar Pradesh 250001',
      isDefault: true
    },
    {
      id: 'addr-2',
      title: 'Studio / Office',
      name: 'Radhika Sharma',
      phone: '+91 98370 12345',
      address: 'Suite 304, Sector 62, Noida, NCR 201309',
      isDefault: false
    }
  ];

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#D0DDD1]">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block mb-1">
              ESTD. 1950 • MEERUT
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl font-light text-[#1E2A21]">
              Customer Concierge Account
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={openConsultation}
              className="px-4 py-2 bg-white border border-[#739376] text-[#243528] rounded-xl text-xs font-semibold hover:bg-[#E6EDE6] cursor-pointer"
            >
              Book In-Store / At-Home Consultation
            </button>
          </div>
        </div>

        {/* 2-COLUMN LAYOUT: TABS & CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* SIDEBAR TABS */}
          <div className="lg:col-span-3 space-y-2">
            {[
              { id: 'orders', label: 'Order History & Tracking', icon: Package },
              { id: 'wishlist', label: `Saved Wishlist (${wishlistProducts.length})`, icon: Heart },
              { id: 'addresses', label: 'Delivery Residences', icon: MapPin },
              { id: 'profile', label: 'Textile Preferences', icon: User },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-3.5 rounded-xl text-xs font-semibold tracking-wider flex items-center gap-3 transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#243528] text-white shadow-xs'
                      : 'bg-white text-[#3A403B] hover:bg-[#E6EDE6] border border-[#E6EDE6]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}

            {/* MEERUT SHOWROOM CONTACT CARD */}
            <div className="p-4 bg-white rounded-2xl border border-[#D0DDD1] space-y-2 mt-6">
              <span className="text-[10px] uppercase tracking-wider text-[#739376] font-bold block">
                Direct Master Weaver Concierge
              </span>
              <p className="text-xs text-[#555C56]">
                Need custom drapery alterations or swatch advice? Call our Meerut Showroom:
              </p>
              <a
                href="tel:+911212645075"
                className="text-xs text-[#243528] font-bold hover:underline block"
              >
                +91 121 264 5075
              </a>
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* ORDERS TAB */}
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <h3 className="font-brand-title text-xl font-bold text-[#1E2A21]">
                  Active &amp; Past Orders
                </h3>

                {mockOrders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-white rounded-2xl border border-[#D0DDD1] overflow-hidden shadow-xs"
                  >
                    {/* ORDER HEADER */}
                    <div className="p-5 bg-[#FAF7F2] border-b border-[#E6EDE6] flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div>
                        <span className="text-[#739376] uppercase tracking-wider font-semibold block text-[10px]">
                          Order Reference
                        </span>
                        <strong className="font-mono text-sm text-[#1E2A21]">{order.id}</strong>
                      </div>
                      <div>
                        <span className="text-[#739376] uppercase tracking-wider font-semibold block text-[10px]">
                          Order Date
                        </span>
                        <span className="text-[#243528] font-medium">{order.date}</span>
                      </div>
                      <div>
                        <span className="text-[#739376] uppercase tracking-wider font-semibold block text-[10px]">
                          Total Amount
                        </span>
                        <span className="font-sans font-bold text-sm text-[#1E2A21]">
                          ₹{order.total.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-[#E6EDE6] text-[#243528] border border-[#739376]/40">
                          {order.status}
                        </span>
                      </div>
                    </div>

                    {/* PRODUCTION STEP TRACKER */}
                    <div className="p-5 border-b border-[#E6EDE6] bg-white">
                      <div className="flex items-center justify-between max-w-xl mx-auto text-[11px] font-semibold text-[#243528]">
                        <div className="flex flex-col items-center gap-1">
                          <span className="w-6 h-6 rounded-full bg-[#243528] text-white flex items-center justify-center text-[10px]">✓</span>
                          <span>Placed</span>
                        </div>
                        <div className={`h-0.5 flex-1 mx-2 ${order.statusStep >= 2 ? 'bg-[#243528]' : 'bg-stone-200'}`} />
                        <div className="flex flex-col items-center gap-1">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
                            order.statusStep >= 2 ? 'bg-[#243528] text-white' : 'bg-stone-100 border'
                          }`}>
                            {order.statusStep >= 2 ? '✓' : '2'}
                          </span>
                          <span>Weaving</span>
                        </div>
                        <div className={`h-0.5 flex-1 mx-2 ${order.statusStep >= 3 ? 'bg-[#243528]' : 'bg-stone-200'}`} />
                        <div className="flex flex-col items-center gap-1">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
                            order.statusStep >= 3 ? 'bg-[#243528] text-white' : 'bg-stone-100 border'
                          }`}>
                            {order.statusStep >= 3 ? '✓' : '3'}
                          </span>
                          <span>Tailored</span>
                        </div>
                        <div className={`h-0.5 flex-1 mx-2 ${order.statusStep >= 4 ? 'bg-[#243528]' : 'bg-stone-200'}`} />
                        <div className="flex flex-col items-center gap-1">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
                            order.statusStep >= 4 ? 'bg-[#243528] text-white' : 'bg-stone-100 border'
                          }`}>
                            {order.statusStep >= 4 ? '✓' : '4'}
                          </span>
                          <span>Shipped</span>
                        </div>
                        <div className={`h-0.5 flex-1 mx-2 ${order.statusStep >= 5 ? 'bg-[#243528]' : 'bg-stone-200'}`} />
                        <div className="flex flex-col items-center gap-1">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${
                            order.statusStep >= 5 ? 'bg-[#243528] text-white' : 'bg-stone-100 border'
                          }`}>
                            {order.statusStep >= 5 ? '✓' : '5'}
                          </span>
                          <span>Delivered</span>
                        </div>
                      </div>
                    </div>

                    {/* ITEMS LIST */}
                    <div className="p-5 space-y-4">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex gap-4 items-center">
                          <SafeImage
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-xl object-cover bg-[#F5EFE6] shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-brand-title text-sm font-bold text-[#1E2A21]">
                              {item.name}
                            </h4>
                            <p className="text-xs text-[#555C56]">
                              Qty: {item.qty} • {item.color} • {item.size}
                            </p>
                          </div>
                          <span className="font-sans font-bold text-sm text-[#1E2A21]">
                            ₹{(item.price * item.qty).toLocaleString('en-IN')}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>
                ))}
              </div>
            )}

            {/* WISHLIST TAB */}
            {activeTab === 'wishlist' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-brand-title text-xl font-bold text-[#1E2A21]">
                    Saved Wishlist Items ({wishlistProducts.length})
                  </h3>
                  <button
                    onClick={() => onNavigate('wishlist')}
                    className="text-xs text-[#5B7A5E] hover:underline font-semibold cursor-pointer"
                  >
                    Open Full Wishlist Page →
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {wishlistProducts.map((p) => (
                    <div
                      key={p.id}
                      className="p-3.5 bg-white rounded-xl border border-[#E6EDE6] flex gap-3 hover:border-[#8DA98F] transition-all"
                    >
                      <SafeImage
                        src={p.images[0]}
                        alt={p.name}
                        className="w-16 h-16 rounded-lg object-cover bg-[#F5EFE6] shrink-0"
                      />
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <h5 className="font-brand-title text-xs font-bold text-[#243528] truncate">
                            {p.name}
                          </h5>
                          <span className="font-sans text-xs font-bold text-[#1E2A21]">
                            ₹{p.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <button
                          onClick={() => onNavigate(`product-${p.id}`)}
                          className="text-[11px] text-[#5B7A5E] hover:underline text-left font-semibold cursor-pointer"
                        >
                          View Details →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ADDRESSES TAB */}
            {activeTab === 'addresses' && (
              <div className="space-y-4">
                <h3 className="font-brand-title text-xl font-bold text-[#1E2A21]">
                  Saved Delivery Residences
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {savedAddresses.map((addr) => (
                    <div
                      key={addr.id}
                      className={`p-5 rounded-2xl border bg-white space-y-2 ${
                        addr.isDefault ? 'border-[#243528] ring-1 ring-[#243528]' : 'border-[#D0DDD1]'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <strong className="text-xs font-bold text-[#243528] uppercase tracking-wider">
                          {addr.title}
                        </strong>
                        {addr.isDefault && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E6EDE6] text-[#49634C] font-semibold">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-bold text-[#1E2A21]">{addr.name}</p>
                      <p className="text-xs text-[#555C56] leading-relaxed">{addr.address}</p>
                      <p className="text-xs text-[#555C56]">Phone: {addr.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PROFILE SETTINGS TAB */}
            {activeTab === 'profile' && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#D0DDD1] space-y-5">
                <h3 className="font-brand-title text-xl font-bold text-[#1E2A21]">
                  Textile &amp; Atelier Preferences
                </h3>
                <div className="space-y-3 text-xs text-[#3A403B]">
                  <div className="flex justify-between border-b border-[#E6EDE6] pb-2">
                    <span className="font-semibold text-[#555C56]">Full Name:</span>
                    <span>Radhika Sharma</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E6EDE6] pb-2">
                    <span className="font-semibold text-[#555C56]">Email:</span>
                    <span>radhika.sharma@example.com</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E6EDE6] pb-2">
                    <span className="font-semibold text-[#555C56]">Preferred Palette:</span>
                    <span>Sage Leaf, Warm Oatmeal, Deep Teal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-[#555C56]">Heritage Privilege Status:</span>
                    <span className="text-[#49634C] font-bold">75-Year Jubilee VIP Patron</span>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
