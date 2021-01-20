import SectionTitle from '@components/title';
import Link from 'next/link';
import { Badge, Button, Flex, List, ListItem } from '@lib/ui';
import { motion } from 'framer-motion';
import {
  StudycaseWrapper,
  Project,
  BadgeWrapper,
  Marquee,
  MarqueeText,
  Content,
  Title,
  SubTitle,
  Description,
} from './studycase.styles';

import MotionWord from '@animations/motion-word';
import useAnimationView from '@hooks/use-animation-view';
import useThemeMode from '@hooks/use-theme-mode';
import studycase from '@constants/studycase';

const MarqueeTextMotion = motion.custom(MarqueeText);
const TitleMotion = motion.custom(Title);
const BadgeMotion = motion.custom(BadgeWrapper);
const ListMotion = motion.custom(List);
const ItemMotion = motion.custom(ListItem);

const Studycase = () => {
  return (
    <StudycaseWrapper id='showcase' component='section' direction='column'>
      <SectionTitle heading='Study Case' subHeading='Showcase' />
      {studycase.map((project, idx) => {
        const { ref: titleRef, animation: titleAnimation } = useAnimationView({
          threshold: 0.25,
        });
        const { ref: listRef, animation: listAnimation } = useAnimationView({
          threshold: 0.55,
        });

        const marqueeText = Array(10)
          .fill(` ${project.name} -`)
          .map((name) => name);

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
                  duration: 18,
                  loop: Infinity,
                }}>
                {marqueeText}
              </MarqueeTextMotion>
            </Marquee>
            <Content ref={titleRef}>
              <Flex direction='column' p='0 2% 0 0'>
                <TitleMotion
                  component='h2'
                  key={idx}
                  variants={titleVariants}
                  initial='hidden'
                  animate={titleAnimation}>
                  {project.name}
                </TitleMotion>
                <BadgeMotion
                  variants={badgeVariants}
                  initial='hidden'
                  animate={titleAnimation}
                  wrap='wrap'>
                  {project.tags.map((tag) => (
                    <Badge style={{ fontSize: 'inherit' }} mb='12px'>
                      {tag}
                    </Badge>
                  ))}
                </BadgeMotion>
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
                <SubTitle ref={listRef} component='h4'>
                  Goals
                </SubTitle>
                <ListMotion
                  variants={listVariants}
                  initial='hidden'
                  animate={listAnimation}>
                  {project.goals.map((goal) => (
                    <ItemMotion variants={itemVariants}>{goal}</ItemMotion>
                  ))}
                </ListMotion>
                <Button variant='outlined' size='large' mt='2rem'>
                  <Link href={`/studycase/${project.slug}`}>Study Case</Link>
                </Button>
              </Flex>
              <Flex p='0 0 0 2%' />
            </Content>
          </Project>
        );
      })}
    </StudycaseWrapper>
  );
};

const titleVariants = {
  hidden: { x: '-4.5vw', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
};

const badgeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const listVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

const itemVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

export default Studycase;
