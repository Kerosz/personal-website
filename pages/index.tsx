import Hero from '@components/hero';
import About from '@components/about';
import Showcase from '@components/showcase';
import Contact from '@components/contact';
import { Layout } from '@components/layout';

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <About />
      <Contact />
    </>
  );
}

Home.Layout = Layout;
