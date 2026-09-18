import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useModals } from '../context/ModalContext';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  ShieldCheck, 
  CreditCard, 
  Smartphone, 
  Banknote, 
  Truck, 
  MapPin, 
  User, 
  ArrowRight, 
  ChevronLeft,
  Sparkles,
  ShoppingBag
} from 'lucide-react';

export const CheckoutPage = ({ onNavigate }) => {
  const { cart, subtotal, discountAmount, discountPercent, shipping, total, clearCart } = useCart();
  const { showToast } = useModals();

  const [step, setStep] = useState(1); // 1: Contact -> 2: Address -> 3: Shipping -> 4: Payment -> 5: Confirmed
  const [formData, setFormData] = useState({
    email: 'radhika.sharma@example.com',
    phone: '+91 98370 12345',
    firstName: 'Radhika',
    lastName: 'Sharma',
    address: '42, Civil Lines, Near Circuit House',
    city: 'Meerut',
    state: 'Uttar Pradesh',
    pincode: '250001',
    deliveryMethod: 'white-glove',
    paymentMethod: 'upi', // upi, card, netbanking, cod
    upiId: 'radhika@oksbi',
    cardNumber: '•••• •••• •••• 4242',
    cardExpiry: '12/28',
    cardCvv: '•••'
  });

  const [orderNumber, setOrderNumber] = useState('');

  const handleNextStep = () => {
    setStep(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevStep = () => {
    setStep(prev => Math.max(1, prev - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteOrder = () => {
    const generatedId = `SH-1950-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderNumber(generatedId);
    setStep(5);
    clearCart();
    showToast(`Order ${generatedId} successfully placed!`);
    
    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#7F9A83', '#243528', '#AEC4B0', '#CBB285']
      });
    } catch {}
  };

  // IF ORDER IS CONFIRMED (STEP 5)
  if (step === 5) {
    return (
      <div className="py-16 bg-[#FAF7F2] min-h-[80vh] flex items-center justify-center animate-in zoom-in-95 duration-500">
        <div className="bg-white max-w-2xl w-full mx-4 p-8 sm:p-12 rounded-3xl border border-[#D0DDD1] shadow-xl text-center space-y-6">
          
          <div className="w-20 h-20 rounded-full bg-[#E6EDE6] border-2 border-[#739376] flex items-center justify-center text-[#243528] mx-auto">
            <CheckCircle2 className="w-10 h-10 text-[#49634C]" />
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block mb-1">
              ESTD. 1950 — SELECTION HERITAGE
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl font-light text-[#1E2A21]">
              Thank You For Your Order
            </h1>
            <p className="font-editorial text-base italic text-[#555C56] mt-1">
              "Crafting your bespoke furnishings with seventy-five years of trust."
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D0DDD1] max-w-md mx-auto text-left space-y-2.5 text-xs text-[#3A403B]">
            <div className="flex justify-between border-b border-[#E6EDE6] pb-2">
              <span className="text-[#739376] uppercase tracking-wider font-semibold">Order ID:</span>
              <span className="font-mono font-bold text-[#1E2A21]">{orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#739376] uppercase tracking-wider font-semibold">Customer:</span>
              <span className="font-bold text-[#243528]">{formData.firstName} {formData.lastName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#739376] uppercase tracking-wider font-semibold">Delivery Address:</span>
              <span className="text-right max-w-[200px] truncate">{formData.address}, {formData.city}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#739376] uppercase tracking-wider font-semibold">Estimated Dispatch:</span>
              <span className="font-bold text-[#49634C]">Within 4-6 Business Days</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-[#E6EDE6] font-bold text-sm text-[#1E2A21]">
              <span>Amount Paid (Mock):</span>
              <span className="font-sans">₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* 5-STAGE PRODUCTION TRACKER PREVIEW */}
          <div className="pt-4">
            <span className="text-xs uppercase tracking-wider text-[#555C56] font-semibold block mb-3">
              Live Masterhouse Order Status
            </span>
            <div className="flex items-center justify-between max-w-md mx-auto text-[10px] font-semibold text-[#243528]">
              <div className="flex flex-col items-center gap-1">
                <span className="w-5 h-5 rounded-full bg-[#243528] text-white flex items-center justify-center text-[9px]">✓</span>
                <span>Placed</span>
              </div>
              <div className="h-0.5 bg-[#243528] flex-1 mx-2" />
              <div className="flex flex-col items-center gap-1 text-[#5B7A5E]">
                <span className="w-5 h-5 rounded-full bg-[#E6EDE6] border border-[#5B7A5E] flex items-center justify-center text-[9px] animate-pulse">●</span>
                <span>Weaving</span>
              </div>
              <div className="h-0.5 bg-stone-200 flex-1 mx-2" />
              <div className="flex flex-col items-center gap-1 text-stone-400">
                <span className="w-5 h-5 rounded-full bg-stone-100 border flex items-center justify-center text-[9px]">3</span>
                <span>Tailored</span>
              </div>
              <div className="h-0.5 bg-stone-200 flex-1 mx-2" />
              <div className="flex flex-col items-center gap-1 text-stone-400">
                <span className="w-5 h-5 rounded-full bg-stone-100 border flex items-center justify-center text-[9px]">4</span>
                <span>Delivered</span>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('account')}
              className="px-6 py-3.5 bg-[#243528] text-white rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] transition-all cursor-pointer shadow-md"
            >
              Track in Account Dashboard
            </button>
            <button
              onClick={() => onNavigate('shop')}
              className="px-6 py-3.5 bg-[#FAF7F2] border border-[#D0DDD1] text-[#243528] rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#E6EDE6] transition-all cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CHECKOUT HEADER & STEP TRACKER */}
        <div className="max-w-3xl mx-auto mb-10 text-center space-y-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#5B7A5E] font-semibold block">
            ESTD. 1950 • SELECTION SECURE CHECKOUT
          </span>
          <h1 className="font-editorial text-3xl sm:text-4xl font-light text-[#1E2A21]">
            Complete Your Order
          </h1>

          {/* STEPPER PILLS */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 pt-2">
            {[
              { id: 1, label: '1. Contact' },
              { id: 2, label: '2. Address' },
              { id: 3, label: '3. Delivery' },
              { id: 4, label: '4. Payment' },
            ].map((s) => (
              <div
                key={s.id}
                className={`text-xs px-3.5 py-1.5 rounded-full font-semibold transition-all ${
                  step === s.id
                    ? 'bg-[#243528] text-white shadow-xs'
                    : step > s.id
                    ? 'bg-[#E6EDE6] text-[#49634C]'
                    : 'bg-white text-[#555C56] border border-[#D0DDD1]'
                }`}
              >
                {s.label}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT: STEP FORMS */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-[#D0DDD1] shadow-xs space-y-6">
            
            {/* STEP 1: CONTACT */}
            {step === 1 && (
              <div className="space-y-5 animate-in fade-in duration-300">
                <div className="border-b border-[#E6EDE6] pb-3">
                  <h3 className="font-brand-title text-lg font-bold text-[#1E2A21]">
                    Contact &amp; Notification Details
                  </h3>
                  <p className="text-xs text-[#555C56]">
                    We will send order progress &amp; weaving dispatch alerts here.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#3A403B] font-semibold mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D0DDD1] bg-[#FAF7F2] text-xs text-[#243528] focus:border-[#243528] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#3A403B] font-semibold mb-1">
                      Phone Number (for SMS &amp; WhatsApp Tracker) *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D0DDD1] bg-[#FAF7F2] text-xs text-[#243528] focus:border-[#243528] outline-none"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-8 py-3.5 bg-[#243528] text-white rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Continue to Address</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: DELIVERY ADDRESS */}
            {step === 2 && (
              <div className="space-y-5 animate-in fade-in duration-300">
                <div className="border-b border-[#E6EDE6] pb-3">
                  <h3 className="font-brand-title text-lg font-bold text-[#1E2A21]">
                    Delivery Residence / Office Address
                  </h3>
                  <p className="text-xs text-[#555C56]">
                    Ensuring safe white-glove transport of tailored textiles.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#3A403B] font-semibold mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D0DDD1] bg-[#FAF7F2] text-xs text-[#243528] focus:border-[#243528] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#3A403B] font-semibold mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D0DDD1] bg-[#FAF7F2] text-xs text-[#243528] focus:border-[#243528] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#3A403B] font-semibold mb-1">
                    Street Address / House No. / Sector *
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D0DDD1] bg-[#FAF7F2] text-xs text-[#243528] focus:border-[#243528] outline-none"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#3A403B] font-semibold mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D0DDD1] bg-[#FAF7F2] text-xs text-[#243528] focus:border-[#243528] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#3A403B] font-semibold mb-1">
                      State *
                    </label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D0DDD1] bg-[#FAF7F2] text-xs text-[#243528] focus:border-[#243528] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#3A403B] font-semibold mb-1">
                      PIN Code *
                    </label>
                    <input
                      type="text"
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D0DDD1] bg-[#FAF7F2] text-xs text-[#243528] focus:border-[#243528] outline-none"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-6 py-3 border border-[#D0DDD1] text-[#243528] rounded-xl text-xs uppercase tracking-wider font-semibold hover:bg-[#FAF7F2] cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-8 py-3.5 bg-[#243528] text-white rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Continue to Shipping</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: SHIPPING */}
            {step === 3 && (
              <div className="space-y-5 animate-in fade-in duration-300">
                <div className="border-b border-[#E6EDE6] pb-3">
                  <h3 className="font-brand-title text-lg font-bold text-[#1E2A21]">
                    Select Shipping &amp; Tailoring Care
                  </h3>
                  <p className="text-xs text-[#555C56]">
                    Every package is sealed in breathable muslin wrap and transit insured.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      id: 'white-glove',
                      name: 'White-Glove Insured Courier (Standard)',
                      time: 'Dispatched in 4-6 business days with live tracking',
                      price: shipping === 0 ? 'Complimentary' : `₹${shipping}`
                    },
                    {
                      id: 'express',
                      name: 'Priority Atelier Tailoring & Express Air Dispatch',
                      time: 'Hand-sewn and dispatched within 48 hours',
                      price: '₹599'
                    }
                  ].map((sMethod) => (
                    <label
                      key={sMethod.id}
                      className={`p-4 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                        formData.deliveryMethod === sMethod.id
                          ? 'border-[#243528] bg-[#E6EDE6] ring-1 ring-[#243528]'
                          : 'border-[#D0DDD1] hover:border-[#739376]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="shipping"
                          checked={formData.deliveryMethod === sMethod.id}
                          onChange={() => setFormData({ ...formData, deliveryMethod: sMethod.id })}
                          className="accent-[#243528]"
                        />
                        <div>
                          <strong className="text-xs text-[#243528] block">{sMethod.name}</strong>
                          <span className="text-[11px] text-[#555C56]">{sMethod.time}</span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#243528] font-sans">{sMethod.price}</span>
                    </label>
                  ))}
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-6 py-3 border border-[#D0DDD1] text-[#243528] rounded-xl text-xs uppercase tracking-wider font-semibold hover:bg-[#FAF7F2] cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-8 py-3.5 bg-[#243528] text-white rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Payment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: PAYMENT (MOCK) */}
            {step === 4 && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="border-b border-[#E6EDE6] pb-3">
                  <h3 className="font-brand-title text-lg font-bold text-[#1E2A21]">
                    Payment Gateway (Mock Prototype)
                  </h3>
                  <p className="text-xs text-[#555C56]">
                    Select your preferred payment method. No real bank charges will occur in this prototype.
                  </p>
                </div>

                {/* PAYMENT METHOD SELECTORS */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'upi', label: 'UPI / QR', icon: Smartphone },
                    { id: 'card', label: 'Credit/Debit Card', icon: CreditCard },
                    { id: 'netbanking', label: 'Net Banking', icon: Sparkles },
                    { id: 'cod', label: 'Cash on Delivery', icon: Banknote },
                  ].map((m) => {
                    const Icon = m.icon;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, paymentMethod: m.id })}
                        className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                          formData.paymentMethod === m.id
                            ? 'border-[#243528] bg-[#E6EDE6] text-[#243528] font-bold ring-1 ring-[#243528]'
                            : 'border-[#D0DDD1] bg-white text-[#555C56] hover:border-[#739376]'
                        }`}
                      >
                        <Icon className="w-5 h-5 mx-auto mb-1 text-[#5B7A5E]" />
                        <span className="text-xs block">{m.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* PAYMENT FIELDS */}
                <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D0DDD1] space-y-4">
                  {formData.paymentMethod === 'upi' && (
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#3A403B] font-semibold mb-1">
                        Enter UPI VPA ID (Google Pay / PhonePe / Paytm / BHIM)
                      </label>
                      <input
                        type="text"
                        value={formData.upiId}
                        onChange={(e) => setFormData({ ...formData, upiId: e.target.value })}
                        placeholder="yourname@okhdfcbank"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D0DDD1] bg-white text-xs text-[#243528] focus:border-[#243528] outline-none"
                      />
                      <span className="text-[10px] text-[#555C56] mt-1 block">
                        A mock authorization request will be simulated instantly.
                      </span>
                    </div>
                  )}

                  {formData.paymentMethod === 'card' && (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#3A403B] font-semibold mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          value={formData.cardNumber}
                          onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-[#D0DDD1] bg-white text-xs text-[#243528] focus:border-[#243528] outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#3A403B] font-semibold mb-1">
                            Expiry (MM/YY)
                          </label>
                          <input
                            type="text"
                            value={formData.cardExpiry}
                            onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-[#D0DDD1] bg-white text-xs text-[#243528] focus:border-[#243528] outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#3A403B] font-semibold mb-1">
                            CVV
                          </label>
                          <input
                            type="password"
                            value={formData.cardCvv}
                            onChange={(e) => setFormData({ ...formData, cardCvv: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-[#D0DDD1] bg-white text-xs text-[#243528] focus:border-[#243528] outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {formData.paymentMethod === 'netbanking' && (
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#3A403B] font-semibold mb-1">
                        Select Bank
                      </label>
                      <select className="w-full px-4 py-2.5 rounded-xl border border-[#D0DDD1] bg-white text-xs text-[#243528] focus:border-[#243528] outline-none">
                        <option>State Bank of India (SBI)</option>
                        <option>HDFC Bank</option>
                        <option>ICICI Bank</option>
                        <option>Axis Bank</option>
                        <option>Kotak Mahindra Bank</option>
                      </select>
                    </div>
                  )}

                  {formData.paymentMethod === 'cod' && (
                    <div className="text-xs text-[#3A403B] space-y-1">
                      <strong className="block text-[#243528]">Cash on Doorstep Delivery Available</strong>
                      <p>Please keep exact cash ready upon arrival of the white-glove courier.</p>
                    </div>
                  )}
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-6 py-3 border border-[#D0DDD1] text-[#243528] rounded-xl text-xs uppercase tracking-wider font-semibold hover:bg-[#FAF7F2] cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleCompleteOrder}
                    className="px-8 py-4 bg-[#243528] text-white rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-[#3D503F] transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#AEC4B0]" />
                    <span>Authorize &amp; Place Order (₹{total.toLocaleString('en-IN')})</span>
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* RIGHT: ORDER SUMMARY PREVIEW */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-[#D0DDD1] shadow-xs space-y-4 sticky top-28">
              <h3 className="font-brand-title text-base font-bold text-[#1E2A21] uppercase tracking-wider border-b border-[#E6EDE6] pb-3">
                Order Items ({cart.reduce((s, i) => s + i.quantity, 0)})
              </h3>

              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-3 text-xs">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover bg-[#F5EFE6] shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="font-brand-title font-bold text-[#243528] truncate">
                        {item.name}
                      </h5>
                      <p className="text-[11px] text-[#555C56]">
                        Qty: {item.quantity} • {item.color}
                      </p>
                      <span className="font-sans font-bold text-[#1E2A21] block mt-0.5">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#E6EDE6] pt-3 space-y-2 text-xs text-[#555C56]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#243528] font-sans">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#49634C]">
                    <span>Heritage Discount ({discountPercent}%)</span>
                    <span className="font-bold font-sans">
                      -₹{discountAmount.toLocaleString('en-IN')}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
                <div className="border-t border-[#E6EDE6] pt-2 flex justify-between text-base font-bold text-[#1E2A21]">
                  <span>Total</span>
                  <span className="font-sans text-lg">
                    ₹{total.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
