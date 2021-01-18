import Layout from '@components/layout';
import Hero from '@components/hero';
import About from '@components/about';
import Studycase from '@components/studycase';
import Contact from '@components/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Studycase />
      <About />
      <Contact />
    </>
  );
}

Home.Layout = Layout;
