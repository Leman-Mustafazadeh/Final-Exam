import React, { useContext } from 'react'
import { WishlistContext } from '../../context/ContextMenu'
import styles from "./index.module.scss"
import {Helmet} from "react-helmet";
const WishlistPage = () => {
    const {wishlist,setWishlist} = useContext(WishlistContext)
  return (
<>
<Helmet>
    <meta charSet="utf-8" />
    <title>Wishlist Page</title>
    <link rel="canonical" href="http://mysite.com/example" />
</Helmet>
    <div className={styles.wish}>
        {
            wishlist.map((item)=>{
                return(
                    <div className={styles.wish_head}>
                        <h5>{item.name}</h5>
                        <p>{item.title}</p>
                        <h6>Price:{item.number}</h6>
                        <button onClick={()=>handleDelete(item)}>delete</button>
                    </div>
                )
            })
        }
    </div>
</>
  )
}

export default WishlistPage