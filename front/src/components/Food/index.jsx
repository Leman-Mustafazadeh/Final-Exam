import React from 'react'
import styles from "./index.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./menu-bg.jpg"
import "./slider-1.jpg"
import { Pagination } from 'swiper/modules';
const Food = () => {
  return (
    <section className={styles.foods}>

      <div className={styles.food}>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className={styles.swiper} style={{ height: '80vh' }}>
            <div className={styles.box}>
              <h1>Food and more.</h1>
              <p>By Chef Francis Smith</p>
            </div>
          </SwiperSlide >

          <SwiperSlide className={styles.swiper_w} style={{ height: '80vh' }}>
            <div className={styles.box}>
            <h1>Special Dish.</h1>
            <p>By Chef Francis Smith</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.swiper_t} style={{ height: '80vh' }}>
         
         <div className={styles.box}>
         <h1>Hygienic Food</h1>
            <p>By Chef Francis Smith</p>
         </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </section>
  )
}

export default Food