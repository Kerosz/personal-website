import useIsVisible from '@hooks/use-is-visible';
import useUpdateEffect from '@hooks/use-update-effect';
import { useGlobalContext } from 'context/rootContext';
import { addActivePath } from '@actions/ui.action';

const useActiveLink = (path: string) => {
  const { uiDispatch } = useGlobalContext();
  const { ref, visible } = useIsVisible<HTMLElement>({ threshold: 0.02 });

  useUpdateEffect(() => {
    if (visible) {
      uiDispatch(addActivePath(path));
    } else {
      return;
    }
  }, [visible]);

  return ref;
};

export default useActiveLink;
