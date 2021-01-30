import styled, { css } from 'styled-components';
import { Flex } from '@lib/ui';

export const TopWrapper = styled(Flex)`
  height: 42vh;
  align-items: flex-end;

  > h1 {
    font-family: ${(props) => props.theme.font.family.heading};
    font-size: calc(6.55rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));
    text-transform: uppercase;
    margin-bottom: 4.5%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 58vh;
`;
