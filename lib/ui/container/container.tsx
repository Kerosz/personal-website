import { FC, forwardRef } from 'react';
import { HTMLUiProps } from '../ui.types';
import { ContainerWrapper } from './container.stykes';

export interface ContainerProps extends HTMLUiProps<'div'> {
  maxW?: string;
  fluid?: boolean;
}

const Container: FC<ContainerProps> = forwardRef((props, ref) => {
  const { children, maxW = '1260px', fluid = false, ...rest } = props;

  return (
    <ContainerWrapper ref={ref} maxW={maxW} fluid={fluid} {...rest}>
      {children}
    </ContainerWrapper>
  );
});

export default Container;
