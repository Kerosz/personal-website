// components
import Head from '@components/head';
import GlobalContextProvider from '../context/root-context';
import Theme from '../theme';
// libraries
import { FC } from 'react';
import { AppProps } from 'next/app';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <GlobalContextProvider>
        <Theme>
          <AnimatePresence exitBeforeEnter>
            <AnimateSharedLayout>
              <Component {...pageProps} />
            </AnimateSharedLayout>
          </AnimatePresence>
        </Theme>
      </GlobalContextProvider>
    </>
  );
}
