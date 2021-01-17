import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

/**
 * Behaves just like `useEffect` but it skips the first render and runs the effect function everytime the dependecy array changes
 *
 * @param effect Imperative function that can return a cleanup function
 * @param deps If present, effect will only activate if the values in the list change.
 */
const useUpdateEffect = (effect: EffectCallback, deps?: DependencyList) => {
  const didMount = useRef<boolean>(false);

  useEffect((...args) => {
    if (didMount.current) {
      effect(...args);
    } else {
      didMount.current = true;
    }
  }, deps);
};

export default useUpdateEffect;
