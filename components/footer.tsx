import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-black">
      <div
        className="flex flex-col lg:flex-row justify-center items-center section-content relative"
        id="join"
      >
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
      <div
        className="section-content w-full flex flex-col items-center"
        id="contact"
      >
        <Link href="/">
          <Image
            src="/logo/logo-white.svg"
            width={160}
            height={100}
            alt="logo"
          />
        </Link>
        <div className=" mt-9">
          <div className="mb-4">
            <p className="font-sans text-sm text-gray-400 font-light">E-Mail</p>
            <Link
              href="mailto:info@k-harmony.org"
              className="font-serif font-bold italic text-primary text-lg"
            >
              info@k-harmony.org
            </Link>
          </div>
          <div className="mb-4">
            <p className="font-sans text-sm text-gray-400 font-light">Phone</p>
            <Link
              href="tel:+17031234567"
              className="font-serif font-bold italic text-primary text-lg"
            >
              +1 703 123 4567
            </Link>
          </div>
          <div className="mb-4">
            <p className="font-sans text-sm text-gray-400 font-light">
              Address
            </p>
            <Link
              href="#"
              className="font-serif font-bold italic text-primary text-lg"
            >
              1234 Main St. Fairfax, VA 22031
            </Link>
          </div>
          <div className="mb-4">
            <p className="font-sans text-sm text-gray-400 font-light">
              Social Links
            </p>
            <div className="flex items-center">
              <Link
                href="#"
                target="_blank"
                className="font-serif font-bold italic text-primary text-lg"
              >
                Facebook
              </Link>
              <span className="text-gray-500 text-lg mx-2">|</span>
              <Link
                href="#"
                target="_blank"
                className="font-serif font-bold italic text-primary text-lg"
              >
                Instagram
              </Link>
              <span className="text-gray-500 text-lg mx-2">|</span>
              <Link
                href="https://www.youtube.com/@k-harmonywashingtond.cchil3863"
                target="_blank"
                className="font-serif font-bold italic text-primary text-lg"
              >
                Youtube
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-slate-500 py-3 text-gray-400 text-center text-sm">
        © 2023 K-Harmony. All Rights Reserved
        <br />
        Designed and developed by{' '}
        <Link href="https://sohye.dev" target="_blank" className="underline">
          Sohye
        </Link>
        .
      </div>
    </footer>
  );
}
