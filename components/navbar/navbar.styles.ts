import styled from 'styled-components';
import { Flex, Text as UiText } from '@lib/ui';

export const AppBar = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  background: transparent;
  backdrop-filter: blur(0.3rem);
  width: 100%;
  height: 15vh;
  align-items: center;
  z-index: 99;

  & svg {
    margin-right: 0.8rem;
    max-width: 12.5vmin;

    ${(props) => props.theme.breakpoints.xs} {
      margin-right: 1rem;
    }
  }

  @media (min-height: 1025px) and (max-width: 1400px) {
    height: 12vh;
  }
`;

export const Text = styled(UiText)`
  font-size: 6.7vw;
  font-weight: 400;
  text-transform: uppercase;

  ${(props) => props.theme.breakpoints.xs} {
    font-size: 5.6vw;
  }

  ${(props) => props.theme.breakpoints.sm} {
    font-size: 4.6vw;
  }

  ${(props) => props.theme.breakpoints.md} {
    font-size: 3.9vw;
  }

  ${(props) => props.theme.breakpoints.lg} {
    font-size: 3.6vw;
  }

  ${(props) => props.theme.breakpoints.xl} {
    font-size: calc(0.8rem + 2vw);
    /* font-size: calc(1.35em + 2vmin); */
  }

  & > span {
    font-size: inherit;
    color: ${(props) => props.theme.palette.text.accent};
    font-family: ${(props) => props.theme.font.family.secondary};
  }
`;

export const BurgerMenu = styled.div`
  position: relative;
  cursor: pointer;

  & > span {
    display: block;
    background: ${(props) => props.theme.palette.text.main};
    width: 3.6rem;
    height: 0.5rem;
    border-radius: 0.2rem;
  }

  & > span:first-of-type {
    margin-bottom: 0.8rem;
  }
`;
