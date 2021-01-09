import { Text, HeroWrapper } from './hero.styles';

const Hero = () => {
  return (
    <HeroWrapper component='section' direction='column'>
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
    </HeroWrapper>
  );
};

export default Hero;
