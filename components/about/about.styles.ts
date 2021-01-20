import styled from 'styled-components';
import { Flex } from '@lib/ui';

export const AboutWrapper = styled(Flex)`
  padding: 31.5% 0 4%;

  ${(props) => props.theme.breakpoints.sm} {
    padding: 21.5% 0 4%;
  }

  ${(props) => props.theme.breakpoints.md} {
    padding: 11.5% 0 4%;
  }

  & p {
    font-size: 6.5vw;
    line-height: 9.3vw;
    margin: 0;
    margin-bottom: 7.4%;

    ${(props) => props.theme.breakpoints.xs} {
      font-size: 5.8vw;
      line-height: 8.5vw;
      margin-bottom: 6.6%;
    }

    ${(props) => props.theme.breakpoints.sm} {
      font-size: 5.15vw;
      line-height: 7.6vw;
      margin-bottom: 6.3%;
    }

    ${(props) => props.theme.breakpoints.md} {
      font-size: 4.7vw;
      line-height: 7.2vw;
      margin-bottom: 5.6%;
    }

    ${(props) => props.theme.breakpoints.lg} {
      font-size: 4.2vw;
      line-height: 6.35vw;
      margin-bottom: 4.9%;
    }

    ${(props) => props.theme.breakpoints.xl} {
      margin-bottom: 4.4%;
    }

    & span {
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
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: ${(props) => props.theme.palette.text.main};

      ${(props) => props.theme.breakpoints.sm} {
        -webkit-text-stroke-width: 2px;
      }
    }

    &:last-of-type {
      margin: 0;
    }
  }
`;
