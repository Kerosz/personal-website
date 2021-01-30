// libraries
import NextLink from 'next/link';
import { forwardRef, ReactElement, ReactNode } from 'react';

export interface LinkProps {
  to: string;
  target?: boolean;
  children?: ReactNode | ReactNode[] | ReactElement;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { to, target = false, children, ...restProps } = props;

  return target ? (
    <a
      ref={ref}
      href={to}
      target='_blank'
      rel='noopener noreferrer'
      {...restProps}>
      {children}
    </a>
  ) : (
    <NextLink href={to} {...restProps}>
      {children}
    </NextLink>
  );
});

export default Link;
