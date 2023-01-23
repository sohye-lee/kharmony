import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import styles from '../styles/About.module.css';
import Bar from './bar';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

export default function About() {
  return (
    <div
      className={`section-content w-full flex justify-center ${styles.aboutSection}`}
      id="about"
    >
      <div
        className={`flex flex-col lg:flex-row items-center ${styles.aboutContent}`}
      >
        <div className="order-1 lg:order-2 px-5 max-w-lg lg:max-w-sm flex flex-col items-center lg:items-start mb-5">
          <h2 className="text-white font-serif italic font-bold text-3xl md:text-4xl">
            Who We Are
          </h2>
          <Bar />
          <p className="text-white text-md font-sans mb-3">
            K-Harmony is a Korean children&apos;s choir based in the United
            States. With pride in our Korean culture and heritage, we sing to
            deliever a message of world peace.
          </p>
          <p className="text-white text-md font-sans">
            K-Harmony는 미국 내 한인 어린이와 청소년을 중심으로 활동하는
            합창단입니다. K-Harmony의 단원들은 한국인으로서의 정체성과 자긍심을
            가지고, 세계 평화의 메시지를 한 목소리로 전달하고자 합니다.
          </p>
          <div className="btn btn-white mt-8">
            <Link href="#about" className="hover:text-secondary">
              About Us
            </Link>
            <div className="btn-divider"></div>
            <Link
              href="#support"
              className=" text-primary hover:text-secondary"
            >
              Support Us
            </Link>
          </div>
        </div>
        <div className="order-2 lg:order-1 px-5">
          <div className={styles.photoFrame}>
            <div
              className={` ${styles.photo}`}
              style={{ backgroundImage: 'url(images/gallery_3.jpg)' }}
            >
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/_CA8BI8-jVE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
