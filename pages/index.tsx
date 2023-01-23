import About from '@/components/about';
import Events from '@/components/events';
import Footer from '@/components/footer';
import Gallery from '@/components/gallery';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Notice from '@/components/notice';

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Events />
      <About />
      <Notice />
      <Gallery />
      <Footer />
    </div>
  );
}
