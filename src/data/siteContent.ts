export interface Founder {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface TradeExecutive {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const SITE_INFO = {
  name: 'PriGlob Exim',
  tagline: 'Delivering Quality Products to International Markets for Global Brands',
  subtitle: 'Quality Products Exports for Global Markets',
  description:
    'PriGlob Exim delivers superior products with global reach, combining quality craftsmanship and competitive pricing to meet your business demands effectively.',
  logo: '/images/Untitled_design__7_-removebg-preview.png',
  logoDark: '/images/Untitled_design__7_-removebg-preview.png',
  address: '9, Sanskruti Park Society, Jahangirpura, Surat, Gujarat, India.',
  contacts: {
    asiaAfricaOceania: {
      region: 'For Asia, Africa & Oceania',
      email: 'priglobexim@gmail.com',
      phone: '+91 948 485 5426',
    },
    euAmericas: {
      region: 'For EU & North/South America',
      email: 'info.priglob@gmail.com',
      phone: '+39 344 578 4783',
    },
  },
  socials: {
    instagram: 'https://www.instagram.com/priglobexim/',
    facebook: 'https://www.facebook.com/PriGlobExims',
    x: 'https://x.com/PriGlobExim',
    linkedin: 'https://www.linkedin.com/in/priglobexim',
  },
};

export const HOME_MANUFACTURING_UNITS = [
  {
    title: 'Fabric Bag Mfg.',
    image: '/images/Fabric-Bag-Mfg.webp',
    link: '/cotton-jute-tote-bag',
  },
  {
    title: 'Jewellery Mfg.',
    image: '/images/Jewellery-Mfg-1024x683.webp',
    link: '/gems-jewellery',
  },
  {
    title: 'Indian Spices',
    image: '/images/Indian-Spices-Photo-1024x683.webp',
    link: '/indian-spices',
  },
];

export const HOME_PRODUCTS = [
  {
    title: 'Cotton & Jute Bags',
    description: 'Eco-friendly cotton and jute bags designed for sustainable packaging, daily use, and global markets.',
    image: '/images/Bag-1-638x1024.webp',
    link: '/cotton-jute-tote-bag',
  },
  {
    title: 'Gems & Jewellery',
    description: 'High-quality diamonds and colored gemstones crafted for fine jewellery and international luxury markets.',
    image: '/images/Diamond-Jewellery-683x1024.webp',
    link: '/gems-jewellery',
  },
  {
    title: 'Authentic Indian Spices',
    description: 'Fresh, aromatic spices sourced from trusted farms and processed for global culinary brands.',
    image: '/images/Indian-Spices-683x1024.webp',
    link: '/indian-spices',
  },
];

export const HOME_CORE_STRENGTHS = [
  {
    title: 'Quality Product Manufacturing',
    description: 'Our manufacturing process ensures your products meet the highest standards.',
    iconName: 'Factory',
  },
  {
    title: 'Efficient Global Logistics',
    description: 'We manage worldwide supply chains for timely and reliable delivery.',
    iconName: 'Globe',
  },
  {
    title: 'Competitive Pricing Strategies',
    description: 'Offering cost-effective options tailored to your business goals.',
    iconName: 'TrendingUp',
  },
];

export const HOME_JOURNEY_STATS = [
  {
    value: '228',
    title: 'Consignment Done',
    description: '228 export consignments delivered worldwide with reliability and efficiency.',
    icon: '/images/sea-shipment.png',
  },
  {
    value: '63',
    title: 'Happy Buyers',
    description: '63 trusted buyers worldwide building long-term partnerships with us.',
    icon: '/images/deal.png',
  },
  {
    value: '4',
    title: 'Years Experience',
    description: '4 years of trusted experience in global export and international trade.',
    icon: '/images/reputation.png',
  },
];

export const PARTNER_LOGOS = [
  '/images/ChatGPT-Image-Mar-12-2026-05_53_35-PM.webp',
  '/images/QYEvIxI_400x400-removebg-preview-1.png',
  '/images/ChatGPT-Image-Mar-12-2026-05_38_48-PM-2.webp',
  '/images/logo.png',
];

export const COTTON_JUTE_HIGHLIGHTS = [
  {
    stat: '1 M +',
    label: 'Bags Produced Annually',
    description: 'High-volume production capacity delivering consistent quality for wholesale and global buyers.',
  },
  {
    stat: '200+',
    label: 'Custom Design Products',
    description: 'Diverse product collection covering custom shapes, sizes, prints, and branding solutions.',
  },
  {
    stat: '95%',
    label: 'Repeat Orders',
    description: 'Trusted by global businesses for dependable export quality and timely delivery.',
  },
];

export const GEMS_JEWELLERY_HIGHLIGHTS = [
  {
    stat: '1709+',
    label: 'Jewellery Pieces Crafted',
    description: 'Delivering finely designed and high-quality jewellery pieces with expert craftsmanship and attention to detail.',
  },
  {
    stat: '150+',
    label: 'Unique Jewellery Designs',
    description: 'Creating unique and customized jewellery designs tailored to global trends and client requirements.',
  },
  {
    stat: '96%',
    label: 'Repeat Orders',
    description: 'Trusted by international buyers for superior quality, elegant designs, and reliable delivery.',
  },
];

export const INDIAN_SPICES_HIGHLIGHTS = [
  {
    stat: '34+ Tons',
    label: 'Spices Supplied Annually',
    description: 'Delivering high-quality Indian spices in bulk quantities with consistent supply and export standards.',
  },
  {
    stat: '23+',
    label: 'Spice Varieties Offered',
    description: 'Providing a diverse range of authentic spices sourced from trusted farms across India.',
  },
  {
    stat: '92%',
    label: 'Repeat Orders',
    description: 'Trusted by global buyers for purity, rich aroma, and reliable delivery.',
  },
];

export const FOUNDERS: Founder[] = [
  {
    name: 'Jay Tejani',
    role: 'Co-Founder',
    bio: 'Jay brings strategic thinking and a strong business mindset, playing a key role in driving growth and building global connections for PriGlob Exim.',
    image: '/images/jay-tejani.d58b439e22342d1b433c-300x300.webp',
  },
  {
    name: 'Arsh Kukadiya',
    role: 'Co-Founder',
    bio: 'Arsh contributes with operational expertise and a forward-thinking approach, ensuring smooth execution and innovation in every aspect of the business.',
    image: '/images/arsh-kukadiya.bb94d916e19db2daabf9-300x300.webp',
  },
];

export const COMPANY_PILLARS = [
  {
    stat: '100%',
    title: 'Quality Assurance',
    description: 'Ensuring every product meets global standards and client expectations.',
  },
  {
    stat: '9+',
    title: 'Industry Partners',
    description: 'Collaborating with trusted manufacturers and suppliers.',
  },
  {
    stat: '5★',
    title: 'Client Satisfaction',
    description: 'Building long-term relationships through trust and quality service.',
  },
];

export const TEAM_STATISTICS = [
  {
    stat: '19 Members',
    team: 'Manufacturing Team',
    description: 'Skilled artisans and production specialists overseeing cutting-edge manufacturing.',
  },
  {
    stat: '13 Members',
    team: 'Operational Team',
    description: 'Logistics, quality inspection, and documentation experts ensuring timely fulfilment.',
  },
  {
    stat: '4 Members',
    team: 'Trade Support Team',
    description: 'International client support, coordination, and global compliance liaisons.',
  },
];

export const TRADE_EXECUTIVES: TradeExecutive[] = [
  {
    name: 'Sumit Isamaliya',
    role: 'Italy Trade Executive',
    bio: 'Sumit drives global outreach by connecting PriGlob Exim’s products to international markets with smart execution and strong network support.',
    image: '/images/Untitled-design-23-300x300.webp',
  },
  {
    name: 'Smit Moradiya',
    role: 'Germany Trade Executive',
    bio: 'Smit plays a key role in expanding PriGlob Exim’s global presence by building reliable trade connections and ensuring smooth market access.',
    image: '/images/Untitled-design-22-1-300x300.webp',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
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
