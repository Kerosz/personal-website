import { FC } from 'react';
import { Flex, Container, Text } from '@lib/ui';
import ThemeSwitcher from './theme-switcher';

const Navbar: FC = () => {
  return (
    <Container fluid>
      <Flex justify='space-between' align='center'>
        <Text component='h1' casing='uppercase'>
          Navbar
        </Text>
        <ThemeSwitcher />
      </Flex>
    </Container>
  );
};

export default Navbar;
