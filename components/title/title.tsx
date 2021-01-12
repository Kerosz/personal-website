import { FC } from 'react';
import { Devider, Text } from '@lib/ui';
import { TitleWrapper } from './title.styles';

interface TitleProps {
  subHeading: string;
  heading: string;
}

// Add staggering effect to the children of the container
const letterContainerVariants = {
  before: {},
  after: { transition: { staggerChildren: 0.03 } },
};

// Variants for animating each letter
const letterVariants = {
  before: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      damping: 16,
      stiffness: 200,
    },
  },
  after: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 16,
      stiffness: 200,
    },
  },
};

const Title: FC<TitleProps> = ({ subHeading, heading }) => {
  return (
    <TitleWrapper direction='column'>
      <Text component='h4' weight='400' m='0 0 2.4%'>
        {subHeading}
      </Text>
      <Devider />
      <Text component='h2' size='5.9vw' casing='uppercase' fit>
        {heading}
      </Text>
    </TitleWrapper>
  );
};

export default Title;
