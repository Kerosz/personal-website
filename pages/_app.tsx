// components
import Head from '@components/head';
import GlobalContextProvider from '../context/root-context';
import Theme from '../theme';
// libraries
import { AppProps } from 'next/app';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
// hooks
import useRouterScroll from '@hooks/use-router-scroll';

export default function MyApp({ Component, pageProps }: AppProps) {
  useRouterScroll();

  return (
    <>
      <Head />
      <GlobalContextProvider>
        <Theme>
          <AnimatePresence exitBeforeEnter>
            <AnimateSharedLayout type='switch'>
              <Component {...pageProps} />
            </AnimateSharedLayout>
          </AnimatePresence>
        </Theme>
      </GlobalContextProvider>
    </>
  );
}
