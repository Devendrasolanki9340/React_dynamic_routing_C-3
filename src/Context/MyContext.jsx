import { createContext,useState } from "react";
// import { useState } from "react";


export const MyStore = createContext()

export const ContextProvider =({children})=>{
        const [productsData, setProductsData] = useState([])
        const [cartItems, setCartItems] = useState([])


    return  <MyStore.Provider value={{productsData,setProductsData,cartItems,setCartItems}}>


        {children}
    </MyStore.Provider>
}