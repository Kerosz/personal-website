// components
import Link from 'next/link';
import ThemeSwitcher from './theme-switcher';
// libraries
import { AnimateSharedLayout, motion } from 'framer-motion';
// hooks
import useCursor from '@hooks/use-cursor';
import { useGlobalContext } from 'context/rootContext';
// styles
import { DesktopNavWrapper, List, ListItem, Line } from './navigation.styles';

import navbarLinks from '@constants/navbar';

const MotionListItem = motion.custom(ListItem);

const BottomNavigation = () => {
  const { activePath } = useGlobalContext();
  const onCursor = useCursor();

  return (
    <DesktopNavWrapper component='nav' className='desktop'>
      <AnimateSharedLayout>
        <List>
          {navbarLinks.map((link) => (
            <Link key={link.id} href={link.path}>
              <MotionListItem
                className={activePath === link.path ? 'selected' : ''}
                animate
                whileHover={{
                  scale: 1.113,
                  rotate: -3,
                  transition: navTextTransition,
                }}
                whileTap={{
                  scale: 0.875,
                  rotate: -6,
                  transition: navTextTransition,
                }}
                onMouseEnter={() => onCursor('hovered')}
                onMouseLeave={() => onCursor('default')}>
                {link.label}
              </MotionListItem>
            </Link>
          ))}
          <ListItem style={{ cursor: 'default' }}>
            <Line />
          </ListItem>
          <ListItem style={{ padding: 0 }}>
            <ThemeSwitcher />
          </ListItem>
        </List>
      </AnimateSharedLayout>
    </DesktopNavWrapper>
  );
};

const navTextTransition = {
  type: 'spring',
  damping: 16,
  stiffness: 200,
  staggerChildren: 0.06,
};

export default BottomNavigation;
