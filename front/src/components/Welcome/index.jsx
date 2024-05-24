import React from 'react'
import styles from "./index.module.scss"
import BalconyIcon from '@mui/icons-material/Balcony';
const Welcome = () => {
  return (
    <section>
        <div className="container">
    <div className={styles.welcome}>
    <BalconyIcon style={{fontSize:'50px'}}/>
       <div className={styles.welcome_head}>
       <span></span>
        <h3>Welcome</h3>
        <span></span>
       </div>


       <div className={styles.welcome_title}>
        <div className={styles.welcome_wrap}>
            <h6>2002</h6>
            <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
        </div>
        <div className={styles.welcome_wrap}>
            <h6>2010</h6>
            <p>Stpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium.</p>
        </div>
        <div className={styles.welcome_wrap}>
            <h6>2018</h6>
            <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
        </div>
       </div>
       
       <div className={styles.img_head}></div>
    </div>
        </div>
    </section>
  )
}

export default Welcome