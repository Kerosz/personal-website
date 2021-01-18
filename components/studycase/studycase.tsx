import SectionTitle from '@components/title';
import { motion } from 'framer-motion';
import {
  StudycaseWrapper,
  Project,
  Marquee,
  MarqueeText,
  Content,
} from './studycase.styles';

const MarqueeTextMotion = motion.custom(MarqueeText);

const Studycase = () => {
  return (
    <StudycaseWrapper id='showcase' component='section' direction='column'>
      <SectionTitle heading='Study Case' subHeading='Showcase' />
      <Project direction='column'>
        <Marquee>
          <MarqueeTextMotion
            animate={{
              x: ['0%', '-50.28%'],
            }}
            transition={{
              ease: 'linear',
              duration: 12,
              loop: Infinity,
            }}>
            {Array.from(new Array(6).fill(' Reddit Client -')).map(
              (title) => title
            )}
          </MarqueeTextMotion>
        </Marquee>
        <Content>sadsadas</Content>
      </Project>
    </StudycaseWrapper>
  );
};

export default Studycase;
