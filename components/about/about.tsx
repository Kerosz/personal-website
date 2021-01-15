import Title from '@components/title';
import { Text } from '@lib/ui';
import { AboutWrapper } from './about.styles';
import { useInView } from 'react-intersection-observer';

import bioData from '@constants/bio';

const About = () => {
  return (
    <AboutWrapper component='section' direction='column'>
      <Title subHeading='Introduction' heading='Who am I?' />
      {bioData.map((bio) => (
        <Text
          key={bio.id}
          component='p'
          dangerouslySetInnerHTML={{ __html: bio.text }}
        />
      ))}
    </AboutWrapper>
  );
};

export default About;
