import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send } from 'lucide-react';
import { SITE_INFO } from '../data/siteContent';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultProduct = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    portOfDischarge: '',
    incoterm: 'FOB',
    shippingMode: 'Ocean FCL (Full Container)',
    product: defaultProduct,
    quantity: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (defaultProduct) {
      setFormData((prev) => ({ ...prev, product: defaultProduct }));
    }
  }, [defaultProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate instantaneous smooth submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      country: '',
      portOfDischarge: '',
      incoterm: 'FOB',
      shippingMode: 'Ocean FCL (Full Container)',
      product: '',
      quantity: '',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#F8F4EC] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E0D4BE] text-[#111111]">
        {/* Close button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full text-[#444444] hover:bg-[#EAE0CE] transition"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-[#F9D9A7] rounded-full flex items-center justify-center mx-auto text-[#734A12]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#111111]">
              Export RFQ Received!
            </h3>
            <p className="text-sm text-[#444444] max-w-md mx-auto leading-relaxed">
              Thank you for submitting your Request for Quotation to PriGlob Exim. Our international export division will calculate freight rates, volume discounts, and shipping schedules to your target port within 24 hours.
            </p>
            <div className="pt-3">
              <button
                onClick={handleReset}
                className="bg-[#111111] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-black transition shadow"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-[#111111] text-[#F9D9A7] px-2.5 py-0.5 rounded-full">
                  International Trade Desk
                </span>
                <span className="text-[11px] font-semibold text-[#8A7555]">
                  Govt. of India IEC Registered
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mt-2">
                Request an Export Quote (RFQ)
              </h3>
              <p className="text-xs text-[#555555] mt-1">
                Direct factory manufacturing, container consolidation &amp; worldwide port shipping.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-left text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    Contact / Buyer Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Robert Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#D5C8B0] text-xs sm:text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#CBA569]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    Corporate Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="buyer@globalcorp.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#D5C8B0] text-xs sm:text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#CBA569]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    Country of Destination <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. United States, Germany, UAE"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#D5C8B0] text-xs sm:text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#CBA569]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    Port of Discharge / City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rotterdam, Hamburg, Los Angeles"
                    value={formData.portOfDischarge}
                    onChange={(e) => setFormData({ ...formData, portOfDischarge: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#D5C8B0] text-xs sm:text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#CBA569]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    Product / Commodity
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Cotton Tote Bags, Spices, Jewellery"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#D5C8B0] text-xs sm:text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#CBA569]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    Target Volume / Container
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 5,000 pcs / 20ft FCL / 2 Tons"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#D5C8B0] text-xs sm:text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#CBA569]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    Preferred Incoterm
                  </label>
                  <select
                    value={formData.incoterm}
                    onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#D5C8B0] text-xs sm:text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#CBA569]"
                  >
                    <option value="FOB">FOB (Mundra / JNPT / Air)</option>
                    <option value="CIF">CIF (Cost, Insurance &amp; Freight)</option>
                    <option value="CFR">CFR (Cost &amp; Freight)</option>
                    <option value="EXW">EXW (Factory Warehouse)</option>
                    <option value="DDP">DDP (Delivered Duty Paid)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    Shipping Mode
                  </label>
                  <select
                    value={formData.shippingMode}
                    onChange={(e) => setFormData({ ...formData, shippingMode: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#D5C8B0] text-xs sm:text-sm text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#CBA569]"
                  >
                    <option value="Ocean FCL (Full Container)">Ocean FCL (20ft / 40ft Container)</option>
                    <option value="Ocean LCL (Consolidated)">Ocean LCL (Palletized Cargo)</option>
                    <option value="Air Cargo Express">Air Cargo Express (Fast Delivery)</option>
                    <option value="Courier Sample">Trial Sample Dispatches</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#222222] mb-1">
                  Custom OEM, Packaging &amp; Inspection Specifications
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention OEM branding, barcoding, fabric GSM, mesh size, SGS inspection, or payment terms (L/C, T/T)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#D5C8B0] text-xs sm:text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#CBA569]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 px-6 rounded-full bg-[#111111] hover:bg-black text-white text-sm font-semibold flex items-center justify-center space-x-2 transition shadow-md active:scale-98 disabled:opacity-75"
                >
                  {submitting ? (
                    <span>Calculating Global Rates...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Export RFQ</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-[#666666] pt-1">
                Direct export inquiries: {SITE_INFO.contacts.asiaAfricaOceania.email} | WhatsApp: +91 948 485 5426
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
