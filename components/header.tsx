import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from './styles/Header.module.css';

export default function Header() {
  return (
    <div
      id="header"
      className="px-8 w-screen flex items-center justify-between bg-transparent fixed z-100"
    >
      <Link href="/" className="py-2">
        <Image src="/logo/logo-white.svg" alt="logo" height="70" width="120" />
      </Link>
      <div className="flex items-center justify-center space-x-5">
        <Link
          href="#about"
          className="text-white text-md font-sans hover:text-blue-300"
        >
          Our Story
        </Link>
        <Link
          href="#about"
          className="text-white text-md font-sans hover:text-blue-300"
        >
          Apply
        </Link>
        <Link
          href="#about"
          className="text-white text-md font-sans hover:text-blue-300"
        >
          Notice
        </Link>
        <Link
          href="#about"
          className="text-white text-md font-sans hover:text-blue-300"
        >
          Gallery
        </Link>
        <Link
          href="#about"
          className="text-white text-md font-sans hover:text-blue-300"
        >
          Support
        </Link>
        <Link
          href="#about"
          className="text-white text-md font-sans hover:text-blue-300"
        >
          Reach Us
        </Link>
      </div>
      <div className="flex items-center justify-end space-x-4">
        <Link href="youtube.com">
          <Image
            src="/icons/youtube.svg"
            width="20"
            height="20"
            alt="youtube"
            className="hover:opacity-70"
          />
        </Link>
        <Link href="facebook.com">
          <Image
            src="/icons/facebook.svg"
            width="20"
            height="20"
            alt="facebook"
            className="hover:opacity-70"
          />
        </Link>
        <Link href="instagram.com">
          <Image
            src="/icons/instagram.svg"
            width="20"
            height="20"
            alt="instagram"
            className="hover:opacity-70"
          />
        </Link>
      </div>
    </div>
  );
}
