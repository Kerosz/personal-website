import { forwardRef } from 'react';

export interface IconProps {
  className?: string;
}

export const ArrowRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { className = '', ...restProps } = props;

  return (
    <svg
      ref={ref}
      viewBox='0 0 24 24'
      focusable='false'
      role='presentation'
      className={className}
      {...restProps}>
      <path
        fill='none'
        strokeLinejoin='bevel'
        stroke='currentcolor'
        strokeWidth='3'
        strokeLinecap='square'
        d='M12 3l9 9-9 9m-9-9h16.714H3z'></path>
    </svg>
  );
});
