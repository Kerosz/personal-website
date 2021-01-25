// components
import SectionTitle from '@components/title';
import Link from 'next/link';
import Image from 'next/image';
import MotionWord from '@animations/motion-word';
// hooks
import useAnimationView from '@hooks/use-animation-view';
import useActiveLink from '@hooks/use-active-link';
import useCursor from '@hooks/use-cursor';
// libraries
import { motion } from 'framer-motion';
import {
  Badge,
  Flex,
  List,
  ListItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@lib/ui';
import { ArrowRight } from '@lib/icons';
// styles
import {
  ShowcaseWrapper,
  Project,
  BadgeWrapper,
  Marquee,
  MarqueeText,
  Content,
  Title,
  SubTitle,
  Description,
  MoreInfo,
  Preview,
} from './showcase.styles';

import studycase from '@constants/studycase';
import moreProjects from '@constants/more-projects';

export type ProjectProps = typeof studycase[0];

// Framer Motion Components
const MarqueeTextMotion = motion.custom(MarqueeText);
const TitleMotion = motion.custom(Title);
const BadgeMotion = motion.custom(BadgeWrapper);
const ListMotion = motion.custom(List);
const ItemMotion = motion.custom(ListItem);
const MoreInfoMotion = motion.custom(MoreInfo);
const PreviewMotion = motion.custom(Preview);

const Showcase = () => {
  const onCursor = useCursor();
  const linkRef = useActiveLink('/#showcase');

  return (
    <ShowcaseWrapper id='showcase' component='section' direction='column'>
      <SectionTitle heading='Study Case' subHeading='Showcase' />
      <Flex direction='column' ref={linkRef}>
        {studycase.map((project: ProjectProps, idx) => {
          const { ref: titleRef, animation: titleAnimation } = useAnimationView(
            {
              threshold: 0.25,
            }
          );
          const { ref: listRef, animation: listAnimation } = useAnimationView({
            threshold: 0.55,
          });

          const marqueeText = Array(10)
            .fill(` ${project.name} -`)
            .map((name) => name);

          return (
            <Project direction='column' key={`${project.name}-project_${idx}`}>
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
                    repeat: Infinity,
                  }}
                  style={{ color: project.scheme }}>
                  {marqueeText}
                </MarqueeTextMotion>
              </Marquee>
              <Content ref={titleRef}>
                <Flex direction='column' p='0 2% 0 0'>
                  <TitleMotion
                    component='h3'
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
                    {project.tags.map((tag, idx) => (
                      <Badge
                        key={`${tag}-badge_${idx}`}
                        style={{ fontSize: 'inherit' }}
                        mb='12px'>
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
                    {project.goals.map((goal, idx) => (
                      <ItemMotion
                        key={`${goal}-goal_${idx}`}
                        variants={itemVariants}>
                        {goal}
                      </ItemMotion>
                    ))}
                  </ListMotion>
                  <Link href={`/studycase/${project.slug}`}>
                    <MoreInfoMotion
                      style={{ color: project.scheme }}
                      animate={{
                        x: [
                          '-2.5rem',
                          '-1.5rem',
                          '-0.1rem',
                          '-1.5rem',
                          '-2.5rem',
                        ],
                      }}
                      transition={{
                        ease: 'linear',
                        duration: 1.55,
                        repeat: Infinity,
                      }}
                      onMouseEnter={() => onCursor('hovered')}
                      onMouseLeave={() => onCursor('default')}>
                      Study Case <ArrowRight />
                    </MoreInfoMotion>
                  </Link>
                </Flex>
                <PreviewMotion
                  variants={previewVariants}
                  initial='hidden'
                  animate={titleAnimation}>
                  <Link href={`/studycase/${project.slug}`}>
                    {/* Extra fragment needed to workarond next/image not being able to recieve refs */}
                    <a
                      onMouseEnter={() => onCursor('hovered')}
                      onMouseLeave={() => onCursor('default')}>
                      <Image
                        src={project.src}
                        alt={`Display of mockups for ${project.name} project`}
                        width={600}
                        height={600}
                        layout='responsive'
                      />
                    </a>
                  </Link>
                </PreviewMotion>
              </Content>
            </Project>
          );
        })}
      </Flex>
      <Flex direction='column' mt='10%'>
        <SectionTitle heading='More Projects' />
        {moreProjects.map((project: ProjectProps) => (
          <Accordion key={project.id}>
            <AccordionHeader>{project.name}</AccordionHeader>
            <AccordionBody>{project.summary}</AccordionBody>
          </Accordion>
        ))}
      </Flex>
    </ShowcaseWrapper>
  );
};

const titleVariants = {
  hidden: { x: '-4.5vw', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
};

const previewVariants = {
  hidden: { x: '5vw', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
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

export default Showcase;
