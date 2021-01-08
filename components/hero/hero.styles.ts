import { Text as UiText } from '@lib/ui';
import styled from 'styled-components';

export const Text = styled(UiText)`
  font-size: 9vw;
  font-weight: 300;
  margin: 0 0 2.5%;

  & > span {
    color: #a0aec0;
    font-size: inherit;
    font-family: ${(props) => props.theme.font.family.secondary};
    font-weight: 300;
  }

  @media screen and (max-width: 40em) {
    font-size: 11vw;
    margin: 0 0 5%;
  }

  @media screen and (max-width: 28em) {
    font-size: 11.5vw;
    margin: 0 0 7%;
  }
`;
