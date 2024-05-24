import React from 'react'
import styles from "./index.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import PeopleIcon from '@mui/icons-material/People';
const Testimonials = () => {
    return (
        <section className={styles.testimo}>
            <div className="container">
                <div className={styles.test}>
                    <PeopleIcon style={{fontSize:'50px',color:'white'}}/>
                    <span></span>
                    <h2>Testimonials</h2>
                    <span></span>
                </div>


                <Swiper pagination={true} modules={[Pagination]} className="mySwiper" style={{height:'100%'}}>
                    <SwiperSlide className={styles.slide} style={{ height: '70vh' }}>

                        <div className={styles.test_title}>
                            <h6>Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feu-giat ut. </h6>
                            <p><span>Ted Chapman </span>Client</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={styles.slide} style={{ height: '70vh' }}>

                        <div className={styles.test_title}>
                            <h6>Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feu-giat ut. </h6>
                            <p><span>Ted Chapman </span>Client</p>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide className={styles.slide} style={{ height: '70vh' }}>

                        <div className={styles.test_title}>
                            <h6>Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feu-giat ut. </h6>
                            <p><span>Ted Chapman </span>Client</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials