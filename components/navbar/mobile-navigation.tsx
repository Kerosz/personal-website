import Link from 'next/link';
import Branding from './branding';
import { FC, useEffect, useState } from 'react';
import { isBrowser } from '@lib/utils/dom';
import { MobileNavWrapper, BurgerMenu } from './navigation.styles';
import { Container, Flex } from '@lib/ui';

const TopNavigation: FC = () => {
  const [displayValue, setdisplayValue] = useState<boolean>(true);

  let prevScrollPosition = isBrowser ? window.pageYOffset : 0;
  const getNavigationCurrentDisplayValue = () => {
    const currentScrollPosition = isBrowser ? window.pageYOffset : 0;

    if (prevScrollPosition > currentScrollPosition) {
      setdisplayValue(true);
    } else {
      setdisplayValue(false);
    }

    prevScrollPosition = currentScrollPosition;
  };

  useEffect(() => {
    document.addEventListener('scroll', getNavigationCurrentDisplayValue);

    return () =>
      document.removeEventListener('scroll', getNavigationCurrentDisplayValue);
  }, []);

  return (
    <MobileNavWrapper component='header'>
      <Container maxW='99.2%'>
        <Flex justify='space-between' align='center'>
          <Link href='/'>
            <Branding cursor='pointer' />
          </Link>

          <BurgerMenu className='mobile'>
            <span />
            <span />
          </BurgerMenu>
        </Flex>
      </Container>
    </MobileNavWrapper>
  );
};

export default TopNavigation;
