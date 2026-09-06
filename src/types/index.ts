export type ActivePage =
  | 'home'
  | 'cotton-jute-tote-bag'
  | 'our-company'
  | 'our-team'
  | 'contact'
  | 'faq';

export interface QuoteRequestData {
  name: string;
  email: string;
  phone?: string;
  productInterest?: string;
  message: string;
}
