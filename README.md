# fdemb2/ui

Unstyled UI components for SolidJS. Based on [Base UI](https://base-ui.com/).

## Components ported

- **ScrollArea** — a container with native scroll and stylable scrollbars.

## Components not ported

- Anything else from BaseUI. I just needed the ScrollArea, but maybe I'll add more later.

## Usage

```typescript
import { ScrollArea } from "@fdemb2/ui/scroll-area";
```

## Notes

- I didn't port the `useRender` utility for polymorphic components. The scroll area components are just divs.

## Credits

This project tries to port some of great code from [Base UI](https://base-ui.com/), an unstyled React component library.
