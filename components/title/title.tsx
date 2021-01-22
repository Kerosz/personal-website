import { FC } from 'react';
import { Devider, Text, Flex } from '@lib/ui';
import { TitleWrapper } from './title.styles';
import { motion } from 'framer-motion';

import useAnimationView from '@hooks/use-animation-view';
import MotionWord from '@animations/motion-word';

interface TitleProps {
  heading: string;
  subHeading?: string;
}

const MotionWrapper = motion.custom(TitleWrapper);
const MotionText = motion.custom(Text);
const MotionDevider = motion.custom(Devider);

const SectionTitle: FC<TitleProps> = (props) => {
  const { subHeading, heading } = props;

  const { ref, animation } = useAnimationView({
    threshold: 0.8,
  });

  return (
    <MotionWrapper
      ref={ref}
      direction='column'
      variants={titleVariants}
      initial='hidden'
      animate={animation}>
      {subHeading && (
        <>
          <MotionText component='h5' weight={300} m='0 0 2.4%'>
            {subHeading}
          </MotionText>
          <MotionDevider />
        </>
      )}
      <Flex component='h2' direction='row'>
        {heading.split(' ').map((letter, idx) => (
          <MotionWord
            key={`${letter}-motion-${idx}`}
            initialDelay={0.35}
            index={idx}>
            {letter}&nbsp;
          </MotionWord>
        ))}
      </Flex>
    </MotionWrapper>
  );
};

const titleVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
      duration: 0.7,
    },
  },
  hidden: {
    y: '-20%',
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default SectionTitle;
