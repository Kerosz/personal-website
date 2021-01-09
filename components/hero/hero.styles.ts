import { Text as UiText, Flex } from '@lib/ui';
import styled from 'styled-components';

export const HeroWrapper = styled(Flex)`
  margin-top: 10rem;

  @media screen and (max-width: 40em) {
    padding: 2rem 0;
  }

  @media screen and (max-width: 28em) {
    padding: 3.5rem 0;
  }
`;

export const Text = styled(UiText)`
  font-size: 11.7vw;
  font-weight: 300;
  margin: 0 0 11%;

  & > span {
    color: #a0aec0;
    font-size: inherit;
    font-family: ${(props) => props.theme.font.family.secondary};
    font-weight: 300;
  }

  ${(props) => props.theme.breakpoints.xs} {
    font-size: 11.5vw;
    margin: 0 0 9%;
  }

  ${(props) => props.theme.breakpoints.sm} {
    font-size: 11vw;
    margin: 0 0 6.5%;
  }

  ${(props) => props.theme.breakpoints.md} {
    margin: 0 0 4.5%;
  }

  ${(props) => props.theme.breakpoints.lg} {
    font-size: 10.5vw;
    margin: 0 0 3.3%;
  }

  ${(props) => props.theme.breakpoints.xl} {
    font-size: 10vw;
    margin: 0 0 2.1%;
  }
`;
