import { FC, forwardRef } from 'react';
import { __DEV__ } from '@lib/utils/assertion';
import { TextWrapper } from './text.styles';
import { TextProps } from './text.types';

/**
 * Used to render a paragraph or any text element
 *
 */
const Text: FC<TextProps> = forwardRef((props, textRef) => {
  const { children, component, to, ...rest } = props;

  return (
    <TextWrapper as={component} href={to} ref={textRef} {...rest}>
      {children}
    </TextWrapper>
  );
});

if (__DEV__) {
  Text.displayName = 'Text';
}

export default Text;
