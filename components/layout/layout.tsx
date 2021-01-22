import Footer from '@components/footer';
import PageTransition from '@components/animations/page-transition';
import { FC } from 'react';
import { DesktopNavigation, MobileNavigation } from '@components/navbar';
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
    </>
  );
};

export default Layout;
