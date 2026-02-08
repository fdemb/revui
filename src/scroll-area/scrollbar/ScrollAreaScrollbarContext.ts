import { createContext, useContext } from "solid-js";

export interface ScrollAreaScrollbarContextValue {
  orientation: "horizontal" | "vertical";
}

export const ScrollAreaScrollbarContext = createContext<ScrollAreaScrollbarContextValue>();

export function useScrollAreaScrollbarContext(): ScrollAreaScrollbarContextValue {
  const context = useContext(ScrollAreaScrollbarContext);
  if (context === undefined) {
    throw new Error(
      "rigid-ui: ScrollAreaScrollbarContext is missing. ScrollAreaScrollbar parts must be placed within <ScrollArea.Scrollbar>.",
    );
  }
  return context;
}
