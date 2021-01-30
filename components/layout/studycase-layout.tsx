// components
import Footer from '@components/footer';
import Cursor from '@components/cursor';
import { DesktopNavigation, MobileNavigation } from '@components/navbar';
// libraries
import { FC } from 'react';
import { INavigation } from '@lib/api';

const StudycaseLayout: FC<{ data: INavigation[] }> = ({ children, data }) => {
  return (
    <>
      <MobileNavigation data={data} />
      <DesktopNavigation data={data} />
      <main>{children}</main>
      <Footer />
      <Cursor />
    </>
  );
};

export default StudycaseLayout;
