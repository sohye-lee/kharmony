import Image from 'next/image';
import React from 'react';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section id="hero-container" className={styles.hero}>
      <div className={styles.hero}>
        <h1 className="font-serif italic text-5xl font-bold text-white mb-4">
          we sing for <span className="text-primary">peace</span> together
        </h1>
        <p className="font-sans text-lg text-white text-center">
        K-Harmony is Korean & American <br/>
chirdren’s chorus team based in DMV area
        </p>
      </div>
      <img src="/images/curve.svg" alt="wave" className={styles.curve} />
    </section>
  );
}
