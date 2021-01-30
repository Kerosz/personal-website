// components
import Hero from '@components/hero';
import About from '@components/about';
import Showcase from '@components/showcase';
import Contact from '@components/contact';
import { MainLayout } from '@components/layout';
// libraries
import { InferGetStaticPropsType } from 'next';
import { getAllDataForHome, getNavigationData } from '@lib/api';

export default function Home({
  studycase,
  bio,
  hero,
  contact,
  navigation,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MainLayout data={navigation}>
      <Hero data={hero} />
      <Showcase data={studycase} />
      <About data={bio} />
      <Contact data={contact} />
    </MainLayout>
  );
}

export async function getStaticProps({ preview = false }) {
  const data = await getAllDataForHome(preview);
  const navigation = await getNavigationData();

  if (!data) {
    return { notFound: true };
  }

  return {
    props: { ...data, navigation },
  };
}
