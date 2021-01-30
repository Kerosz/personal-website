// components
import Hero from '@components/hero';
import About from '@components/about';
import Showcase from '@components/showcase';
import Contact from '@components/contact';
import { Layout } from '@components/layout';
// libraries
import { InferGetStaticPropsType } from 'next';
import { getAllDataForHome } from '@lib/api';

export default function Home({
  studycase,
  bio,
  hero,
  contact,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Hero data={hero} />
      <Showcase data={studycase} />
      <About data={bio} />
      <Contact data={contact} />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const data = await getAllDataForHome(preview);

  if (!data) {
    return { notFound: true };
  }

  return {
    props: { ...data },
  };
}

Home.Layout = Layout;
