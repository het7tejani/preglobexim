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
      product: '',
      quantity: '',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#F8F4EC] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E0D4BE] text-[#111111]">
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
              Inquiry Received!
            </h3>
            <p className="text-sm text-[#444444] max-w-sm mx-auto leading-relaxed">
              Thank you for reaching out to PriGlob Exim. Our international trade team will review your specifications and get back to you with competitive quotes within 24 hours.
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
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8A7555]">
                Export &amp; Supply Inquiry
              </span>
              <h3 className="text-2xl font-bold text-[#111111] mt-1">
                Request a Custom Quote
              </h3>
              <p className="text-xs text-[#555555] mt-1">
                Direct manufacturing &amp; worldwide freight solutions from PriGlob Exim.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold text-[#222222] mb-1">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D5C8B0] text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#CBA569]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    Work Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D5C8B0] text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#CBA569]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 234 567 890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D5C8B0] text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#CBA569]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    Product of Interest
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Cotton Tote Bags, Turmeric, Rings"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D5C8B0] text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#CBA569]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#222222] mb-1">
                    Estimated Quantity / MOQ
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 500 pcs / 2 Tons"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D5C8B0] text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#CBA569]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#222222] mb-1">
                  Specific Requirements or Target Destination
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details regarding GSM, customization, ports of delivery, or certification needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D5C8B0] text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#CBA569]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 px-6 rounded-full bg-[#111111] hover:bg-black text-white text-sm font-semibold flex items-center justify-center space-x-2 transition shadow-md active:scale-98 disabled:opacity-75"
                >
                  {submitting ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Quote Request</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-[#666666] pt-1">
                Direct email inquiries: {SITE_INFO.contacts.asiaAfricaOceania.email} | {SITE_INFO.contacts.euAmericas.email}
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
