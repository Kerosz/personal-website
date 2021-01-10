import Title from '@components/title';
import { Text } from '@lib/ui';
import { AboutWrapper } from './about.styles';

import bioData from '@constants/bio';

const About = () => {
  return (
    <AboutWrapper component='section' direction='column'>
      <Title subHeading='About' heading='Who am I?' />
      {bioData.map((bio) => (
        <Text key={bio.id} component='p'>
          {bio.text}
        </Text>
      ))}
    </AboutWrapper>
  );
};

export default About;
