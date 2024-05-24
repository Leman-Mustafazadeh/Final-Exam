import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { BasketContext } from '../../context/ContextMenu'
import styles from "./index.module.scss"
const BasketPage = () => {
    const {basket,setBasket} = useContext(BasketContext)
    const increase = (demo)=>{
        const target = basket.find((x)=>x._id==demo._id)
        target.count+=1
        target.totalPrice= target.count*target.price
        setBasket([...basket])
    localStorage.setItem("basket",JSON.stringify([...basket]))
    }
    const decrease = (demo)=>{
        const target = basket.find((x)=>x._id==demo._id)
        if(target.count>0){
            target.count-=1
            target.totalPrice= target.count*target.price
            setBasket([...basket])
        localStorage.setItem("basket",JSON.stringify([...basket]))
        }
    }
  return (
    <>
<Helmet>
    <meta charSet="utf-8" />
    <title>Basket Page</title>
    <link rel="canonical" href="http://mysite.com/example" />
</Helmet>
    <div className={styles.wish}>
        {
            basket.map((item)=>{
                return(
                    <div className={styles.wish_head}>
                        <h5>{item.name}</h5>
                        <p>{item.title}</p>
                        <h6>Price:{item.number}</h6>
                        <button onClick={()=>increase(item)}>+</button>
                        <button onClick={()=>decrease(item)}>-</button>
                    </div>
                )
            })
        }
    </div>
</>
  )
}

export default BasketPage