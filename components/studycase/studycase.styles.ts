import styled, { css } from 'styled-components';
import { Flex, Text } from '@lib/ui';

export const TopWrapper = styled(Flex)`
  flex-flow: column;
  height: 50vh;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
  margin-top: 1.5%;

  ${(props) => props.theme.breakpoints.xs} {
    margin-top: 0;
  }

  ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
    height: 43vh;
  }

  .finish-stat {
    font-size: calc(1.45rem + (50 - 38) * ((100vw - 320px) / (1600 - 320)));
    font-weight: 600;
    margin: 0;
    align-self: flex-start;
    transform: translateX(0.3rem);

    ${(props) => props.theme.breakpoints.xs} {
      font-size: calc(1.25rem + (50 - 38) * ((100vw - 320px) / (1600 - 320)));
    }

    ${(props) => props.theme.breakpoints.sm} {
      font-size: calc(1.1rem + (50 - 38) * ((100vw - 320px) / (1600 - 320)));
    }

    ${(props) => props.theme.breakpoints.md} {
      font-size: calc(0.95rem + (50 - 38) * ((100vw - 320px) / (1600 - 320)));
    }

    ${(props) => props.theme.breakpoints.lg} {
      font-size: calc(0.75rem + (50 - 38) * ((100vw - 320px) / (1600 - 320)));
    }

    ${(props) => props.theme.breakpoints.xl} {
      font-size: calc(0.65rem + (50 - 38) * ((100vw - 320px) / (1600 - 320)));
    }

    ${(props) => props.theme.breakpoints.xxl} {
      font-size: calc(0.45rem + (50 - 38) * ((100vw - 320px) / (1600 - 320)));
    }
  }

  > h1 {
    font-weight: 700;
    margin: 0;
    font-family: ${(props) => props.theme.font.family.heading};
    font-size: calc(6rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
    line-height: calc(5.8rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
    text-transform: uppercase;

    ${(props) => props.theme.breakpoints.sm} {
      font-size: calc(6.25rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
      line-height: calc(5rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
    }

    ${(props) => props.theme.breakpoints.lg} {
      font-size: calc(5.75rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
    }

    ${(props) => props.theme.breakpoints.xl} {
      font-size: calc(5.55rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
    }

    ${(props) => props.theme.breakpoints.xxl} {
      font-size: calc(6.65rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  flex-grow: 1;
  margin: 0 auto;

  ${(props) => props.theme.breakpoints.md} {
    height: 57vh;
  }
`;

export const BodyWrapper = styled(Flex)`
  margin: 3% 0 1.5%;

  ${(props) => props.theme.breakpoints.xxl} {
    margin: 1.5% 0 1%;
  }
`;

export const SectionWrapper = styled(Flex)`
  margin: 16.5% 0 2.5%;

  ${(props) => props.theme.breakpoints.xs} {
    margin: 12% 0 2.5%;
  }

  ${(props) => props.theme.breakpoints.sm} {
    margin: 9.5% 0 2.5%;
  }

  ${(props) => props.theme.breakpoints.md} {
    margin: 7.5% 0 2.5%;
  }

  ${(props) => props.theme.breakpoints.lg} {
    margin: 6% 0 1.5%;
  }

  ${(props) => props.theme.breakpoints.xxl} {
    margin: 2% 0 1%;
  }
`;

export const SectionTitle = styled(Text)`
  font-size: calc(3.55rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  line-height: calc(3.9rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  margin: 0;
  margin-bottom: 7%;

  ${(props) => props.theme.breakpoints.xs} {
    margin-bottom: 5.5%;
  }

  ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 4%;
  }

  ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 3%;
  }

  ${(props) => props.theme.breakpoints.lg} {
    margin-bottom: 2%;
  }
`;

export const Paragraph = styled(Text)`
  font-size: inherit;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const NormalSize = styled.div`
  font-size: calc(2rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  font-weight: 300;
  line-height: calc(2.75rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  margin: 0;

  ${(props) => props.theme.breakpoints.sm} {
    font-size: calc(1.68rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
    line-height: calc(2.4rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  }

  ${(props) => props.theme.breakpoints.md} {
    font-size: calc(1.15rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
    line-height: calc(1.9rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  }

  ${(props) => props.theme.breakpoints.lg} {
    font-size: calc(0.95rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
    line-height: calc(1.8rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  }

  ${(props) => props.theme.breakpoints.xl} {
    font-size: calc(0.85rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
    line-height: calc(1.7rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  }

  ${(props) => props.theme.breakpoints.xxl} {
    font-size: calc(0.7rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
    line-height: calc(2rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  }
`;

export const LargerSize = styled.div`
  font-size: calc(2.35rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  font-weight: 400;
  line-height: calc(2.95rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  margin: 0;

  ${(props) => props.theme.breakpoints.sm} {
    font-size: calc(2.03rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
    line-height: calc(2.6rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  }

  ${(props) => props.theme.breakpoints.md} {
    font-size: calc(1.5rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
    line-height: calc(2.1rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  }

  ${(props) => props.theme.breakpoints.lg} {
    font-size: calc(1.3rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
    line-height: calc(2rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  }

  ${(props) => props.theme.breakpoints.xl} {
    font-size: calc(1.2rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
    line-height: calc(1.9rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  }

  ${(props) => props.theme.breakpoints.xxl} {
    font-size: calc(1.05rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
    line-height: calc(2rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  }
`;
