import SectionTitle from '@components/title';
import { Flex, Text } from '@lib/ui';
import { AboutWrapper } from './about.styles';
import useIsVisible from '@hooks/use-is-visible';
import useThemeMode from '@hooks/use-theme-mode';
import useActiveLink from '@hooks/use-active-link';

import bioData from '@constants/bio';
import { mergeRefs } from '@lib/utils/react-helpers';

const About = () => {
  const linkRef = useActiveLink('/#introduction');
  const { ref, visible } = useIsVisible({ threshold: 0.03 });
  const _ = useThemeMode({ triggerChange: visible, save: false });

  const mergedRefs = mergeRefs<HTMLElement>(ref, linkRef);

  return (
    <AboutWrapper
      ref={linkRef}
      id='introduction'
      component='section'
      direction='column'>
      <SectionTitle subHeading='Introduction' heading='Who am I?' />
      <Flex direction='column' ref={mergedRefs}>
        {bioData.map((bio) => (
          <Text
            key={bio.id}
            component='p'
            dangerouslySetInnerHTML={{ __html: bio.text }}
          />
        ))}
      </Flex>
    </AboutWrapper>
  );
};

export default About;
