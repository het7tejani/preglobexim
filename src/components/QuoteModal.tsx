import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { SITE_INFO } from '../data/siteContent';
import { submitInquiry } from '../data/submitInquiry';

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
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (defaultProduct) {
      setFormData((prev) => ({ ...prev, product: defaultProduct }));
    }
  }, [defaultProduct]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');
    try {
      await submitInquiry({ ...formData, _subject: 'PriGlob Exim: Export RFQ', _replyto: formData.email, form: 'Export RFQ' });
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Could not send. Please email priglobexim@gmail.com directly.');
    } finally {
      setSubmitting(false);
    }
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#f5f1e8] rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#e6dec9] text-[#2f3437]">
        {/* Close button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full text-[#2f3437]/70 hover:bg-[#e6dec9] transition cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-[#0e5a46] rounded-full flex items-center justify-center mx-auto text-white shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif-nature text-2xl font-bold text-[#0e5a46]">
              Export RFQ Received!
            </h3>
            <p className="text-xs sm:text-sm text-[#2f3437]/75 max-w-md mx-auto leading-relaxed font-light">
              Thank you for submitting your Request for Quotation to PriGlob Exim. Our international export division will calculate container freight rates, volume discounts, and shipping schedules to your target port within 24 hours.
            </p>
            <div className="pt-3">
              <button
                onClick={handleReset}
                className="bg-[#0e5a46] hover:bg-[#197a60] text-white px-7 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition shadow-xs cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-[#0e5a46] text-white px-2.5 py-0.5 rounded-full">
                  International Trade Desk
                </span>
                <span className="text-[11px] font-semibold text-[#478a3f]">
                  Govt. of India IEC Registered
                </span>
              </div>
              <h3 className="font-serif-nature text-xl sm:text-2xl font-bold text-[#0e5a46] mt-2">
                Request an Export Quote (RFQ)
              </h3>
              <p className="text-xs text-[#2f3437]/65 mt-1 font-light">
                Direct factory manufacturing, container consolidation &amp; worldwide port shipping.
              </p>
            </div>

            {submitError && <p role="alert" className="text-red-700 text-xs mb-3">{submitError}</p>}
            <form onSubmit={handleSubmit} className="space-y-3.5 text-left text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#0e5a46] uppercase tracking-wider mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#e6dec9] text-xs sm:text-sm text-[#2f3437] focus:outline-none focus:border-[#0e5a46]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0e5a46] uppercase tracking-wider mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="buyer@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#e6dec9] text-xs sm:text-sm text-[#2f3437] focus:outline-none focus:border-[#0e5a46]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#0e5a46] uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 555 0192"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#e6dec9] text-xs sm:text-sm text-[#2f3437] focus:outline-none focus:border-[#0e5a46]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0e5a46] uppercase tracking-wider mb-1">
                    Destination Country &amp; Port *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. USA / Port of Los Angeles"
                    value={formData.portOfDischarge}
                    onChange={(e) => setFormData({ ...formData, portOfDischarge: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#e6dec9] text-xs sm:text-sm text-[#2f3437] focus:outline-none focus:border-[#0e5a46]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#0e5a46] uppercase tracking-wider mb-1">
                    Product Category / Item *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Product title"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#e6dec9] text-xs sm:text-sm text-[#2f3437] focus:outline-none focus:border-[#0e5a46]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0e5a46] uppercase tracking-wider mb-1">
                    Estimated Quantity *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 5,000 pcs / 1x 20ft FCL"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#e6dec9] text-xs sm:text-sm text-[#2f3437] focus:outline-none focus:border-[#0e5a46]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#0e5a46] uppercase tracking-wider mb-1">
                    Preferred Incoterm
                  </label>
                  <select
                    value={formData.incoterm}
                    onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#e6dec9] text-xs sm:text-sm text-[#2f3437] focus:outline-none focus:border-[#0e5a46]"
                  >
                    <option value="FOB">FOB (Mundra / JNPT / Air)</option>
                    <option value="CIF">CIF (Cost, Insurance &amp; Freight)</option>
                    <option value="CFR">CFR (Cost &amp; Freight)</option>
                    <option value="EXW">EXW (Factory Warehouse)</option>
                    <option value="DDP">DDP (Delivered Duty Paid)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0e5a46] uppercase tracking-wider mb-1">
                    Shipping Mode
                  </label>
                  <select
                    value={formData.shippingMode}
                    onChange={(e) => setFormData({ ...formData, shippingMode: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#e6dec9] text-xs sm:text-sm text-[#2f3437] focus:outline-none focus:border-[#0e5a46]"
                  >
                    <option value="Ocean FCL (Full Container)">Ocean FCL (20ft / 40ft Container)</option>
                    <option value="Ocean LCL (Consolidated)">Ocean LCL (Palletized Cargo)</option>
                    <option value="Air Cargo Express">Air Cargo Express (Fast Delivery)</option>
                    <option value="Courier Sample">Trial Sample Dispatches</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0e5a46] uppercase tracking-wider mb-1">
                  Custom OEM, Packaging &amp; Inspection Specifications
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention OEM branding, barcoding, fabric GSM, mesh size, SGS inspection, or payment terms (L/C, T/T)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#e6dec9] text-xs sm:text-sm text-[#2f3437] focus:outline-none focus:border-[#0e5a46]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 px-6 rounded-xl bg-[#0e5a46] hover:bg-[#197a60] text-white text-xs sm:text-sm font-bold flex items-center justify-center space-x-2 transition shadow-md active:scale-98 disabled:opacity-75 cursor-pointer"
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

              <p className="text-[11px] text-center text-[#2f3437]/65 pt-1">
                Direct export inquiries: {SITE_INFO.contacts.asiaAfricaOceania.email} | WhatsApp: +91 728 486 6165
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
