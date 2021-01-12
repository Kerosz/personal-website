import { FC } from 'react';

import Navbar from '@components/navbar';
import Footer from '@components/footer';
import PageTransition from '@components/animations/page-transition';

import { Container } from '@lib/ui';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxW='90%'>
        <main>{children}</main>
        <Footer />
      </Container>
      <PageTransition />
    </>
  );
};

export default Layout;
