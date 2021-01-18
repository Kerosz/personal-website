import styled from 'styled-components';
import { Flex } from '@lib/ui';

export const ContactWrapper = styled(Flex)`
  padding: 11.5% 0 3%;

  h2 {
    margin: 4.9% 0 8%;

    ${(props) => props.theme.breakpoints.xs} {
      margin: 4.6% 0 7%;
    }

    ${(props) => props.theme.breakpoints.sm} {
      margin: 4% 0 6%;
    }
  }

  h3 {
    font-size: calc(2.1rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
    line-height: calc(2.9rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
    margin: 1% 0;

    ${(props) => props.theme.breakpoints.sm} {
      font-size: calc(1.75rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
      line-height: calc(2.4rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
    }
  }

  a {
    font-weight: 600;
    font-size: calc(1.8rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
    line-height: calc(1.6rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
    color: ${(props) =>
      props.theme.mode === 'dark'
        ? props.theme.colors.green[400]
        : props.theme.colors.red[700]};
    margin: 1% 0;

    ${(props) => props.theme.breakpoints.sm} {
      font-size: calc(1.2rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
    }

    ${(props) => props.theme.breakpoints.md} {
      font-size: calc(1.1rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
    }
  }
`;
