import styled from 'styled-components';
import { Flex } from '@lib/ui';

export const ContactWrapper = styled(Flex)`
  h2 {
    margin: 4.9% 0 6%;

    ${(props) => props.theme.breakpoints.xs} {
      margin: 4.6% 0 5%;
    }

    ${(props) => props.theme.breakpoints.sm} {
      margin: 4% 0 4%;
    }
  }

  h3 {
    font-size: calc(1.75rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
    line-height: calc(2.4rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
    margin: 1% 0;
  }

  a {
    font-weight: 600;
    font-size: calc(1.5rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
    line-height: calc(1.6rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
    color: ${(props) =>
      props.theme.mode === 'dark'
        ? props.theme.colors.green[400]
        : props.theme.colors.red[700]};
    margin: 1% 0;

    ${(props) => props.theme.breakpoints.sm} {
      font-size: calc(1.1rem + (80 - 38) * ((100vw - 320px) / (1600 - 320)));
    }
  }
`;
