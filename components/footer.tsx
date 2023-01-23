import Link from 'next/link';
import React from 'react';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-black">
      <div className="flex flex-col lg:flex-row justify-center items-center section-content relative">
        <div className="flex flex-col items-center max-w-lg py-9 lg:py-0 px-8 z-10">
          <h2 className="text-white font-serif font-bold italic text-center text-3xl md:text-4xl mb-3">
            Join Us
          </h2>
          <p className="text-white font-sans text-md text-left mb-8">
            Please fill out the form. Our representative will reach out to you
            after receiving your application.
          </p>
          <div className="btn btn-white hover:bg-secondary-light">
            <Link href="#">Go Submit Application</Link>
          </div>
        </div>
        <div className="divider  border-b w-52 h-0 lg:border-r lg:w-0  border-slate-50 opacity-20 lg:h-52"></div>
        <div className="flex flex-col items-center max-w-lg py-9 lg:py-0 px-8 z-10">
          <h2 className="text-white font-serif font-bold italic text-center text-3xl md:text-4xl mb-3">
            Support Us
          </h2>
          <p className="text-white font-sans text-md text-left mb-8">
            Your support helps us to continue our mission of making a positive
            impact in our community and the world.
          </p>
          <div className="btn btn-white hover:bg-secondary-light">
            <Link href="#">Donate Now</Link>
          </div>
        </div>
        <img src="/images/curve.svg" alt="wave" className={styles.curve} />
      </div>
    </footer>
  );
}
