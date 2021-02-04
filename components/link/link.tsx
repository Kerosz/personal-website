// libraries
import NextLink from 'next/link';
import { forwardRef, ReactElement, ReactNode } from 'react';
// hooks
import useCursor from '@hooks/use-cursor';

export interface LinkProps {
  to: string;
  target?: boolean;
  children?: ReactNode | ReactNode[] | ReactElement;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { to, target = false, children, ...restProps } = props;
  const onCursor = useCursor();

  return target ? (
    <a
      ref={ref}
      href={to}
      target='_blank'
      rel='noopener noreferrer'
      {...restProps}
      onMouseEnter={() => onCursor('hovered')}
      onMouseLeave={() => onCursor('default')}>
      {children}
    </a>
  ) : (
    <NextLink href={to} {...restProps}>
      <div
        style={{ fontSize: 'inherit' }}
        onMouseEnter={() => onCursor('hovered')}
        onMouseLeave={() => onCursor('default')}>
        {children}
      </div>
    </NextLink>
  );
});

export default Link;
