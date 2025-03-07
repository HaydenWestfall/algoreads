import { Product } from "./product";

export interface FilterState {
  products: Product[];
  onlyInStock: boolean;
  bestSellerOnly: boolean;
  sortBy: "lowtohigh" | "hightolow" | null;
  ratings: "4STARSABOVE" | "3STARSABOVE" | "2STARSABOVE" | "1STARSABOVE" | null;
}

export interface FilterContextProps {
  state: FilterState;
  dispatch: React.Dispatch<any>;
  products: Product[];
  initialProductList: (products: Product[]) => void;
}

export interface FilterAction {
  type: string;
  payload: any;
}
