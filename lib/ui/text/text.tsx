import { FC, forwardRef } from 'react';
// import { __DEV__ } from '@lib/utils/assertion';
import { TextWrapper } from './text.styles';
import { TextProps } from './text.types';

/**
 * Used to render a paragraph or any text element
 *
 */
const Text = forwardRef<HTMLElement, TextProps>((props, ref) => {
  const { children, component, to, ...rest } = props;

  return (
    <TextWrapper as={component} href={to} ref={ref} {...rest}>
      {children}
    </TextWrapper>
  );
});

// if (__DEV__) {
//   Text.displayName = 'Text';
// }

export default Text;
