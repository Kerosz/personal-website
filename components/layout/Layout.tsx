import { FC } from 'react';

import Navbar from '@components/navbar';
import Footer from '@components/footer';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
