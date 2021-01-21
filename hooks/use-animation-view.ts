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

/**
 * A hook that can be used to start/stop and sequence animations on a component if an `element` is in the viewport.
 *
 * It returns a `ref` which should be assigned to a DOM element that will be watched and an `animation` - `AnimationControls` that should be passed to the `animate` property of the component you want to animate.
 *
 * @example
 * ```jsx
 *    export default function MyComponent(props) {
 *      const [ref, animation] = useAnimationView({
 *        initial: 'hidden',
 *        animate: 'visible',
 *      });
 *
 *      return (<motion.div
 *               ref={ref}
 *               variants={exampleVariants}
 *               initial='hidden'
 *               animate={animation} />
 *   )}
 * ```
 */
export default function useAnimationView(args: Options) {
  const {
    initial = 'hidden',
    animate = 'visible',
    threshold = 0.5,
    viewOptions,
  } = args;

  const animation = useAnimation();
  const { ref, visible } = useIsVisible(viewOptions || { threshold });

  useEffect(() => {
    if (visible) {
      animation.start(animate);
    } else {
      animation.start(initial);
    }
  }, [animation, visible]);

  return { ref, animation } as const;
}
