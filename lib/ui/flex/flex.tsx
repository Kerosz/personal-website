import { FC } from 'react';
import { HTMLUiProps } from '../ui.types';
import { FlexWrapper } from './flex.styles';

export interface FlexOptions {
  /**
   * Shorthand for `alignItems` style prop
   */
  align?: string;
  /**
   * Shorthand for `justifyContent` style prop
   */
  justify?: string;
  /**
   * Shorthand for `flexWrap` style prop
   */
  wrap?: string;
  /**
   * Shorthand for `flexDirection` style prop
   */
  direction?: string;
  /**
   * Shorthand for `flexBasis` style prop
   */
  basis?: string;
  /**
   * Shorthand for `flexGrow` style prop
   */
  grow?: string;
  /**
   * Shorthand for `flexShrink` style prop
   */
  shrink?: string;
  /**
   * Sets the flex `height` to 0
   */
  noHeight?: boolean;
}

export interface FlexProps extends HTMLUiProps<'div'>, FlexOptions {}

const Flex: FC<FlexProps> = (props) => {
  const { children, ...rest } = props;

  return <FlexWrapper {...rest}>{children}</FlexWrapper>;
};

export default Flex;
