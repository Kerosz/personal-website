import { FC } from 'react';
import Link from 'next/link';
import ThemeSwitcher from './theme-switcher';
import Branding from './branding';

import { AppBar, Text, BurgerMenu } from './navbar.styles';

import { Container, Flex } from '@lib/ui';

const Navbar: FC = () => {
  return (
    <Container maxW='95%'>
      <AppBar component='header' justify='space-between'>
        <Flex align='center'>
          <ThemeSwitcher>
            <Branding />
          </ThemeSwitcher>
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
      </AppBar>
    </Container>
  );
};

export default Navbar;
