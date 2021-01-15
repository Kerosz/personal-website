import { useEffect, useRef, useState } from 'react';

import useStringifyMemo from './use-stringify-memo';

export interface Options extends IntersectionObserverInit {
  /** Only trigger the inView callback once */
  triggerOnce?: boolean;
}

export default function useIsVisible<T extends HTMLElement = HTMLElement>(
  args: Options
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  const options = useStringifyMemo(args);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      const { isIntersecting, intersectionRatio } = entry;

      if (isIntersecting && intersectionRatio > 0) {
        setVisible(true);
      } else {
        if (options.triggerOnce) return;

        setVisible(false);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [ref, visible] as const;
}
