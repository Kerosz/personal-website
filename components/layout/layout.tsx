import { FC } from 'react';
import { Container } from '@lib/ui';

import Navbar from '@components/navbar';
import Footer from '@components/footer';
import PageTransition from '@components/animations/page-transition';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <Container maxW='88%'>{children} </Container>
      </main>
      <Footer />
      <PageTransition />
    </>
  );
};

export default Layout;
