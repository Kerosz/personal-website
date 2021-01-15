import { useMemo } from 'react';

export default function useStringifyMemo<T extends Record<string, any>>(
  obj: T
) {
  const toString = JSON.stringify(obj);

  return useMemo(() => obj, [toString]);
}
