// components
import Head from '@components/head';
import GlobalContextProvider from '../context/root-context';
import Theme from '../theme';
// libraries
import { FC } from 'react';
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

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
