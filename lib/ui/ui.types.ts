import { ElementType, ComponentPropsWithoutRef } from 'react';

export type As<Props = any> = ElementType<Props>;

export type PropsOf<T extends As> = ComponentPropsWithoutRef<T> & {
  as?: As;
};

export type HTMLUiProps<T extends As> = Omit<
  PropsOf<T>,
  T extends 'svg' ? 'ref' | 'children' : 'ref'
> & { as?: As };
