import { createContext, useContext, useReducer } from "react";

export const ProductFilterContext = createContext();

export const ProductFilterProvider = ({children,reducer,initialState}) => {
   return <ProductFilterContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </ProductFilterContext.Provider>
};

export const useProductFilterContext = ()=>useContext(ProductFilterContext);