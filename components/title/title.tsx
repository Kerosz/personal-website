import { FC } from 'react';
import { Devider, Text, Flex } from '@lib/ui';
import { TitleWrapper } from './title.styles';
import { motion } from 'framer-motion';
import useIsVisible from '@hooks/use-is-visible';

import MotionWord from '@animations/motion-word';

interface TitleProps {
  subHeading: string;
  heading: string;
}

const MotionText = motion.custom(Text);
const MotionDevider = motion.custom(Devider);

const Title: FC<TitleProps> = ({ subHeading, heading }) => {
  return (
    <TitleWrapper direction='column'>
      <MotionText component='h4' weight='400' m='0 0 2.4%'>
        {subHeading}
      </MotionText>
      <MotionDevider />
      <Flex component='h2' direction='row'>
        {heading.split(' ').map((letter, idx) => (
          <MotionWord
            key={`${letter}-motion-${idx}`}
            initialDelay={0.25}
            index={idx}>
            {letter}&nbsp;
          </MotionWord>
        ))}
      </Flex>
    </TitleWrapper>
  );
};

export default Title;
