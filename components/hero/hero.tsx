// libraries
import { motion } from 'framer-motion';

// hooks
import useActiveLink from '@hooks/use-active-link';

// styles
import { Text, HeroWrapper, Scroll } from './hero.styles';

import hero from '@constants/hero';

const MotionHeroWrapper = motion.custom(HeroWrapper);
const MotionScroll = motion.custom(Scroll);

const Hero = () => {
  const linkRef = useActiveLink('/');

  return (
    <MotionHeroWrapper
      ref={linkRef}
      id='hero'
      component='section'
      direction='column'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.15 }}>
      {hero.map((text, idx) => (
        <Text
          key={`${text.id}-text_${idx}`}
          align={text.align as 'left' | 'right'}
          dangerouslySetInnerHTML={{ __html: text.html }}
        />
      ))}

      <MotionScroll
        initial={{ rotate: 90 }}
        animate={{ y: ['-1.5rem', '-1.0rem', '-0.5rem', '-1.0rem', '-1.5rem'] }}
        transition={{
          ease: 'linear',
          duration: 1,
          repeat: Infinity,
        }}>
        Scroll
      </MotionScroll>
    </MotionHeroWrapper>
  );
};

export default Hero;
