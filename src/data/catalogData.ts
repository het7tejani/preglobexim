import allProductsData from './allProducts.json';

export interface Product {
  title: string;
  image: string;
  category: string;
  description?: string;
}

export interface ProductCategory {
  name: string;
  products: Product[];
}

export const COTTON_JUTE_CATEGORIES: ProductCategory[] = allProductsData.cj;
export const GEMS_JEWELLERY_CATEGORIES: ProductCategory[] = allProductsData.gj;
export const INDIAN_SPICES_CATEGORIES: ProductCategory[] = allProductsData.is;
