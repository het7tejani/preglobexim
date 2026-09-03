import React, { useState } from 'react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="bg-[#F8F4EC] text-[#111111] min-h-screen">
      {/* ========================================================================= */}
      {/* SECTION 1: BANNER (#F9D9A7)                                               */}
      {/* ========================================================================= */}
      <div className="bg-[#F9D9A7] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold text-[#111111]">
            Contact Us
          </h1>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 2: CONTACT FORM (WPForms Layout)                                  */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        <div className="text-center mb-8 space-y-3">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#111111]">
            <strong>Get Quotes &amp; Business Support</strong>
          </h3>
        </div>

        {submitted ? (
          <div className="p-8 text-center bg-[#F9D9A7]/50 rounded-2xl space-y-3">
            <p className="text-lg font-bold text-[#111111]">
              Thank you for contacting us!
            </p>
            <p className="text-sm text-[#444444]">
              We have received your message and will respond shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ firstName: '', lastName: '', email: '', message: '' });
              }}
              className="mt-3 px-6 py-2 rounded-full bg-[#111111] text-white text-xs font-semibold hover:bg-black transition"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field with First & Last */}
            <div>
              <label className="block text-sm font-semibold text-[#111111] mb-1.5">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-3 py-2 border border-[#CCCCCC] rounded bg-white text-sm text-[#111111] focus:outline-none focus:border-[#888888]"
                  />
                  <span className="block text-xs text-[#666666] mt-1">First</span>
                </div>
                <div>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-3 py-2 border border-[#CCCCCC] rounded bg-white text-sm text-[#111111] focus:outline-none focus:border-[#888888]"
                  />
                  <span className="block text-xs text-[#666666] mt-1">Last</span>
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-[#111111] mb-1.5">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 border border-[#CCCCCC] rounded bg-white text-sm text-[#111111] focus:outline-none focus:border-[#888888]"
              />
            </div>

            {/* Comment or Message */}
            <div>
              <label className="block text-sm font-semibold text-[#111111] mb-1.5">
                Comment or Message
              </label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 border border-[#CCCCCC] rounded bg-white text-sm text-[#111111] focus:outline-none focus:border-[#888888]"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-2.5 rounded bg-[#111111] text-white text-sm font-semibold hover:bg-black transition disabled:opacity-50"
              >
                {submitting ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        )}

        <div className="mt-8 text-center">
          <p className="text-sm text-[#555555]">
            We’re here to assist with your orders and questions.
          </p>
        </div>
      </section>
    </div>
  );
};
