import styled from 'styled-components';
import { Flex } from '@lib/ui';

export const AboutWrapper = styled(Flex)`
  margin: 7% 0;

  ${(props) => props.theme.breakpoints.sm} {
    margin: 13.5% 0;
  }

  & > p {
    font-size: 6.4vw;
    line-height: 9.5vw;
    margin: 0;
    margin-bottom: 6.8%;

    ${(props) => props.theme.breakpoints.xs} {
      font-size: 5.8vw;
      line-height: 8.7vw;
      margin-bottom: 6.1%;
    }

    ${(props) => props.theme.breakpoints.sm} {
      font-size: 5.3vw;
      line-height: 8.1vw;
      margin-bottom: 5.7%;
    }

    ${(props) => props.theme.breakpoints.md} {
      font-size: 5vw;
      line-height: 7.6vw;
      margin-bottom: 5%;
    }

    ${(props) => props.theme.breakpoints.lg} {
      font-size: 4.7vw;
      line-height: 7vw;
      margin-bottom: 4.2%;
    }

    ${(props) => props.theme.breakpoints.xl} {
      line-height: 6.8vw;
      margin-bottom: 3.7%;
    }

    & > span {
      color: ${(props) =>
        props.theme.mode === 'dark'
          ? props.theme.colors.green[400]
          : props.theme.colors.red[700]};
      font-weight: 500;
      font-size: inherit;
      font-style: italic;
      text-decoration: line-through;
    }

    & .bold {
      text-decoration: none;
      font-weight: 700;
      color: ${(props) => props.theme.palette.text.main};
      -webkit-text-fill-color: ${(props) => props.theme.palette.background};
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: ${(props) => props.theme.palette.text.main};
    }

    &:last-of-type {
      margin: 0;
    }
  }
`;
