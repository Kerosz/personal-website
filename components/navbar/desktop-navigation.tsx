// components
import Link from '@components/link';
import ThemeSwitcher from './theme-switcher';
// libraries
import { FC, memo } from 'react';
import { motion } from 'framer-motion';
import { INavigation } from '@lib/api';
// hooks
import useCursor from '@hooks/use-cursor';
// context
import { useGlobalContext } from 'context/root-context';
// styles
import { DesktopNavWrapper, List, ListItem, Line } from './navigation.styles';
import { isNull } from '@lib/utils/assertion';

const MotionListItem = motion.custom(ListItem);

const BottomNavigation: FC<{ data: INavigation[] }> = memo(({ data }) => {
  const { activePath } = useGlobalContext();
  const onCursor = useCursor();

  return (
    <DesktopNavWrapper component='nav' className='desktop'>
      <List>
        {data.map((link, idx) =>
          !isNull(link.path) ? (
            <Link
              key={`${link._id}-link_${idx}`}
              to={link.path}
              target={link.target}>
              <MotionListItem
                layoutId={link.label}
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
          ) : null
        )}
        <ListItem style={{ cursor: 'default' }}>
          <Line />
        </ListItem>
        <ListItem
          style={{ padding: 0 }}
          onMouseEnter={() => onCursor('hovered')}
          onMouseLeave={() => onCursor('default')}>
          <ThemeSwitcher />
        </ListItem>
      </List>
    </DesktopNavWrapper>
  );
});

const navTextTransition = {
  type: 'spring',
  damping: 16,
  stiffness: 200,
  staggerChildren: 0.06,
};

export default BottomNavigation;
