import SectionTitle from '@components/title';
import { Flex } from '@lib/ui';
import { motion } from 'framer-motion';
import {
  StudycaseWrapper,
  Project,
  Marquee,
  MarqueeText,
  Content,
  Title,
  SubTitle,
  Description,
} from './studycase.styles';

import MotionWord from '@animations/motion-word';
import useAnimationView from '@hooks/use-animation-view';
import studycase from '@constants/studycase';

const MarqueeTextMotion = motion.custom(MarqueeText);
const TitleMotion = motion.custom(Title);

const Studycase = () => {
  return (
    <StudycaseWrapper id='showcase' component='section' direction='column'>
      <SectionTitle heading='Study Case' subHeading='Showcase' />
      {studycase.map((project, idx) => {
        const { ref, animation } = useAnimationView({
          threshold: 0.25,
        });

        return (
          <Project direction='column'>
            <Marquee align={project.align}>
              <MarqueeTextMotion
                animate={{
                  x:
                    project.align === 'right'
                      ? ['-50.28%', '0%']
                      : ['0%', '-50.28%'],
                }}
                transition={{
                  ease: 'linear',
                  duration: 12,
                  loop: Infinity,
                }}>
                {Array.from(new Array(6).fill(` ${project.name} -`)).map(
                  (name) => name
                )}
              </MarqueeTextMotion>
            </Marquee>
            <Content ref={ref}>
              <Flex direction='column' p='0 2% 0 0'>
                <TitleMotion
                  component='h2'
                  key={idx}
                  variants={titleVariants}
                  initial='hidden'
                  animate={animation}>
                  {project.name}
                </TitleMotion>
                <SubTitle component='h4'>Summary</SubTitle>
                <Description>
                  {project.summary.split(' ').map((word, idx) => (
                    <MotionWord
                      key={`${word}-motion-${idx}`}
                      initialDelay={0.15}
                      index={idx}>
                      {word}&nbsp;
                    </MotionWord>
                  ))}
                </Description>
                <SubTitle component='h4'>Goals</SubTitle>
              </Flex>
              <Flex p='0 0 0 2%' />
            </Content>
          </Project>
        );
      })}
    </StudycaseWrapper>
  );
};

export default Studycase;

const titleVariants = {
  hidden: { x: '-3vw', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.55 } },
};
