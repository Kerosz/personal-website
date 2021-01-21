import { Children, forwardRef } from 'react';
import { RatioWrapper } from './ratio.styles';
import { HTMLUiProps } from '../ui.types';

export interface RatioOptions {
  /** The aspect ratio of the component.Some values could be: `21/9`, `16/9`, `4/3` */
  ratio?: number;
  /** Responsive ratio, it is automatiaclly calculated, but it can be overwritten */
  responsiveRatio?: number;
}

export interface RatioProps extends HTMLUiProps<'div'>, RatioOptions {}

/**
 * Component used to adjust media aspect ratio. It can be used for `img` and `video` elements
 */
const Ratio = forwardRef<HTMLDivElement, RatioProps>((props, ref) => {
  const { children, ratio = 4 / 3, ...restProps } = props;

  // Forces only one children element
  const childEl = Children.only(children);

  const responsiveRatioValue = (1 / ratio) * 100;

  return (
    <RatioWrapper
      ref={ref}
      responsiveRatio={responsiveRatioValue}
      {...restProps}>
      {childEl}
    </RatioWrapper>
  );
});

export default Ratio;
