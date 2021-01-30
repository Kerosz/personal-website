// components
import Studycase from '@components/studycase';
import { StudycaseLayout } from '@components/layout';
// libraries
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { getAllStudycasesWithSlug, getStudycaseBySlug } from '@lib/api';
import { Container } from '@lib/ui';

export default function StudycasePage({
  studycase,
  navigation,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (!router.isFallback && !studycase?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <StudycaseLayout data={navigation}>
      {router.isFallback ? (
        <Container maxW='87.5%'>
          <div>Loading...</div>
        </Container>
      ) : (
        <Studycase data={studycase} />
      )}
    </StudycaseLayout>
  );
}

export async function getStaticPaths() {
  const allStudycases = await getAllStudycasesWithSlug();

  return {
    paths: allStudycases?.map(({ slug }) => `/studycase/${slug}`) || [],
    fallback: true,
  };
}

export async function getStaticProps({
  params,
  preview = false,
}: GetStaticPropsContext) {
  const studycase = await getStudycaseBySlug(params?.studycase, preview);
  const navigation = [
    {
      _id: studycase._id,
      path: '/',
      label: 'Home',
      target: false,
    },
    {
      _id: studycase._id,
      path: studycase.live,
      label: '01 - Live Website',
      target: true,
    },
    {
      _id: studycase._id,
      path: studycase.livePreview || null,
      label: '02 - Live Website',
      target: true,
    },
    {
      _id: studycase._id,
      path: studycase.source || null,
      label: 'Source code',
      target: true,
    },
  ];

  return {
    props: { studycase, navigation },
  };
}
