// components
import Footer from '@components/footer';
import Cursor from '@components/cursor';
import PageTransition from '@components/animations/page-transition';
import { DesktopNavigation, MobileNavigation } from '@components/navbar';

// libraries
import { FC } from 'react';
import { Container } from '@lib/ui';

const Layout: FC = ({ children }) => {
  return (
    <>
      <DesktopNavigation />
      <main>
        <Container className='container' maxW='88%'>
          {children}
        </Container>
      </main>
      <Footer />
      <MobileNavigation />
      <PageTransition />
      <Cursor />
    </>
  );
};

export default Layout;
