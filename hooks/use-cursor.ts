import { useGlobalContext } from 'context/root-context';
import { isNull } from '@lib/utils/assertion';

/**
 * A hook that can be used to change the current type of the cursor being rendered on the page
 */
export default function useCursor() {
  const { cursorStyle, setCursorType } = useGlobalContext();

  const changeCursorType = (newCursorType: string) => {
    let cursorType;

    if (newCursorType && cursorStyle.includes(newCursorType)) {
      cursorType = newCursorType;
    } else {
      cursorType = null;
    }

    if (!isNull(cursorType)) {
      setCursorType(cursorType);
    }
  };

  return changeCursorType;
}
