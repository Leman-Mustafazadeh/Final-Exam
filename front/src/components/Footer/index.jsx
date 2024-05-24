import React from 'react'
import styles from "./index.module.scss"
import RamenDiningIcon from '@mui/icons-material/RamenDining';
const Footer = () => {
  return (
  <footer>
 <div className="container">
  <div className={styles.contactpage}>
  <RamenDiningIcon style={{fontSize:'50px',color:'RGB(138, 138, 138)'}}/>
        <h3>Contact us</h3>
        <div className={styles.cont_inp}>
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email' />
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
        <button>Send Message</button>
      </div>
  </div>
      
  </footer>
  )
}

export default Footer