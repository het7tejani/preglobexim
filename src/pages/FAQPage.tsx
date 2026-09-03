import React from 'react';

export const FAQPage: React.FC = () => {
  const faqs = [
    {
      question: 'What types of products does PriGlob Exim provide?',
      answer:
        'PriGlob Exim exports a variety of products including cotton bags (multipurpose bags, handbags, and kids bags), premium Indian spices, and quality gems and jewellery for global markets.',
    },
    {
      question: 'What is the minimum order quantity (MOQ)?',
      answer:
        'The minimum order quantity may vary depending on the product type and customization requirements. Please contact us to discuss your specific order details.',
    },
    {
      question: 'How do you ensure product quality?',
      answer:
        'At PriGlob Exim, every product goes through strict quality checks during manufacturing and before shipment to ensure high standards and customer satisfaction.',
    },
    {
      question: 'What types of transportation do you provide for shipments?',
      answer:
        'We offer both air freight and sea freight shipping options depending on the buyer’s requirements, delivery timeline, and order volume.',
    },
  ];

  return (
    <div className="bg-[#F8F4EC] text-[#111111] min-h-screen">
      {/* ========================================================================= */}
      {/* SECTION 1: BANNER (#F9D9A7)                                               */}
      {/* ========================================================================= */}
      <div className="bg-[#F9D9A7] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold text-[#111111]">
            FAQ
          </h1>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 2: FAQ ITEMS (WordPress Layout)                                   */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111]">
            <strong>Frequently Asked Questions About Our Products &amp; Services</strong>
          </h2>
          <p className="text-sm sm:text-base text-[#555555]">
            Find clear, helpful answers to your questions about our manufacturing and supply services.
          </p>
        </div>

        <div className="space-y-12">
          {faqs.map((faq, idx) => (
            <div key={idx} className="text-center space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-[#111111]">
                <strong>{faq.question}</strong>
              </h3>
              <p className="text-sm sm:text-base text-[#444444] leading-relaxed max-w-2xl mx-auto">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
