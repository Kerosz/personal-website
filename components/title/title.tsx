import { FC } from 'react';
import { Devider, Text } from '@lib/ui';
import { TitleWrapper } from './title.styles';

interface TitleProps {
  subHeading: string;
  heading: string;
}

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
