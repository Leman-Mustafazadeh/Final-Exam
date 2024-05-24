import React from 'react'
import styles from "./index.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
const Header = () => {
  return (
    <header>
        
            <div className={styles.head}>
                <h3>Pulse <span>.</span></h3>

                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="">About us</a></li>
                    <li><a href="">Restaurant </a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href=""><Link to={"/wishlistpage"}>Wishlist</Link></a></li>
                    <li><a href=""><Link to={"/addpage"}>Add Page</Link></a></li>
                </ul>

                <div className={styles.right}>
                    <h4>Reservations</h4>
                    <p><i class="fa-solid fa-phone"></i> 652-345 3222 11</p>
                </div>
                <div className={styles.tab}>
                  <FormatAlignJustifyIcon/>
                </div>
            </div>
    
    </header>
  )
}

export default Header