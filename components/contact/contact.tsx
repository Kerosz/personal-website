// components
import SectionTitle from '@components/title';
import MotionWord from '@animations/motion-word';
// libraries
import { FC, memo } from 'react';
import { Flex, Text } from '@lib/ui';
import { IContact } from '@lib/api';
// hooks
import useActiveLink from '@hooks/use-active-link';
import useCursor from '@hooks/use-cursor';
// styles
import { ContactWrapper } from './contact.styles';

const Contact: FC<{ data: IContact }> = memo(({ data }) => {
  const onCursor = useCursor();
  const linkRef = useActiveLink('/#contact');

  return (
    <ContactWrapper id='contact' component='section' direction='column'>
      <SectionTitle heading='Let’s talk' subHeading='Contact' />
      <Flex ref={linkRef} component='h3' wrap='wrap'>
        {data.content.split(' ').map((word, idx) => (
          <MotionWord
            key={`${word}-motion-${idx}`}
            initialState='-50%'
            initialDelay={0.35}
            index={idx}>
            {word}&nbsp;
          </MotionWord>
        ))}
      </Flex>
      <Text
        component='a'
        to={`mailto:${data.email}`}
        fit
        onMouseEnter={() => onCursor('hovered')}
        onMouseLeave={() => onCursor('default')}>
        <MotionWord
          initialDelay={0.35 + data.content.split(' ').length * 0.025}>
          {data.email}
        </MotionWord>
      </Text>
    </ContactWrapper>
  );
});

export default Contact;
