import * as React from 'react';
import { isFunction } from './assertion';

type ReactRef<T> =
  | React.Ref<T>
  | React.RefObject<T>
  | React.MutableRefObject<T>;

/**
 * It accepts any number of refs to merge and returns a single callback ref that will properly set each ref passed, whether that ref is a function or a ref object.
 *
 * @param refs refs to assign to value to
 */
export function mergeRefs<T>(...refs: ReactRef<T>[]) {
  const filteredRefs = refs.filter(Boolean);

  if (!filteredRefs.length) return null;
  if (filteredRefs.length === 1) return filteredRefs[0];

  return (inst: T) => {
    for (const ref of filteredRefs) {
      if (isFunction(ref)) {
        ref(inst);

        return;
      }

      try {
        // @ts-ignore
        ref.current = inst;
      } catch (error) {
        throw new Error(`Unable to assign value '${inst}' to ref '${ref}'`);
      }
    }
  };
}

export function useDimensions(ref: any) {
  const dimensions = React.useRef({ width: 0, height: 0 });

  React.useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
}
