import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import styles from '../styles/Gallery.module.css';
import Bar from './bar';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Gallery() {
  return (
    <div className={`section-content ${styles.gallerySection}`}>
      <h2 className="text-white font-serif italic font-bold text-3xl md:text-4xl">
        Our Precious Moments
      </h2>
      <Bar />
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className={styles.photoFrame}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={true}
        >
          <SwiperSlide className="pb-5">
            <div
              className={` ${styles.photo}`}
              style={{ backgroundImage: 'url(images/gallery_1.jpg)' }}
            ></div>
            <p className="text-md mt-3 text-white text-center font-sans">
              Rehearsal, 10/19/2022
            </p>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <div
              className={`${styles.photo}`}
              style={{ backgroundImage: 'url(images/gallery_2.jpg)' }}
            ></div>
            <p className="text-md mt-3 text-white text-center font-sans">
              Rehearsal, 10/19/2022
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${styles.photo}`}
              style={{ backgroundImage: 'url(images/gallery_3.jpg)' }}
            ></div>
            <p className="text-md mt-3 text-white text-center font-sans">
              Rehearsal, 10/19/2022
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${styles.photo}`}
              style={{ backgroundImage: 'url(images/gallery_3.jpg)' }}
            ></div>
            <p className="text-md mt-3 text-white text-center font-sans">
              Rehearsal, 10/19/2022
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
