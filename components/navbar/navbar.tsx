import { FC } from 'react';
import { motion } from 'framer-motion';
import { AppBar, Text, BurgerMenu } from './navbar.styles';
import { Container, Flex } from '@lib/ui';
import Link from 'next/link';
import Branding from './branding';
import navbarLinks from '@constants/navbar';

const navTextTransition = {
  type: 'spring',
  damping: 16,
  stiffness: 200,
  staggerChildren: 0.06,
};

const MotionText = motion.custom(Text);

const Navbar: FC = () => {
  return (
    <AppBar component='header'>
      <Container maxW='99.2%'>
        <Flex justify='space-between' align='center'>
          <Link href='/'>
            <Branding cursor='pointer' />
          </Link>
          <Flex component='nav' align='center' className='desktop'>
            {navbarLinks.map((link) => (
              <Link key={link.id} href={link.path}>
                <MotionText
                  whileHover={{
                    scale: 1.113,
                    rotate: -3,
                    transition: navTextTransition,
                  }}
                  whileTap={{
                    scale: 0.875,
                    rotate: -6,
                    transition: navTextTransition,
                  }}>
                  {link.label}
                </MotionText>
              </Link>
            ))}
          </Flex>
          <BurgerMenu className='mobile'>
            <span />
            <span />
          </BurgerMenu>
        </Flex>
      </Container>
    </AppBar>
  );
};

export default Navbar;
