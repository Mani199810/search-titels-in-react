import React, { createContext } from "react";
import useCategoryApi from "./Api/CategoryApi";
import ProductApi from "./Api/ProductApi";

 export const ProductContext=createContext();
export default function ProductProvider(props){
    const data={
      categoryApi:useCategoryApi(),
      productApi:ProductApi()
    
    }

    return(
        <ProductContext.Provider value={data}>
            {props.children}
        </ProductContext.Provider>
    )
}