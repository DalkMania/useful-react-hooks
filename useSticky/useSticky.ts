import { useState } from "react";
import type { MutableRefObject } from "react";
import { useScrollPosition } from "../useScrollPosition/useScrollPosition";

export const useSticky = <T extends HTMLElement = HTMLElement>(ref: MutableRefObject<T | null>, top: number) => {
  const [isSticky, setIsSticky] = useState(false);

  useScrollPosition(
    ({ currPos }) => {
      const sticky = currPos.y > top;
      if (sticky !== isSticky) setIsSticky(sticky);
    },
    [isSticky],
    ref,
    true
  );

  return { isSticky };
};
