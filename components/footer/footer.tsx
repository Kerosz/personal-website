import styled from 'styled-components';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { Flex, Container, Devider, Text } from '@lib/ui';

export const FooterWrapper = styled(Flex)`
  padding: 21.5% 0 6.5%;

  ${(props) => props.theme.breakpoints.sm} {
    padding: 11.5% 0 6.5%;
  }

  ${(props) => props.theme.breakpoints.md} {
    padding: 5.5% 0 6.5%;
  }
`;

export const Powered = styled(Text)`
  display: flex;
  align-items: center;
  font-size: calc(0.5rem + (60 - 38) * ((100vw - 320px) / (1600 - 320)));

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

const Footer: FC = () => {
  return (
    <FooterWrapper component='footer'>
      <Container maxW='88%'>
        <Devider />
        <Flex justify='center'>
          <Powered>
            Powered by
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://nextjs.org'>
              &nbsp;Next.js
            </a>
            <Line />
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://github.com/Kerosz/personal-website'>
              Source code
            </a>
          </Powered>
        </Flex>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
