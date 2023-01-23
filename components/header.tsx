import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './styles/Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerDark, setHeaderDark] = useState(false);

  const changeHeader = () => {
    if (window.scrollY > 100) {
      setHeaderDark(true);
    } else {
      setHeaderDark(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeHeader);
  }, []);

  return (
    <header
      id="header"
      className={`${isOpen ? 'bg-black h-full' : ''} ${
        headerDark ? 'bg-black' : ''
      }`}
    >
      <div
        className={`px-8 w-screen flex items-center justify-between bg-transparent `}
      >
        <Link href="/" className="py-2 logo" id="logo">
          <img src="/logo/logo-white.svg" alt="logo" />
        </Link>
        <div className="hidden md:flex items-center justify-center space-x-5">
          <Link
            href="#about"
            className="text-white text-md font-sans hover:text-blue-300"
          >
            Our Story
          </Link>
          <Link
            href="#"
            className="text-white text-md font-sans hover:text-blue-300"
          >
            Apply
          </Link>
          <Link
            href="#notice"
            className="text-white text-md font-sans hover:text-blue-300"
          >
            Notice
          </Link>
          <Link
            href="#gallery"
            className="text-white text-md font-sans hover:text-blue-300"
          >
            Gallery
          </Link>
          <Link
            href="#join"
            className="text-white text-md font-sans hover:text-blue-300"
          >
            Support
          </Link>
          <Link
            href="#contact"
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
        <div className="md:hidden">
          <button
            type="button"
            className="block"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image
              src="icons/music-note.svg"
              alt="burger"
              width="24"
              height="24"
            />
          </button>
        </div>
      </div>
      <div
        className={`flex flex-col items-center py-5 px-3 ${
          isOpen ? 'block border-t' : 'hidden'
        }`}
      >
        <Link
          href="#"
          className="w-full text-white text-center p-3 hover:bg-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          Our Story
        </Link>
        <Link
          href="#"
          className="w-full text-white text-center p-3 hover:bg-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          Apply
        </Link>
        <Link
          href="#"
          className="w-full text-white text-center p-3 hover:bg-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          Notice
        </Link>
        <Link
          href="#"
          className="w-full text-white text-center p-3 hover:bg-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          Gallery
        </Link>
        <Link
          href="#"
          className="w-full text-white text-center p-3 hover:bg-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          Support
        </Link>
        <Link
          href="#"
          className="w-full text-white text-center p-3 hover:bg-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          Reach Us
        </Link>
      </div>
    </header>
  );
}
