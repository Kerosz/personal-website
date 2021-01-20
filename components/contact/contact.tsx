import SectionTitle from '@components/title';
import MotionWord from '@animations/motion-word';
import { Flex, Text } from '@lib/ui';
import { ContactWrapper } from './contact.styles';

const sentence =
  "Have something in mind and want to collaborate? Reach out and let's do it.";

const Contact = () => {
  return (
    <ContactWrapper id='contact' component='section' direction='column'>
      <SectionTitle heading='Let’s talk' subHeading='Contact' />
      <Flex component='h3' wrap='wrap'>
        {sentence.split(' ').map((word, idx) => (
          <MotionWord
            key={`${word}-motion-${idx}`}
            initialState='-50%'
            initialDelay={0.35}
            index={idx}>
            {word}&nbsp;
          </MotionWord>
        ))}
      </Flex>
      <Text component='a' to='mailto:andrei@chirila.dev' fit>
        <MotionWord initialDelay={0.35 + sentence.split(' ').length * 0.025}>
          andrei@chirila.dev
        </MotionWord>
      </Text>
    </ContactWrapper>
  );
};

export default Contact;
