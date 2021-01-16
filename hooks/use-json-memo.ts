import { useMemo } from 'react';

export default function useJsonMemo<T>(obj: T) {
  const toString = JSON.stringify(obj);

  return useMemo(() => obj, [toString]);
}
