// components
import MotionWord from './motion-word';
// libraries
import { motion, AnimationControls } from 'framer-motion';
import { List, ListItem } from '@lib/ui';

export interface MotionListProps {
  listData: any[];
  listAnimation?: AnimationControls;
  animationType?: 'normal' | 'word';
  itemProps?: Record<string, any>;
}

const ListMotion = motion.custom(List);
const ItemMotion = motion.custom(ListItem);

const MotionList = (props: MotionListProps) => {
  const {
    listData,
    animationType = 'normal',
    listAnimation,
    itemProps,
    ...restProps
  } = props;

  return (
    <ListMotion
      variants={listVariants}
      initial='hidden'
      animate={listAnimation}
      {...restProps}>
      {listData.map((item: string, idx) => {
        if (animationType === 'normal') {
          return (
            <ItemMotion
              key={`${idx}-list-item_${idx}`}
              variants={itemVariants}
              {...itemProps}>
              {item}
            </ItemMotion>
          );
        }
        if (animationType === 'word') {
          return (
            <ItemMotion
              key={`${idx}-list-item_${idx}`}
              style={{ flexWrap: 'wrap' }}
              {...itemProps}>
              {item.split(' ').map((word, idx) => (
                <MotionWord
                  key={`${word}-motion_${idx}`}
                  initialDelay={0.15}
                  index={idx}>
                  {word}&nbsp;
                </MotionWord>
              ))}
            </ItemMotion>
          );
        }
      })}
    </ListMotion>
  );
};

const listVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

const itemVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

export default MotionList;
