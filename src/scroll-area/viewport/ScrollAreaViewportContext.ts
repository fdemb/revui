import { createContext, useContext } from "solid-js";

export interface ScrollAreaViewportContextValue {
  computeThumbPosition: () => void;
}

export const ScrollAreaViewportContext = createContext<ScrollAreaViewportContextValue>();

export function useScrollAreaViewportContext(): ScrollAreaViewportContextValue {
  const context = useContext(ScrollAreaViewportContext);
  if (context === undefined) {
    throw new Error(
      "rev-ui: ScrollAreaViewportContext missing. ScrollAreaViewport parts must be placed within <ScrollArea.Viewport>.",
    );
  }
  return context;
}
