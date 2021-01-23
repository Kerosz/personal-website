// libraries
import { FC } from 'react';
import { motion } from 'framer-motion';
import { Flex } from '@lib/ui';

// hooks
import useAnimationView from '@hooks/use-animation-view';

interface MotionWordProps {
  initialState?: string;
  initialDelay?: number;
  delayIncrement?: number;
  index?: number;
  animate?: Record<string, any>;
}

const springConfig = { type: 'spring', damping: 25, stiffness: 200 };

const MotionFlex = motion.custom(Flex);

const MotionWord: FC<MotionWordProps> = (props) => {
  const {
    children,
    initialState = '-35%',
    initialDelay = 0,
    delayIncrement = 0.025,
    index = 0,
    animate = {},
    ...restProps
  } = props;
  const { transition, ...restAnimateProps } = animate;

  const { ref, animation } = useAnimationView({
    initial: 'hidden',
    animate: 'visible',
  });

  const motionWordVariants = {
    hidden: { y: initialState, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: initialDelay + index * delayIncrement,
        ease: [0.6, 0.01, -0.05, 0.9],
        ...springConfig,
        ...transition,
      },
      ...restAnimateProps,
    },
  };

  return (
    <MotionFlex
      ref={ref}
      component='span'
      style={{ fontSize: 'inherit' }}
      variants={motionWordVariants}
      initial='hidden'
      animate={animation}
      exit='hidden'
      {...restProps}>
      {children}
    </MotionFlex>
  );
};

export default MotionWord;
