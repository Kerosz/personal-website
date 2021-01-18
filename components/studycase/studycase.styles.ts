import styled from 'styled-components';
import { Flex, Text } from '@lib/ui';

export const StudycaseWrapper = styled(Flex)`
  padding: 7% 0;

  ${(props) => props.theme.breakpoints.sm} {
    padding: 11.5% 0;
  }
`;

export const Project = styled(Flex)``;

export const Marquee = styled(Flex)`
  width: 100vw;
  left: -5.9vw;
  margin: 0 auto;
  white-space: nowrap;
  display: block;
  transform: rotate(-1.5deg);
`;

export const MarqueeText = styled(Text)`
  display: inline-block;
  overflow: hidden;
  text-indent: 0;
  font-weight: 600;
  font-size: calc(6.4rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
  line-height: calc(10.5rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
  border-top: 1px solid ${(props) => props.theme.palette.text.main};
  border-bottom: 1px solid ${(props) => props.theme.palette.text.main};
  will-change: transform;
  margin-top: 7%;
  margin-bottom: 11%;

  -webkit-text-fill-color: ${(props) => props.theme.palette.background};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.palette.text.main};

  ${(props) => props.theme.breakpoints.sm} {
    margin-top: 4%;
    margin-bottom: 8%;
    border-width: 2px;
    line-height: calc(12rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
    -webkit-text-stroke-width: 2px;
  }

  :hover {
    color: ${(props) =>
      props.theme.mode === 'dark'
        ? props.theme.colors.green[400]
        : props.theme.colors.red[700]};
    -webkit-text-fill-color: ${(props) =>
      props.theme.mode === 'dark'
        ? props.theme.colors.green[400]
        : props.theme.colors.red[700]};
    -webkit-text-stroke-color: transparent;
    font-style: italic;
    text-decoration: line-through;
  }
`;

export const Content = styled(Flex)``;
