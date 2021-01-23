import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useGlobalContext } from 'context/rootContext';

const CustomCursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 3rem;
  height: 3rem;
  background: ${(props) => props.theme.palette.text.accent};
  border-radius: 100%;
  opacity: 0.8;
  transform: translate(-50%, -50%);
  transition: all 600ms ease-in-out;
  transition-property: width, height, border;
  will-change: width, height, border;
  pointer-events: none;
  z-index: 999;

  &.hovered {
    width: 12rem;
    height: 12rem;
    opacity: 0.8;

    ::after {
      content: 'Click';
      position: absolute;
      top: 50%;
      left: 50%;
      font-weight: 700;
      color: ${(props) => props.theme.colors.gray[900]};
      transform: translate(-50%, -50%);
    }
  }
`;

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
      className={`${cursorType}`}
      style={{ left: `${mouseCoord.x}px`, top: `${mouseCoord.y}px` }}
    />
  );
};

export default Cursor;
