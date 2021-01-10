import { FC, forwardRef, JSXElementConstructor } from 'react';
import { HTMLUiProps } from '../ui.types';
import { DividerWrapper } from './divider.styles';

export interface DividerOptions {
  /**
   * Sets divider orientation type
   */
  orientation?: 'vertical' | 'horizontal';
  /**
   * Sets divider variant type
   */
  variant?: 'solid' | 'dashed';
  /**
   * The CSS `color` property
   */
  color?: string;
}

export interface DividerProps extends HTMLUiProps<'hr'>, DividerOptions {
  /**
   * The wrapper element of the component
   */
  component?: string | JSXElementConstructor<any>;
}

/**
 * Element used to visually separate content.
 * It display a thin horizontal or vertical line, and renders a `hr` tag.
 */
const Divider: FC<DividerProps> = forwardRef((props, dividerRef) => {
  const { component, orientation = 'horizontal', ...rest } = props;

  return (
    <DividerWrapper
      as={component}
      orientation={orientation}
      ref={dividerRef}
      {...rest}
    />
  );
});

export default Divider;
