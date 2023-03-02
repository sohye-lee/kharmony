import React, { useEffect, useState } from 'react';
import { TbArrowNarrowUp } from 'react-icons/tb';

const scrollToTop = () => scrollTo({ top: 0, behavior: 'smooth' });

export default function ScrollToTop() {
  const [display, setDisplay] = useState('hidden');

  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 200) {
        setDisplay('block');
        console.log(window.scrollY);
      } else {
        setDisplay('hidden');
        console.log(window.scrollY);
      }
    });
  }, []);

  return (
    <div
      id="scrollToTop"
      className={`${display} opacity-80 fixed bottom-3 right-3 w-10 h-10 rounded-full bg-secondary z-50 flex items-center justify-center cursor-pointer`}
      onClick={scrollToTop}
    >
      <TbArrowNarrowUp size={24} color="white" />
    </div>
  );
}
