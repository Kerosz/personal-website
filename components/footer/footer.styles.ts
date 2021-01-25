import styled from 'styled-components';
import { Flex } from '@lib/ui';

export const FooterWrapper = styled(Flex)`
  padding: 9.5% 0 4.5%;

  ${(props) => props.theme.breakpoints.sm} {
    padding: 9.5% 0 10.5%;
  }

  ${(props) => props.theme.breakpoints.md} {
    padding: 5.5% 0 9%;
  }

  ${(props) => props.theme.breakpoints.lg} {
    padding: 5.5% 0 7.5%;
  }
`;

export const Powered = styled(Flex)`
  display: flex;
  align-items: center;
  font-size: calc(1.45rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  padding-top: 2.5%;

  ${(props) => props.theme.breakpoints.xs} {
    font-size: calc(1.3rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  }

  ${(props) => props.theme.breakpoints.sm} {
    font-size: calc(1rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  }

  ${(props) => props.theme.breakpoints.md} {
    font-size: calc(0.83rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  }

  ${(props) => props.theme.breakpoints.lg} {
    font-size: calc(0.65rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  }

  ${(props) => props.theme.breakpoints.xl} {
    font-size: calc(0.5rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
  }

  > a {
    font-size: inherit;

    :hover {
      color: ${(props) =>
        props.theme.mode === 'dark'
          ? props.theme.colors.green[400]
          : props.theme.colors.red[700]};
    }
  }
`;

export const Line = styled.div`
  width: 2.7vw;
  height: 0.1rem;
  background: ${(props) => props.theme.palette.text.main};
  margin: 1.25vw;
`;
