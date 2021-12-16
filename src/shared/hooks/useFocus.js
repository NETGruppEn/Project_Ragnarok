import { useRef } from "react";

/**
 * Sets the referenced htmlElRef in focus
 * Found the code for this at https://stackoverflow.com/a/54159564
 */
export const useFocus = () => {
    const htmlElRef = useRef(null);
    const setFocus = () => {
      htmlElRef.current && htmlElRef.current.focus();
    };

    return [htmlElRef, setFocus];
  };
