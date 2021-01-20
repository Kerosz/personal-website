import styled from 'styled-components';
import { FC } from 'react';
import { Flex, Container } from '@lib/ui';

export const FooterWrapper = styled(Flex)`
  padding: 21.5% 0 4%;

  ${(props) => props.theme.breakpoints.sm} {
    padding: 11.5% 0 4%;
  }

  ${(props) => props.theme.breakpoints.md} {
    padding: 5.5% 0 4%;
  }
`;

const Footer: FC = () => {
  return (
    <FooterWrapper component='footer'>
      <Container maxW='88%'>Footer</Container>
    </FooterWrapper>
  );
};

export default Footer;
