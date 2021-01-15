import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import useIsVisible, { Options as ViewOptions } from './use-is-visible';

interface Options {
  /** Variant name for the `initial` phase */
  initial?: string;
  /** Variant name for the `animate` phase */
  animate?: string;
  /** Threshold value for intersection observer*/
  threshold?: number | number[];
  /** Overrides options for the intersection observer */
  viewOptions?: ViewOptions;
}

export default function useAnimationView(args: Options) {
  const {
    initial = 'visible',
    animate = 'animate',
    threshold = 0.75,
    viewOptions,
  } = args;

  const animation = useAnimation();
  const [ref, visible] = useIsVisible(viewOptions || { threshold: threshold });

  useEffect(() => {
    if (visible) {
      animation.start(initial);
    } else {
      animation.start(animate);
    }
  }, [animation, visible]);

  return { ref, animation };
}
