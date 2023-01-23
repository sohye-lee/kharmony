import Events from '@/components/events';
import Footer from '@/components/footer';
import Gallery from '@/components/gallery';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Notice from '@/components/notice';
import { useState } from 'react';

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Events />
      <Gallery />
      <Notice />
      <Footer />
    </div>
  );
}
