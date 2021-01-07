import { FC } from 'react';
import { Flex, Container } from '@lib/ui';
import ThemeSwitcher from './theme-swithcer';

const Navbar: FC = () => {
  return (
    <Container fluid>
      <Flex justify='space-between' align='center'>
        <h1>Navbar</h1>
        <ThemeSwitcher />
      </Flex>
    </Container>
  );
};

export default Navbar;
