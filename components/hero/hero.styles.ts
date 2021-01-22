import styled from 'styled-components';
import { Text as UiText, Flex } from '@lib/ui';

export const HeroWrapper = styled(Flex)`
  scroll-snap-align: start;
  position: relative;
  font-family: ${(props) => props.theme.font.family.heading};
  margin-top: 12.5vh;
  padding: 8.5rem 0 3rem;

  ${(props) => props.theme.breakpoints.xs} {
    margin-top: 7.5vh;
  }

  ${(props) => props.theme.breakpoints.sm} {
    margin-top: 8.5vh;
    padding: 3rem 0;
  }

  ${(props) => props.theme.breakpoints.md} {
    margin-top: 5vh;
  }

  @media (min-height: 1025px) and (max-width: 1400px) {
    margin-top: 10vh;
    padding: 2rem 0 10rem;
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
  font-size: calc(1.45rem + (52 - 38) * ((100vw - 320px) / (1600 - 320)));
  width: fit-content;
  transform-origin: left top 0;

  ${(props) => props.theme.breakpoints.xs} {
    font-size: calc(1.3rem + (52 - 38) * ((100vw - 320px) / (1600 - 320)));
  }

  ${(props) => props.theme.breakpoints.sm} {
    font-size: calc(1.2rem + (52 - 38) * ((100vw - 320px) / (1600 - 320)));
  }

  ${(props) => props.theme.breakpoints.md} {
    font-size: calc(1.05rem + (52 - 38) * ((100vw - 320px) / (1600 - 320)));
  }

  ${(props) => props.theme.breakpoints.lg} {
    font-size: calc(0.75rem + (52 - 38) * ((100vw - 320px) / (1600 - 320)));
  }

  ${(props) => props.theme.breakpoints.xl} {
    font-size: calc(0.5rem + (52 - 38) * ((100vw - 320px) / (1600 - 320)));
  }

  ::after {
    position: absolute;
    content: '';
    left: 6vh;
    top: 50%;
    height: 0.2rem;
    width: 5vh;
    background: ${(props) => props.theme.palette.text.main};

    ${(props) => props.theme.breakpoints.md} {
      left: 7vh;
      width: 6vh;
    }
  }
`;
