import { useEffect } from "react";
import type { RefObject } from "react";

export const useKeyPress = <T extends HTMLElement>(key: string, ref: RefObject<T> | null, action: () => void) => {
  useEffect(() => {
    const element = ref?.current ? ref.current : window;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === key) {
        e.preventDefault();
        action();
      }
    };
    element.addEventListener("keydown", (e) => onKeyDown(e as KeyboardEvent));
    return () => element.removeEventListener("keydown", (e) => onKeyDown(e as KeyboardEvent));
  });
};
