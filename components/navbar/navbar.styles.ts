import styled from 'styled-components';
import { Flex, Text as UiText } from '@lib/ui';

export const AppBar = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  background: transparent;
  backdrop-filter: blur(0.3rem);
  width: 100%;
  height: 13vh;
  align-items: center;
  z-index: 99;

  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${(props) => props.theme.palette.background};
    opacity: 0.97;
    z-index: -1;
  }

  & svg {
    max-width: 14.5vmin;

    ${(props) => props.theme.breakpoints.xs} {
      max-width: 12.5vmin;
    }

    ${(props) => props.theme.breakpoints.sm} {
      max-width: 11.5vmin;
      margin-right: 1rem;
    }

    ${(props) => props.theme.breakpoints.md} {
      max-width: 11vmin;
    }
  }

  ${(props) => props.theme.breakpoints.sm} {
    & .menu {
      display: none;
    }
  }

  @media (min-height: 1025px) and (max-width: 1400px) {
    height: 12vh;
  }
`;

export const Text = styled(UiText)`
  display: none;
  font-size: 4.8vw;
  font-weight: 600;
  padding: 0.75vw;
  margin-right: 0.3vw;
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  ${(props) => props.theme.breakpoints.xs} {
    font-size: 4.3vw;
  }

  ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    font-size: calc(1.3rem + 0.9vw);
  }

  ${(props) => props.theme.breakpoints.md} {
    font-size: calc(1.15rem + 0.9vw);
  }

  ${(props) => props.theme.breakpoints.lg} {
    font-size: calc(0.95rem + 0.9vw);
  }

  ${(props) => props.theme.breakpoints.xl} {
    font-size: calc(0.6rem + 1vw);
  }

  & > span {
    font-size: inherit;
    color: ${(props) => props.theme.palette.text.accent};
    font-family: ${(props) => props.theme.font.family.secondary};
  }
`;

export const BurgerMenu = styled.div`
  display: block;
  position: relative;
  cursor: pointer;

  ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }

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
