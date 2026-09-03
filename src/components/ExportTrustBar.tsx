import React from 'react';
import { Leaf, Award, Ship, Clock } from 'lucide-react';

export const ExportTrustBar: React.FC = () => {
  const PILLARS = [
    {
      icon: Leaf,
      title: 'Eco-Sustainable Materials',
      desc: '100% Organic Cotton & Biodegradable Jute',
    },
    {
      icon: Award,
      title: 'Direct OEM Manufacturing',
      desc: 'Custom Silkscreen, Embroidery & Private Label',
    },
    {
      icon: Ship,
      title: 'Deep-Sea Maritime Freight',
      desc: 'Mundra & Pipavav Port Ocean FCL / LCL',
    },
    {
      icon: Clock,
      title: '24-Hour Export Desk',
      desc: 'FOB, CIF & DDP Quotes with Transparent Pricing',
    },
  ];

  return (
    <div className="border-y border-[#E6DCcb] bg-[#FAF7F2] py-5 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PILLARS.map((p, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#EFE7D8] flex items-center justify-center flex-shrink-0 text-[#8A5B20]">
                <p.icon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs sm:text-sm font-bold text-[#111111]">
                  {p.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-[#666666] mt-0.5">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
