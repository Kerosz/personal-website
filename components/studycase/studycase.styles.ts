import styled from 'styled-components';
import { Flex } from '@lib/ui';

export const StudycaseWrapper = styled(Flex)`
  padding: 7% 0;

  ${(props) => props.theme.breakpoints.sm} {
    padding: 11.5% 0;
  }
`;

export const Project = styled(Flex)``;
