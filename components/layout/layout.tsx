import { FC } from 'react';
import { Container } from '@lib/ui';

import Navbar from '@components/navbar';
import Footer from '@components/footer';
import PageTransition from '@components/animations/page-transition';

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
