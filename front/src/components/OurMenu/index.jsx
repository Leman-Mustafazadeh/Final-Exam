import React, { useContext, useEffect, useState } from 'react'
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import styles from "./index.module.scss"
import { BasketContext, MenuProvider, WishlistContext } from '../../context/ContextMenu';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2"
import { deleteOne } from '../../API';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
const OurMenu = () => {
  const { menu, setMenu } = useContext(MenuProvider)
  const {wishlist,setWishlist} = useContext(WishlistContext)
  const {basket,setBasket} = useContext(BasketContext)

  console.log(menu);
  const [filter, setFilter] = useState(menu)
  const handleSubmit = (inpValue) => {
    const search = menu.filter((x) => x.name.toLowerCase().trim().includes(inpValue.toLowerCase().trim()))
    setFilter(search)
  }
  useEffect(() => {
    setFilter(menu)
  }, [menu])

  const sortByPrice = (value) => {
    const sorted = [...filter]
    if (value == 'a') {
      sorted.sort((a, z) => a.number - z.number)
    } else if (value == 'z') {
      sorted.sort((a, z) => z.number - a.number)
    }
    setFilter(sorted)
  }
const handleWish=(text)=>{
  const target = wishlist.find((x)=>x._id==text._id)
  if(target){
    const filtered = wishlist.filter((x)=>x._id!==target._id)
    setWishlist(filtered)
    localStorage.setItem("wishlist",JSON.stringify(filtered))
  }else{
    setWishlist([...wishlist,text])
    localStorage.setItem("wishlist",JSON.stringify([...wishlist,text]))
  }
}

const handleBasket = (demo)=>{
  const target = basket.find((x)=>x._id==demo._id)
  if(target){
    target.count+=1
    target.totalPrice= target.count*target.price
    setBasket([...basket])
localStorage.setItem("basket",JSON.stringify([...basket]))
  }else{
    const newItem = {
      count:1,
      totalPrice:demo.price,
      ...demo
    }
    setBasket([...basket,newItem])
    localStorage.setItem("basket",JSON.stringify([...basket,newItem]))
    
  }
}


  const handleDelete = (id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOne(id)
        const del = menu.filter((x)=>x._id!==id)
        setMenu(del)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  return (
    <section className={styles.menu}>
      <div className="container">
        <div className={styles.menu_title}>
          <div className={styles.menu_head}>
            <OutdoorGrillIcon style={{ fontSize: '70px', color: 'RGB(138, 138, 138)' }} />
            <span></span>
            <h3>Our Menu</h3>
            <span></span>
          </div>

          <div >
            <div className={styles.menu_wrap}>
              <a href=''>Breakfast</a>
              <a href=''>Brunch</a>
              <a href=''>Lunch</a>
              <a href=''>Dinner</a>

              <input type="text" placeholder='Search ...' onChange={(e) => handleSubmit(e.target.value)} />
              <select name="" id="" onChange={(e) => sortByPrice(e.target.value)}>
                <option value="a">Min Price</option>
                <option value="z">Max Price</option>

              </select>
            </div>

            <div className={styles.menu_demos}>
              {
                filter.map((item) => {
                  return (
                    <div className={styles.menu_map}>
                      <div className={styles.menu_demo}>
                        <h6>{item.name}</h6>
                        <button onClick={()=>handleWish(item)}>{wishlist.find((x)=>x._id==item._id) ? <FavoriteIcon/>:<FavoriteBorderIcon/>}</button>
                        <div className={styles.menu_flex}>
                          <p>{item.title}</p>
                          <span>..........................................................................</span>
                          <h5>${item.number}</h5>

                        </div >
                        <button onClick={()=>handleBasket(item)}>Basket</button>
                        <button onClick={()=>handleDelete(item._id)}>Delete</button>
                        <button><Link  style={{textDecoration:'none'}} to={"/detailmenu/"+item._id}>Detail</Link></button>

                      </div>
                      
                    
                      <div className={styles.menu_demo}>
                        <h6>{item.name}</h6>
                        <button onClick={()=>handleWish(item)}>{wishlist.find((x)=>x._id==item._id) ? <FavoriteIcon/>:<FavoriteBorderIcon/>}</button>
                        <div className={styles.menu_flex}>
                          <p>{item.title}</p>
                          <span>..........................................................................</span>
                          <h5>${item.number}</h5>

                        </div >
                        <button onClick={()=>handleDelete(item._id)}>Delete</button>
                        <button><Link  style={{textDecoration:'none'}} to={"/detailmenu/"+item._id}>Detail</Link></button>

                      </div>
                    </div>
                  )

                })
              }
            </div>

            <button className={styles.see}>See More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurMenu