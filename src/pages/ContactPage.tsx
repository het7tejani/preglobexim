import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Globe2 } from 'lucide-react';
import { submitInquiry } from '../data/submitInquiry';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    category: 'Cotton & Jute Bags',
    quantity: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');
    try {
      await submitInquiry({ ...formData, _subject: 'PriGlob Exim: Contact inquiry', _replyto: formData.email, form: 'Contact page' });
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Could not send. Please email priglobexim@gmail.com directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f5f1e8] text-[#2f3437] min-h-screen">
      {/* Naturetote Header Banner */}
      <div className="bg-[#0e5a46] text-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-[#e6dec9]">
        <div className="max-w-screen-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6bcb5b] block mb-1">
            24/7 International Desk
          </span>
          <h1 className="font-serif-nature text-2xl sm:text-3xl lg:text-4xl font-bold">
            Contact &amp; Request RFQ
          </h1>
        </div>
      </div>

      <section className="py-12 sm:py-18 px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="font-serif-nature text-2xl sm:text-3xl font-bold text-[#0e5a46] mb-3">
                Get in Touch with Our Export Team
              </h2>
              <p className="text-xs sm:text-sm text-[#2f3437]/75 font-light leading-relaxed">
                Connect directly with our regional trade specialists for wholesale bulk pricing, custom OEM samples, shipping schedules, and export documentation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white border border-[#e6dec9] rounded-2xl p-5 flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#0e5a46]/10 text-[#0e5a46] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-nature text-sm font-bold text-[#0e5a46]">Registered Office &amp; Works</h4>
                  <p className="text-xs text-[#2f3437]/75 font-light mt-0.5">
                    Surat, Gujarat, India - 395005
                  </p>
                  <p className="text-[11px] text-[#478a3f] font-semibold mt-1">
                    Port of Loading: Mundra &amp; Pipavav
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#e6dec9] rounded-2xl p-5 flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#0e5a46]/10 text-[#0e5a46] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-nature text-sm font-bold text-[#0e5a46]">Direct Inquiries (Call &amp; WhatsApp)</h4>
                  <p className="text-xs text-[#2f3437]/80 font-light mt-0.5">
                    Asia &amp; Global: <a href="tel:+917284866165" className="font-medium text-[#0e5a46] hover:underline">+91 728 486 6165</a>
                  </p>
                  <p className="text-xs text-[#2f3437]/80 font-light mt-0.5">
                    Europe Desk: <a href="tel:+393445784783" className="font-medium text-[#0e5a46] hover:underline">+39 344 578 4783</a>
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#e6dec9] rounded-2xl p-5 flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#0e5a46]/10 text-[#0e5a46] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-nature text-sm font-bold text-[#0e5a46]">Official Email Inquiries</h4>
                  <p className="text-xs text-[#2f3437]/80 font-light mt-0.5">
                    General: <a href="mailto:priglobexim@gmail.com" className="font-medium text-[#0e5a46] hover:underline">priglobexim@gmail.com</a>
                  </p>
                  <p className="text-xs text-[#2f3437]/80 font-light mt-0.5">
                    Trade Desk: <a href="mailto:info.priglob@gmail.com" className="font-medium text-[#0e5a46] hover:underline">info.priglob@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: RFQ Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#e6dec9] rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-serif-nature text-xl sm:text-2xl font-bold text-[#0e5a46] mb-2">
                Request a Formal Export Quotation
              </h3>
              <p className="text-xs sm:text-sm text-[#2f3437]/65 font-light mb-6">
                Receive pricing, container specs, and sample dispatch details within 24 business hours.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-[#0e5a46]/10 rounded-2xl space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#0e5a46] mx-auto" />
                  <h4 className="font-serif-nature text-lg font-bold text-[#0e5a46]">
                    Thank you! Your RFQ has been submitted.
                  </h4>
                  <p className="text-xs sm:text-sm text-[#2f3437]/75 font-light">
                    Our international trade desk will review your specifications and contact you shortly with formal FOB/CIF pricing.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        category: 'Cotton & Jute Bags',
                        quantity: '',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-[#0e5a46] text-white text-xs font-bold hover:bg-[#197a60] transition cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <>
                {submitError && <p role="alert" className="text-red-700 text-xs mb-3">{submitError}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0e5a46] uppercase tracking-wider mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6dec9] bg-[#fdfcf9] text-xs sm:text-sm focus:outline-none focus:border-[#0e5a46]"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0e5a46] uppercase tracking-wider mb-1.5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6dec9] bg-[#fdfcf9] text-xs sm:text-sm focus:outline-none focus:border-[#0e5a46]"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0e5a46] uppercase tracking-wider mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6dec9] bg-[#fdfcf9] text-xs sm:text-sm focus:outline-none focus:border-[#0e5a46]"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0e5a46] uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6dec9] bg-[#fdfcf9] text-xs sm:text-sm focus:outline-none focus:border-[#0e5a46]"
                        placeholder="+1 555 0192"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0e5a46] uppercase tracking-wider mb-1.5">
                        Product Interest *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6dec9] bg-[#fdfcf9] text-xs sm:text-sm focus:outline-none focus:border-[#0e5a46]"
                      >
                        <option value="Cotton Canvas Tote Bags">Cotton Canvas Tote Bags</option>
                        <option value="Golden Jute Bags & Hampers">Golden Jute Bags &amp; Hampers</option>
                        <option value="Drawstring Pouches & Packaging">Drawstring Pouches &amp; Packaging</option>
                        <option value="Bottle Bags (Custom Inquiry)">Bottle Bags (Custom Inquiry)</option>
                        <option value="Custom OEM / ODM Bag Manufacturing">Custom OEM / ODM Bag Manufacturing</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0e5a46] uppercase tracking-wider mb-1.5">
                        Estimated Order Volume
                      </label>
                      <input
                        type="text"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6dec9] bg-[#fdfcf9] text-xs sm:text-sm focus:outline-none focus:border-[#0e5a46]"
                        placeholder="e.g., 2,000 units / 1x 20ft container"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0e5a46] uppercase tracking-wider mb-1.5">
                      Order Specifications &amp; Destination Port *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#e6dec9] bg-[#fdfcf9] text-xs sm:text-sm focus:outline-none focus:border-[#0e5a46]"
                      placeholder="Please mention preferred Incoterms (FOB/CIF), destination country/port, packaging details, and any customization requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-[#0e5a46] hover:bg-[#197a60] text-white text-xs sm:text-sm font-bold tracking-wide transition shadow-sm cursor-pointer flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <span>Sending RFQ...</span>
                    ) : (
                      <>
                        <span>Submit Export Quotation Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
