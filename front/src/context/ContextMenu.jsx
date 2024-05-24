import React, { createContext, useEffect, useState } from 'react'
import {getAll} from "../API/index.js"
export const MenuProvider = createContext("")
export const WishlistContext = createContext("")

export const BasketContext = createContext("")
const ContextMenu = ({children}) => {
    const [menu,setMenu] = useState([])
    const localW = JSON.parse(localStorage.getItem("wishlist") )
    const [wishlist,setWishlist] = useState(localW?localW : [])
    const localB = JSON.parse(localStorage.getItem("basket") )
    const [basket,setBasket] = useState(localB?localB : [])
    useEffect(()=>{
        getAll().then((res)=>{
            setMenu(res.data.data)
        })
    },[])
  return (
    <>
    <BasketContext.Provider value={{basket,setBasket}}>
    <WishlistContext.Provider value={{wishlist,setWishlist}}>
    <MenuProvider.Provider value={{menu,setMenu}}>
        {children}
    </MenuProvider.Provider>
    </WishlistContext.Provider>
    </BasketContext.Provider>
  
    </>
  )
}

export default ContextMenu