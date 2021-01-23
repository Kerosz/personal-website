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

/**
 * Behaves just like `useEffect` but it skips the first render and runs the effect function everytime the dependecy array changes
 *
 * @param effect Imperative function that can return a cleanup function
 * @param deps If present, effect will only activate if the values in the list change.
 */
export function useUpdateEffect(
  effect: React.EffectCallback,
  deps?: React.DependencyList
) {
  const mounted = React.useRef<boolean>(false);

  React.useEffect((...args) => {
    if (mounted.current) {
      effect(...args);
    } else {
      mounted.current = true;
    }
  }, deps);
}
