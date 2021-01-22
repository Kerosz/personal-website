import { Ref, RefObject, MutableRefObject } from 'react';
import { isFunction } from './assertion';

type ReactRef<T> = Ref<T> | RefObject<T> | MutableRefObject<T>;

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
