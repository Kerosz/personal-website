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

export const Add = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { className = '', ...restProps } = props;

  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      viewBox='0 0 512 512'
      className={className}
      {...restProps}>
      <g>
        <g>
          <polygon points='276,236 276,0 236,0 236,236 0,236 0,276 236,276 236,512 276,512 276,276 512,276 512,236   ' />
        </g>
      </g>
    </svg>
  );
});
