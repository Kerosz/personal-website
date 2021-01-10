import Layout from '@components/layout';
import Hero from '@components/hero';
import About from '@components/about';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}

Home.Layout = Layout;
