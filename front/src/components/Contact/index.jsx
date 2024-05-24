import React from 'react'
import styles from "./index.module.scss"
const Contact = () => {
  return (
    <section className={styles.contactpage}>
      <div className="container">
        <RamenDiningIcon style={{fontSize:'50px',color:'RGB(138, 138, 138)'}}/>
        <h3>Contact us</h3>
        <div className={styles.cont_inp}>
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email' />
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
        <button>Send Message</button>
      </div>
    </section>
  )
}

export default Contact