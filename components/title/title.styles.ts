import styled from 'styled-components';
import { Flex } from '@lib/ui';

export const TitleWrapper = styled(Flex)`
  & > h4 {
    font-size: 5vw;

    ${(props) => props.theme.breakpoints.xs} {
      font-size: 4.6vw;
    }

    ${(props) => props.theme.breakpoints.sm} {
      font-size: 3.7vw;
    }

    ${(props) => props.theme.breakpoints.md} {
      font-size: 3.3vw;
    }

    ${(props) => props.theme.breakpoints.lg} {
      font-size: 2.7vw;
    }

    ${(props) => props.theme.breakpoints.xl} {
      font-size: 2.1vw;
    }
  }

  & > h2 {
    font-size: calc(4rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
    line-height: calc(4rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
    font-weight: 700;
    margin: 4.9% 0 13%;
    text-transform: uppercase;

    ${(props) => props.theme.breakpoints.xs} {
      margin: 4.6% 0 11%;
    }

    ${(props) => props.theme.breakpoints.sm} {
      margin: 4% 0 9.5%;
    }
  }
`;
