import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQPage: React.FC = () => {
  const faqs = [
    {
      question: 'What types of bags does PriGlob Exim manufacture and export?',
      answer:
        'PriGlob Exim specializes in sustainable cotton and golden jute bags for international retail, grocery chains, corporate gifting, and luxury packaging. Our export line covers 100% GOTS organic cotton tote bags, canvas shoppers, heavy-duty 350 GSM natural jute hampers, drawstring packaging pouches, and custom wardrobe organizer covers.',
    },
    {
      question: 'What is the Minimum Order Quantity (MOQ)?',
      answer:
        'Our standard export MOQ is 500 to 1,000 units per style with custom OEM screen-printing or embroidery. For bespoke custom-dyed fabrics or specialized hardware requirements, MOQ is 2,000 units. We also support trial sampling orders for verified corporate importers.',
    },
    {
      question: 'How do you ensure fabric quality, stitch durability, and international compliance?',
      answer:
        'Every production batch undergoes strict multi-point inspection. Fabrics are verified for GSM weight, tensile strength, and azo-free dye fastness. Handles are reinforced with double X-box stitching tested to hold up to 15-20 kg. All products comply with EU REACH, GOTS organic standards, and zero-plastic eco-regulations.',
    },
    {
      question: 'What Incoterms and shipping methods do you support?',
      answer:
        'We support FOB (Mundra & Pipavav Seaports), CIF (any global seaport or international airport), CFR, EXW, and DDP terms. Ocean shipments are containerized in 20ft and 40ft FCL or consolidated LCL with premier freight forwarders.',
    },
    {
      question: 'Can you manufacture custom branded bags with our company logo?',
      answer:
        'Yes! We provide complete OEM/ODM solutions including custom dimensions, handle variations, inner zip pockets, woven labels, hangtags, and multi-color silk-screen or digital transfer printing.',
    },
    {
      question: 'How long does sample delivery and full production take?',
      answer:
        'Custom pre-production samples are dispatched within 5 to 7 business days via air courier. Standard containerized production takes between 15 to 25 days depending on total order volume and customization specifications.',
    },
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
