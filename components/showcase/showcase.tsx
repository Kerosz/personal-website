// components
import SectionTitle from '@components/title';
import Link from '@components/link';
import Image from 'next/image';
import MotionWord from '@animations/motion-word';
import MotionList from '@animations/motion-list';
// hooks
import useAnimationView from '@hooks/use-animation-view';
import useActiveLink from '@hooks/use-active-link';
// libraries
import { FC, memo } from 'react';
import { motion } from 'framer-motion';
import { Badge, Flex } from '@lib/ui';
import { ArrowRight } from '@lib/icons';
import { IStudycaseBase } from '@lib/api';
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
import { imageBuilder } from 'sanity';

export interface ShowcaseProps {
  data: IStudycaseBase[];
}

// Framer Motion Components
const MarqueeTextMotion = motion.custom(MarqueeText);
const TitleMotion = motion.custom(Title);
const BadgeMotion = motion.custom(BadgeWrapper);
const MoreInfoMotion = motion.custom(MoreInfo);
const PreviewMotion = motion.custom(Preview);

const Showcase: FC<ShowcaseProps> = memo(({ data }) => {
  const linkRef = useActiveLink('/#showcase');

  return (
    <ShowcaseWrapper id='showcase' component='section' direction='column'>
      <SectionTitle heading='Study Case' subHeading='Showcase' />
      <Flex direction='column' ref={linkRef}>
        {data.map((project: IStudycaseBase, idx) => {
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
            <Project direction='column' key={`${project._id}-project_${idx}`}>
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
                        key={`${project._id}-tag_${idx}`}
                        style={{ fontSize: 'inherit' }}
                        mb='12px'>
                        {tag}
                      </Badge>
                    ))}
                  </BadgeMotion>
                  <SubTitle component='h4'>Summary</SubTitle>
                  <Description>
                    {project.excerpt.split(' ').map((word, idx) => (
                      <MotionWord
                        key={`${word}-motion_${idx}`}
                        initialDelay={0.15}
                        index={idx}>
                        {word}&nbsp;
                      </MotionWord>
                    ))}
                  </Description>
                  <SubTitle ref={listRef} component='h4'>
                    Goals
                  </SubTitle>
                  <MotionList
                    listData={project.goals}
                    listAnimation={listAnimation}
                  />
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
                    }}>
                    <Link to={`/studycase/${project.slug}`}>
                      Study Case <ArrowRight />
                    </Link>
                  </MoreInfoMotion>
                </Flex>
                <PreviewMotion
                  variants={previewVariants}
                  initial='hidden'
                  animate={titleAnimation}>
                  <Link to={`/studycase/${project.slug}`}>
                    <motion.a layoutId={project._id} aria-label={project.name}>
                      <Image
                        src={imageBuilder.image(project.src).url() as string}
                        alt={`Display of mockups for ${project.name} project`}
                        width={600}
                        height={600}
                        layout='responsive'
                        priority
                      />
                    </motion.a>
                  </Link>
                </PreviewMotion>
              </Content>
            </Project>
          );
        })}
      </Flex>
      {/* TO BO ADDED LATER */}
      {/* <Flex direction='column' mt='10%'>
        <SectionTitle heading='More Projects' />
        {moreProjects.map((project: ProjectProps) => (
          <Accordion key={project.id}>
            <AccordionHeader>{project.name}</AccordionHeader>
            <AccordionBody>{project.summary}</AccordionBody>
          </Accordion>
        ))}
      </Flex> */}
    </ShowcaseWrapper>
  );
});

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

export default Showcase;
