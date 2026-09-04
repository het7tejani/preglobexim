import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQPage: React.FC = () => {
  const faqs = [
    {
      question: 'What types of products does PriGlob Exim export?',
      answer:
        'PriGlob Exim specializes in three core sectors: eco-friendly organic cotton & heavy-duty jute bags (drawstring pouches, shopping totes, hampers), fine gems & certified jewellery (lab-grown and natural diamonds, emeralds, 925 silver), and authentic AGMARK certified Indian spices (turmeric, cumin, chilli, cardamom).',
    },
    {
      question: 'What is the Minimum Order Quantity (MOQ)?',
      answer:
        'For cotton and jute bags, standard MOQ is 500 to 1,000 units per design with custom OEM screen-printing. For gems and jewellery, MOQ starts from 10 to 50 pieces. For bulk spices, we supply starting from 500 kg up to full 20ft (12-14 MT) and 40ft (24-26 MT) FCL container loads.',
    },
    {
      question: 'How do you ensure batch quality and international compliance?',
      answer:
        'Every shipment undergoes pre-dispatch inspection. Bag fabrics are tested for GSM weight and dye fastness. Gemstones & diamonds come with IGI, GIA, or SGL certificates. Spices are batch-tested for moisture, pesticide residue, and aflatoxin levels with SGS/Geo-Chem inspection certificates on request.',
    },
    {
      question: 'What Incoterms and shipping methods do you support?',
      answer:
        'We support FOB (Mundra/Pipavav Port), CIF (any global destination seaport or airport), CFR, EXW, and DDP terms. Shipments are handled via reputable ocean carriers (Maersk, MSC, CMA CGM) and express air couriers (DHL, FedEx, Malca-Amit for high-value jewelry).',
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
