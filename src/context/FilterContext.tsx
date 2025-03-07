import { createContext, ReactNode, useContext, useReducer } from "react";
import { Product } from "../models/product";
import { FilterContextProps, FilterState } from "../models/filter";
import { filterReducers } from "../reducers/filterReducers";

const filterInitialState: FilterState = {
  products: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  ratings: null,
};

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [state, dispatch] = useReducer(filterReducers, filterInitialState);

  function initialProductList(products: Product[]) {
    dispatch({
      type: "PRODUCT_LIST",
      payload: {
        products,
      },
    });
  }

  function bestSeller(products: Product[]): Product[] {
    return state.bestSellerOnly ? products.filter((product) => product.best_seller === true) : products;
  }

  function inStock(products: Product[]): Product[] {
    return state.onlyInStock ? products.filter((product) => product.in_stock === true) : products;
  }

  function sort(products: Product[]): Product[] {
    if (state.sortBy === "lowtohigh") {
      return products.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (state.sortBy === "hightolow") {
      return products.sort((a, b) => Number(b.price) - Number(a.price));
    } else {
      return products;
    }
  }

  function rating(products: Product[]): Product[] {
    if (state.ratings === "4STARSABOVE") {
      return products.filter((product) => product.rating >= 4);
    } else if (state.ratings === "3STARSABOVE") {
      return products.filter((product) => product.rating >= 3);
    } else if (state.ratings === "2STARSABOVE") {
      return products.filter((product) => product.rating >= 2);
    } else if (state.ratings === "1STARSABOVE") {
      return products.filter((product) => product.rating >= 1);
    } else {
      return products;
    }
  }

  const filteredProductList = rating(sort(inStock(bestSeller(state.products))));

  const value = {
    state,
    dispatch,
    products: filteredProductList,
    initialProductList,
  };

  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
};

export const useFilter = (): FilterContextProps => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
