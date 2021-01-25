// libraries
import { FC } from 'react';
import { Flex, Container, Devider } from '@lib/ui';
// hooks
import useCursor from '@hooks/use-cursor';
// styles
import { FooterWrapper, Powered, Line } from './footer.styles';

const Footer: FC = () => {
  const onCursor = useCursor();

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
              href='https://nextjs.org'
              onMouseEnter={() => onCursor('hovered')}
              onMouseLeave={() => onCursor('default')}>
              &nbsp;Next.js
            </a>
            <Line />
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://github.com/Kerosz/personal-website'
              onMouseEnter={() => onCursor('hovered')}
              onMouseLeave={() => onCursor('default')}>
              Source code
            </a>
          </Powered>
        </Flex>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
