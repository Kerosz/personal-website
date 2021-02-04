// components
import Link from '@components/link';
import MotionList from '@animations/motion-list';
import MotionWord from '@animations/motion-word';
// libraries
import Image from 'next/image';
import { FC, memo } from 'react';
import { motion } from 'framer-motion';
import { imageBuilder } from 'sanity';
import { IStudycase } from '@lib/api';
import { Button, Container, Text, Flex } from '@lib/ui';
// hooks
import useAnimationView from '@hooks/use-animation-view';
// styles
import {
  NormalSize,
  LargerSize,
  ImageContainer,
  TopWrapper,
  BodyWrapper,
  SectionWrapper,
  SectionTitle,
  Paragraph,
} from './studycase.styles';
import { Marquee, MarqueeText } from '../showcase/showcase.styles';

const MotionImageContainer = motion.custom(ImageContainer);
const MarqueeTextMotion = motion.custom(MarqueeText);

const Studycase: FC<{ data: IStudycase }> = memo(({ data }) => {
  const finishDate = new Date(data.finish).toLocaleDateString() || null;
  const { ref: issuesRef, animation: issuesAnimation } = useAnimationView({
    viewOptions: {
      threshold: 0.55,
      triggerOnce: true,
    },
  });
  const { ref: solutionRef, animation: solutionsAnimation } = useAnimationView({
    viewOptions: {
      threshold: 0.55,
      triggerOnce: true,
    },
  });

  const marqueeText = Array(10)
    .fill(` ${data.name} -`)
    .map((name) => name);

  return (
    <>
      <MotionImageContainer layoutId={data._id}>
        <Image
          src={imageBuilder.image(data.src).url() as string}
          alt={data.name}
          layout='fill'
          objectFit='cover'
        />
      </MotionImageContainer>
      <Container maxW='87.5%'>
        <TopWrapper justify='center'>
          {finishDate && <Text className='finish-stat'>{finishDate}</Text>}
          <Text component='h1'>{data.name}</Text>
        </TopWrapper>
        <BodyWrapper direction='column'>
          <Flex>
            <Button variant='outlined' mr='2%'>
              <Link to={data.live} target>
                01. Live Website
              </Link>
            </Button>
            {data.livePreview && (
              <Button variant='outlined' mr='2%'>
                <Link to={data.livePreview} target>
                  02. Live Website
                </Link>
              </Button>
            )}
            {data.source && (
              <Button variant='outlined'>
                <Link to={data.source} target>
                  Source Code
                </Link>
              </Button>
            )}
          </Flex>
          <SectionWrapper component='section' direction='column'>
            <SectionTitle component='h2'>Project description</SectionTitle>
            <NormalSize>
              <Paragraph>
                {data.overview.split(' ').map((word, idx) => (
                  <MotionWord
                    key={`${word}-motion_${idx}`}
                    initialDelay={0.055}
                    delayIncrement={0.01}
                    index={idx}>
                    {word}&nbsp;
                  </MotionWord>
                ))}
              </Paragraph>
            </NormalSize>
          </SectionWrapper>
          <SectionWrapper component='section' direction='column'>
            <SectionTitle component='h2' ref={issuesRef}>
              The problem
            </SectionTitle>
            <LargerSize>
              <MotionList
                listData={data.issues.listItem}
                listAnimation={issuesAnimation}
                animationType='word'
                itemProps={{ pb: '1.5rem' }}
              />
            </LargerSize>
          </SectionWrapper>
          <SectionWrapper component='section' direction='column'>
            <SectionTitle component='h2' ref={solutionRef}>
              The solution
            </SectionTitle>
            <LargerSize>
              <MotionList
                listData={data.solutions.listItem}
                listAnimation={solutionsAnimation}
                animationType='word'
                itemProps={{ pb: '1.5rem' }}
              />
            </LargerSize>
          </SectionWrapper>
          <Marquee align={data.align}>
            <MarqueeTextMotion
              animate={{
                x:
                  data.align === 'right'
                    ? ['-50.28%', '0%']
                    : ['0%', '-50.28%'],
              }}
              transition={{
                ease: 'linear',
                duration: 18,
                repeat: Infinity,
              }}
              style={{ color: data.scheme }}>
              {marqueeText}
            </MarqueeTextMotion>
          </Marquee>
        </BodyWrapper>
      </Container>
    </>
  );
});

export default Studycase;
