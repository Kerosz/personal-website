// components
import SectionTitle from '@components/title';
// libraries
import { FC, memo } from 'react';
import { Flex, Text } from '@lib/ui';
import { mergeRefs } from '@lib/utils/react-helpers';
import { IBio } from '@lib/api';
// hooks
import useIsVisible from '@hooks/use-is-visible';
import useThemeMode from '@hooks/use-theme-mode';
import useActiveLink from '@hooks/use-active-link';
// styles
import { AboutWrapper } from './about.styles';

export interface AboutProps {
  data: IBio[];
}

const About: FC<AboutProps> = memo(({ data }) => {
  const linkRef = useActiveLink('/#introduction');
  const { ref, visible } = useIsVisible({ threshold: 0.03 });
  const _ = useThemeMode({ triggerChange: visible, save: false });

  const mergedRefs = mergeRefs<HTMLElement>(ref, linkRef);

  return (
    <AboutWrapper id='introduction' component='section' direction='column'>
      <SectionTitle subHeading='Introduction' heading='Who am I?' />
      <Flex direction='column' ref={mergedRefs}>
        {data.map((bio) => (
          <Text
            key={bio._id}
            component='p'
            dangerouslySetInnerHTML={{ __html: bio.text }}
          />
        ))}
      </Flex>
    </AboutWrapper>
  );
});

export default About;
