import { useEffect, useRef } from 'react';

export const useUnmount1 = (func: () => void) => {
  const funcRef = useRef(func);

  funcRef.current = func;

  useEffect(
    () => () => {
      funcRef.current();
    },
    []
  );
};
