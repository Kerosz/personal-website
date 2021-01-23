import useIsVisible from '@hooks/use-is-visible';
import { useUpdateEffect } from '@lib/utils/react-helpers';
import { useGlobalContext } from 'context/rootContext';

/**
 * A hook that can be used to set the current active link path of the page.
 *
 * It returns a `ref` which should be assigned to a DOM element that will be watched and change the path when in view
 *
 * @param {string} path The path to be set
 */
const useActiveLink = (path: string) => {
  const { setActivePath } = useGlobalContext();
  const { ref, visible } = useIsVisible<HTMLElement>({ threshold: 0.02 });

  useUpdateEffect(() => {
    if (visible) {
      setActivePath(path);
    } else {
      return;
    }
  }, [visible]);

  return ref;
};

export default useActiveLink;
