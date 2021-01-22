import styled from 'styled-components';
import { Text as UiText, Flex } from '@lib/ui';

export const HeroWrapper = styled(Flex)`
  scroll-snap-align: start;
  position: relative;
  font-family: ${(props) => props.theme.font.family.heading};
  margin-top: 5vh;

  @media screen and (max-width: 40em) {
    padding: 2rem 0;
  }

  @media screen and (max-width: 28em) {
    padding: 3.5rem 0;
  }

  @media (min-height: 1025px) and (max-width: 1400px) {
    margin-top: 10vh;
  }
`;

export const Text = styled(UiText)`
  font-size: 11.7vw;
  font-weight: 300;

  margin: 0 0 11%;

  & > span {
    color: #a0aec0;
    font-size: inherit;
    font-family: ${(props) => props.theme.font.family.secondary};
    font-weight: 300;
  }

  ${(props) => props.theme.breakpoints.xs} {
    font-size: 11.2vw;
    margin: 0 0 9%;
  }

  ${(props) => props.theme.breakpoints.sm} {
    font-size: 10.7vw;
    margin: 0 0 6.5%;
  }

  ${(props) => props.theme.breakpoints.md} {
    margin: 0 0 4.5%;
  }

  ${(props) => props.theme.breakpoints.lg} {
    font-size: 10vw;
    margin: 0 0 1.8%;
  }

  ${(props) => props.theme.breakpoints.xl} {
    font-size: 9.5vw;
    margin: 0 0 1.5%;
  }
`;

export const Scroll = styled(Flex)`
  font-size: calc(0.5rem + (52 - 38) * ((100vw - 320px) / (1600 - 320)));
  width: fit-content;
  transform-origin: left top 0;

  ::after {
    position: absolute;
    content: '';
    left: 7vh;
    top: 50%;
    height: 0.2rem;
    width: 6vh;
    background: ${(props) => props.theme.palette.text.main};
  }
`;
