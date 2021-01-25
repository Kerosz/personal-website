// components
import Footer from '@components/footer';
import Cursor from '@components/cursor';
import { DesktopNavigation } from '@components/navbar';
// libraries
import { FC } from 'react';

const StudycaseLayout: FC = ({ children }) => {
  return (
    <>
      <DesktopNavigation />
      <main>{children}</main>
      <Footer />
      <Cursor />
    </>
  );
};

export default StudycaseLayout;
