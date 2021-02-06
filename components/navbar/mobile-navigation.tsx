// components
import Link from '@components/link';
import ThemeSwitcher from './theme-switcher';
import Branding from './branding';
// libraries
import { FC, memo } from 'react';
import { motion, useCycle } from 'framer-motion';
import { Container, Flex } from '@lib/ui';
import { INavigation } from '@lib/api';
import { isNull } from '@lib/utils/assertion';
// styles
import {
  MobileNavWrapper,
  Burger,
  Menu,
  MenuList,
  MenuItem,
} from './navigation.styles';

const MenuMotion = motion.custom(Menu);
const MotionMenuItem = motion.custom(MenuItem);

const TopNavigation: FC<{ data: INavigation[] }> = memo(({ data }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <MobileNavWrapper component='header'>
      <Container maxW='99.2%'>
        <Flex justify='space-between' align='center'>
          <Link to='/'>
            <Branding />
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
              <ThemeSwitcher component='li' />
              {data.map((link, idx) =>
                !isNull(link.path) ? (
                  <MotionMenuItem
                    key={`${link._id}-link_${idx}`}
                    onClick={() => setTimeout(() => toggleOpen(), 750)}
                    animate
                    whileHover={{
                      scale: 1.113,
                      rotate: -3,
                    }}
                    whileTap={{
                      scale: 0.875,
                      rotate: -6,
                    }}>
                    <Link to={link.path} target={link.target}>
                      {link.label}
                    </Link>
                  </MotionMenuItem>
                ) : null
              )}
            </MenuList>
          </MenuMotion>
        </Flex>
      </Container>
    </MobileNavWrapper>
  );
});

export default TopNavigation;
