// components
import Footer from '@components/footer';
import Cursor from '@components/cursor';
import PageTransition from '@components/animations/preload-transition';
import { DesktopNavigation, MobileNavigation } from '@components/navbar';
// libraries
import { FC } from 'react';
import { Container } from '@lib/ui';
import { INavigation } from '@lib/api';

const MainLayout: FC<{ data: INavigation[] }> = ({ children, data }) => {
  return (
    <>
      <MobileNavigation data={data} />
      <DesktopNavigation data={data} />
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

export default MainLayout;
