// components
import Footer from '@components/footer';
import Cursor from '@components/cursor';
import PageTransition from '@components/animations/preload-transition';
import { DesktopNavigation, MobileNavigation } from '@components/navbar';
// libraries
import { FC } from 'react';
import { Container } from '@lib/ui';

const Layout: FC = ({ children }) => {
  return (
    <>
      <MobileNavigation />
      <DesktopNavigation />
      <main>
        <Container className='container' maxW='88%'>
          {children}
        </Container>
      </main>
      <Footer />
      <PageTransition />
      <Cursor />
    </>
  );
};

export default Layout;
