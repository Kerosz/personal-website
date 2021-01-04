import { FC, ReactNode } from 'react';

import Navbar from '@components/navbar';
import Footer from '@components/footer';
import Head from '@components/head';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
