import Link from 'next/link';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { DesktopNavWrapper, List, ListItem } from './navigation.styles';

import navbarLinks from '@constants/navbar';
import { useGlobalContext } from 'context/rootContext';

const navTextTransition = {
  type: 'spring',
  damping: 16,
  stiffness: 200,
  staggerChildren: 0.06,
};

const MotionListItem = motion.custom(ListItem);

const BottomNavigation = () => {
  const { activePath } = useGlobalContext();

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
                }}>
                {link.label}
              </MotionListItem>
            </Link>
          ))}
        </List>
      </AnimateSharedLayout>
    </DesktopNavWrapper>
  );
};

export default BottomNavigation;
