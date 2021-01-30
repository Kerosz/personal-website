// libraries
import { useEffect, useState } from 'react';
import { isTouch } from '@lib/utils/assertion';
// context
import { useGlobalContext } from 'context/root-context';
// styles
import { CustomCursor } from './cursor.styles';

interface Point {
  x: number;
  y: number;
}

const Cursor = () => {
  const { cursorType } = useGlobalContext();
  const [mouseCoord, setMouseCoord] = useState<Point>({ x: 275, y: 275 });

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  function onMouseMove(event: MouseEvent) {
    const { pageX: x, pageY: y } = event;

    setMouseCoord({ x, y });
  }

  const touch = isTouch();

  return !touch ? (
    <CustomCursor
      className={`${!!cursorType ? cursorType : ''}`}
      style={{ left: `${mouseCoord.x}px`, top: `${mouseCoord.y}px` }}
    />
  ) : null;
};

export default Cursor;
