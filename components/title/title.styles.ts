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
    font-size: 7.2vw;
    margin: 4.7% 0 13%;

    ${(props) => props.theme.breakpoints.xs} {
      margin: 4.4% 0 11%;
      font-size: 6.1vw;
    }

    ${(props) => props.theme.breakpoints.sm} {
      margin: 3.7% 0 9.5%;
      font-size: 6.1vw;
    }

    ${(props) => props.theme.breakpoints.md} {
      font-size: 6vw;
    }
  }
`;
