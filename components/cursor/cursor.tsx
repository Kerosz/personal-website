// libraries
import { useEffect, useState } from 'react';
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
  const [mouseCoord, setMouseCoord] = useState<Point>({ x: 500, y: 500 });

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

  return (
    <CustomCursor
      className={`${!!cursorType ? cursorType : ''}`}
      style={{ left: `${mouseCoord.x}px`, top: `${mouseCoord.y}px` }}
    />
  );
};

export default Cursor;
