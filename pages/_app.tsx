import { FC } from 'react';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
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
          <AnimatePresence exitBeforeEnter>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AnimatePresence>
        </Theme>
      </GlobalContextProvider>
    </>
  );
}
