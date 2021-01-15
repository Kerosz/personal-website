import styled from 'styled-components';
import Branding from '@components/navbar/branding';
import { Flex } from '@lib/ui';
import { motion } from 'framer-motion';

const MainStack = styled(Flex)`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.palette.text.accent};
  pointer-events: none;
  z-index: 100;
  transform-origin: right;
`;

const SubStack = styled(MainStack)`
  background: transparent;
  transform-origin: left;
  z-index: 99;

  > div {
    height: 25vh;
    margin-top: -5vh;
    width: 100vw;
    background-color: ${(props) => props.theme.palette.text.main};
    transform-origin: right;
  }

  > figure {
    position: fixed;
    top: calc(50% - 30vmin);
    left: calc(50% - 34vmin);
    transform-origin: center;
    width: 65vmin;
    z-index: 15;
    padding: 0;
    margin: 0;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

const MotionMain = motion.custom(MainStack);
const MotionSub = motion.custom(SubStack);

const PageTransition = () => {
  return (
    <>
      <MotionMain variants={mainVariants} initial='visible' animate='hidden' />
      <MotionSub variants={subVariants} initial='initial' animate='animate'>
        {Array.from(new Array(5)).map((_, idx) => (
          <motion.div variants={childVariants} key={idx} />
        ))}
        <motion.figure variants={childVariantBrand} key={5}>
          <Branding invert />
        </motion.figure>
      </MotionSub>
    </>
  );
};

const mainVariants = {
  visible: {
    x: 0,
  },
  hidden: {
    x: '-110vw',
    transition: {
      ease: 'circInOut',
      duration: 0.7,
    },
  },
};

const subVariants = {
  initial: {},
  animate: {
    transition: {
      ease: 'circInOut',
      delayChildren: 0.9,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

export const childVariants = {
  initial: {
    scaleX: 1,
  },
  animate: {
    scaleX: 0,
    transition: {
      ease: 'circInOut',
      duration: 0.7,
    },
  },
};

export const childVariantBrand = {
  initial: {
    scale: 0.2,
    opacity: 1,
  },
  animate: {
    scale: 1,
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1,
      delay: 0.2,
    },
  },
};

export default PageTransition;
