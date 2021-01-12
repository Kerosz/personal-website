import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Flex } from '@lib/ui';
import { useGlobalContext } from 'context/rootContext';

const TransitionWrapper = styled(Flex)`
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99;

  > div {
    height: 25vh;
    margin-top: -5vh;
    width: 100vw;
    background-color: ${(props) => props.theme.palette.text.accent};
    transform-origin: left;
  }
`;

const variants = {
  visible: {
    transition: {
      when: 'beforeChildren',
      ease: 'circInOut',
    },
  },
  hidden: {
    transition: {
      when: 'afterChildren',
      ease: 'circInOut',
      staggerChildren: 0.25,
    },
  },
};

const childVariants = {
  visible: {
    scaleX: 1,
    transition: {
      ease: 'circInOut',
      duration: 1,
    },
  },
  hidden: {
    scaleX: 0,
    transition: {
      ease: 'circInOut',
      duration: 1,
    },
  },
};

const PageTransition = () => {
  return (
    <>
      <TransitionWrapper
        as={motion.div}
        variants={variants}
        initial='visible'
        animate='hidden'
        aria-hidden={true}>
        {Array.from(new Array(5)).map((_, idx) => (
          <motion.div variants={childVariants} key={idx} />
        ))}
      </TransitionWrapper>
    </>
  );
};

export default PageTransition;
