import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQPage: React.FC = () => {
  const faqs = [
    { question: 'What is your minimum order quantity?', answer: 'The catalogue lists a standard MOQ of 500 to 1,000 units per style for custom printing or embroidery. Custom-dyed fabric or special hardware may require 2,000 units. Ask for a quote for your exact bag and specification.' },
    { question: 'Can I request a sample before a bulk order?', answer: 'Yes. Custom pre-production samples are generally dispatched in 5 to 7 business days by air courier. Confirm sample cost, specifications and courier charges when requesting your quote.' },
    { question: 'Which bags and custom branding options are available?', answer: 'Our catalogue covers cotton canvas totes, drawstring pouches and jute hampers. Ask about dimensions, handles, pockets, labels and screen or transfer printing. Bottle bags are listed as custom inquiries with representative photos only; request an actual sample before ordering.' },
    { question: 'Which ports and Incoterms do you support?', answer: 'Our listed loading ports are Mundra and Pipavav in Gujarat. We can quote FOB, CIF, CFR, EXW or DDP. Tell us your destination port and preferred Incoterm so the quote states exactly which costs and responsibilities are included.' },
    { question: 'How long does a bulk order take?', answer: 'The site lists a typical production window of 15 to 25 days for standard bulk orders, depending on quantity and customization. Shipping time depends on the destination and freight option; ask for a schedule with your quote.' },
    { question: 'What are the payment terms?', answer: 'Payment terms are agreed in the formal quotation for each order. Please ask our trade desk for the accepted method, deposit or balance schedule and currency before confirming production. Do not send payment based on the website alone.' },
  ];

  return (
    <div className="bg-[#f5f1e8] text-[#2f3437] min-h-screen">
      {/* Naturetote Header Banner */}
      <div className="bg-[#0e5a46] text-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-[#e6dec9]">
        <div className="max-w-screen-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6bcb5b] block mb-1">
            Export Help &amp; Trade Information
          </span>
          <h1 className="font-serif-nature text-2xl sm:text-3xl lg:text-4xl font-bold">
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      {/* FAQ Accordion List */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0e5a46]/10 text-[#0e5a46] px-3.5 py-1 rounded-full text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Buyer Trade Assistance</span>
          </div>
          <h2 className="font-serif-nature text-2xl sm:text-3xl font-bold text-[#0e5a46]">
            Common Queries About Sourcing, MOQ &amp; Export
          </h2>
          <p className="text-xs sm:text-sm text-[#2f3437]/70 font-light">
            Everything you need to know about placing bulk wholesale and export orders with PriGlob Exim.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white border border-[#e6dec9] rounded-2xl p-6 transition-all duration-300 open:shadow-md"
            >
              <summary className="font-serif-nature font-bold text-base sm:text-lg text-[#0e5a46] cursor-pointer list-none flex items-center justify-between gap-4">
                <span>{faq.question}</span>
                <span className="w-8 h-8 rounded-full bg-[#f5f1e8] flex items-center justify-center flex-shrink-0 text-[#0e5a46] transition-transform duration-300 group-open:rotate-180">
                  <ChevronDown className="w-4 h-4" />
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#e6dec9] text-xs sm:text-sm text-[#2f3437]/75 font-light leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};
