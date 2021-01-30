import useIsVisible from '@hooks/use-is-visible';
import { useUpdateEffect } from '@lib/utils/react-helpers';
import { useGlobalContext } from 'context/root-context';
import { useCallback } from 'react';

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

  const changeActiveLink = useCallback(() => {
    if (visible) {
      setActivePath(path);
    } else {
      return;
    }
  }, [visible]);

  useUpdateEffect(() => {
    changeActiveLink();
  }, [visible]);

  return ref;
};

export default useActiveLink;
