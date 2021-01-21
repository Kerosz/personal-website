import useIsVisible from '@hooks/use-is-visible';
import useUpdateEffect from '@hooks/use-update-effect';
import { useGlobalContext } from 'context/rootContext';
import { addActivePath } from '@actions/ui.action';

export default function useActiveLink(path: string) {
  const { uiDispatch } = useGlobalContext();
  const { ref, visible } = useIsVisible<HTMLDivElement>({ threshold: 0.03 });

  useUpdateEffect(() => {
    if (visible) {
      uiDispatch(addActivePath(path));
    }
  }, [visible]);

  return ref;
}
