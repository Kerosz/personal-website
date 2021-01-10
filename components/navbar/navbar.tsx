import { FC, useState } from 'react';
import Link from 'next/link';
import ThemeSwitcher from './theme-switcher';

import { AppBar, Text, BurgerMenu } from './navbar.styles';

import { Container, Flex } from '@lib/ui';

const Navbar: FC = () => {
  return (
    <AppBar component='header'>
      <Container maxW='96%'>
        <Flex justify='space-between' align='center'>
          <Flex align='center' grow='1'>
            <ThemeSwitcher />
            <Link href='/'>
              <Text>
                an<span>dr</span>ei c<span>h</span>i<span>r</span>ila
              </Text>
            </Link>
          </Flex>
          <BurgerMenu>
            <span />
            <span />
          </BurgerMenu>
        </Flex>
      </Container>
    </AppBar>
  );
};

export default Navbar;
