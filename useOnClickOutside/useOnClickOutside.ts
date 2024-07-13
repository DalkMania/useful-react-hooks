import { useEffect } from "react";
import type { RefObject } from "react";

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (e: MouseEvent | TouchEvent | FocusEvent) => void
): void => {
  useEffect(() => {
    const handleEvent = (event: MouseEvent | TouchEvent | FocusEvent) => {
      const el = ref?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", handleEvent);
    document.addEventListener("touchstart", handleEvent);
    document.addEventListener("focusin", handleEvent);

    return () => {
      document.removeEventListener("mousedown", handleEvent);
      document.removeEventListener("touchstart", handleEvent);
      document.removeEventListener("focusin", handleEvent);
    };
  });
};
