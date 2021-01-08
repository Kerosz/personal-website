import { Flex } from '@lib/ui';
import { Text } from './hero.styles';

const Hero = () => {
  return (
    <Flex direction='column' m='50px 0'>
      <Text align='right'>
        <span>“</span>C<span>oM</span>BININ<span>G</span>
      </Text>
      <Text>
        FN<span>N</span>CTION<span>A</span>LITY
      </Text>
      <Text align='right'>
        <span>A</span>ND DESI<span>G</span>N <span>.</span>
        <span>”</span>
      </Text>
    </Flex>
  );
};

export default Hero;
