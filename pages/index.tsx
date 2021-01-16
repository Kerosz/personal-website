import Layout from '@components/layout';
import Hero from '@components/hero';
import About from '@components/about';
import Studycase from '@components/studycase';

export default function Home() {
  return (
    <>
      <Hero />
      <Studycase />
      <About />
    </>
  );
}

Home.Layout = Layout;
