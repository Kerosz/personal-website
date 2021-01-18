import styled from 'styled-components';
import { FC } from 'react';
import { Flex, Container } from '@lib/ui';

export const FooterWrapper = styled(Flex)`
  padding: 4% 0;
`;

const Footer: FC = () => {
  return (
    <FooterWrapper component='footer'>
      <Container maxW='88%'>Footer</Container>
    </FooterWrapper>
  );
};

export default Footer;
