import { AnimatePresence, motion } from 'framer-motion';
import { Text, HeroWrapper } from './hero.styles';

const MotionHeroWrapper = motion.custom(HeroWrapper);

const Hero = () => {
  return (
    <MotionHeroWrapper
      id='hero'
      component='section'
      direction='column'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.15 }}>
      <Text align='right'>
        <span>“</span>C<span>oM</span>BININ<span>G</span>
      </Text>
      <Text>
        FU<span>N</span>CTION<span>A</span>LITY
      </Text>
      <Text align='right'>
        <span>A</span>ND DESI<span>G</span>N <span>.</span>
        <span>”</span>
      </Text>
    </MotionHeroWrapper>
  );
};

export default Hero;
