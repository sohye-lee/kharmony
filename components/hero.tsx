import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.hero}>
        <h1 className="font-serif italic text-4xl md:text-5xl font-bold text-white text-center mb-4">
          we sing for
          <br className="md:hidden" />{' '}
          <span className="text-primary">peace</span> together
        </h1>
        <p className="font-sans text-md md:text-lg text-white text-center">
          K-Harmony is Korean & American <br />
          chirdren’s chorus team based in DMV area
        </p>
        <div className="btn btn-white mt-8">
          <Link href="#about" className="hover:text-secondary">
            About Us
          </Link>
          <div className="btn-divider"></div>
          <Link href="#about" className=" text-primary hover:text-secondary">
            Apply & Join
          </Link>
        </div>
      </div>
      <img src="/images/curve.svg" alt="wave" className={styles.curve} />
    </section>
  );
}
