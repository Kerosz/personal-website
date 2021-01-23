// components
import Link from 'next/link';
import Branding from './branding';
// libraries
import { FC } from 'react';
import { motion, useCycle, AnimateSharedLayout } from 'framer-motion';
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
const BurgerMotion = motion.custom(Burger);
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

          <BurgerMotion open={isOpen} onClick={() => toggleOpen()}>
            <span />
            <span />
          </BurgerMotion>
          <MenuMotion
            initial={{ x: '105vw' }}
            animate={{ x: isOpen ? 0 : '105vw' }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 19,
              delay: 0.5,
            }}>
            <AnimateSharedLayout>
              <MenuList>
                {navbarLinks.map((link) => (
                  <Link key={link.id} href={link.path}>
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
                      {link.label}
                    </MotionMenuItem>
                  </Link>
                ))}
              </MenuList>
            </AnimateSharedLayout>
          </MenuMotion>
        </Flex>
      </Container>
    </MobileNavWrapper>
  );
};

export default TopNavigation;
