// components
import Link from 'next/link';
import ThemeSwitcher from './theme-switcher';
import Branding from './branding';
// libraries
import { FC } from 'react';
import { motion, useCycle } from 'framer-motion';
import { Container, Flex } from '@lib/ui';
// styles
import {
  MobileNavWrapper,
  Burger,
  Menu,
  MenuList,
  MenuItem,
} from './navigation.styles';

import navbarLinks from '@constants/navbar';

const MenuMotion = motion.custom(Menu);
const MotionMenuItem = motion.custom(MenuItem);

const TopNavigation: FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <MobileNavWrapper component='header'>
      <Container maxW='99.2%'>
        <Flex justify='space-between' align='center'>
          <Link href='/'>
            <Branding cursor='pointer' />
          </Link>

          <Burger onClick={() => toggleOpen()}>
            <span />
            <span />
          </Burger>
          <MenuMotion
            initial={{ x: '105vw' }}
            animate={{ x: isOpen ? 0 : '105vw' }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 18,
            }}>
            <MenuList>
              <MotionMenuItem
                onClick={() => toggleOpen()}
                animate
                whileHover={{
                  scale: 1.113,
                  rotate: -3,
                }}
                whileTap={{
                  scale: 0.875,
                  rotate: -6,
                }}>
                Close
              </MotionMenuItem>
              <ThemeSwitcher />
              {navbarLinks.map((link) => (
                <Link key={link.id} href={link.path}>
                  <MotionMenuItem
                    onClick={() => setTimeout(() => toggleOpen(), 450)}
                    animate
                    whileHover={{
                      scale: 1.113,
                      rotate: -3,
                    }}
                    whileTap={{
                      scale: 0.875,
                      rotate: -6,
                    }}>
                    {link.label}
                  </MotionMenuItem>
                </Link>
              ))}
            </MenuList>
          </MenuMotion>
        </Flex>
      </Container>
    </MobileNavWrapper>
  );
};

export default TopNavigation;
