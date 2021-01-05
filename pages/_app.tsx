import { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from '@components/head';
import GlobalContextProvider from '../context/rootContext';
import Theme from '../theme';

const Fragment: FC = ({ children }) => <>{children}</>;

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Fragment;

  return (
    <>
      <Head />
      <GlobalContextProvider>
        <Theme>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Theme>
      </GlobalContextProvider>
    </>
  );
}
