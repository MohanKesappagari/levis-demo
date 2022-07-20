export interface IMAGE {
  id: string;
  name: string;
  amount?: number | string;
  upc?: string;
  url: string;
  size?: string;
}

export interface PRODUCT {
  name: string;
  child: IMAGE[];
}

export interface GQL_PRODUCT {
  id: string;
  title: string;
  gender: string;
  price: string;
  image_url: string;
  up_sell: string[];
  social_data: string[];
  cross_sell: string[];
}
