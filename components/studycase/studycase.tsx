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

import studycase from '@constants/studycase';

const MarqueeTextMotion = motion.custom(MarqueeText);

const Studycase = () => {
  return (
    <StudycaseWrapper id='showcase' component='section' direction='column'>
      <SectionTitle heading='Study Case' subHeading='Showcase' />
      {studycase.map((project) => (
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
          <Content>
            <Flex direction='column' p='0 2% 0 0'>
              <Title component='h2'>{project.name}</Title>
              <SubTitle component='h4'>Summary</SubTitle>
              <Description>{project.summary}</Description>
              <SubTitle component='h4'>Goals</SubTitle>
            </Flex>
            <Flex p='0 0 0 2%' />
          </Content>
        </Project>
      ))}
    </StudycaseWrapper>
  );
};

export default Studycase;
