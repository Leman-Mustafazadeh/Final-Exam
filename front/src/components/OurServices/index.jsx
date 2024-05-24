import React from 'react'
import styles from "./index.module.scss"
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import SetMealIcon from '@mui/icons-material/SetMeal';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
const OurServices = () => {
  return (
    <section>
    <div className="container">
<div className={styles.welcome}>
   <div className={styles.welcome_head}>
   <OutdoorGrillIcon style={{fontSize:'70px',color:'RGB(138, 138, 138)'}}/>
   <span></span>
    <h3>Our Services</h3>
    <span></span>
   </div>


   <div className={styles.welcome_title}>
    <div className={styles.welcome_wrap}>
    <BrunchDiningIcon style={{color:'RGB(196, 152, 18)',fontSize:'50px'}}/>
        <h6>Breakfast</h6>
        <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.</p>
    </div>
    <div className={styles.welcome_wrap} >
    <FreeBreakfastIcon style={{color:'RGB(196, 152, 18)',fontSize:'50px'}}/>
        <h6>Brunch</h6>
       <p>Scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis.</p>
    </div>
    <div className={styles.welcome_wrap}>
    <LunchDiningIcon style={{color:'RGB(196, 152, 18)',fontSize:'50px'}}/>
        <h6>Lunch</h6>
      <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.</p>
    </div>

    <div className={styles.welcome_wrap}>
    <SetMealIcon style={{color:'RGB(196, 152, 18)',fontSize:'50px'}}/>
        <h6>Dinner</h6>
      <p>Aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendreri.</p>
    </div>
   </div>
   
   <div className={styles.img_head}></div>
</div>
    </div>
</section>
  )
}

export default OurServices