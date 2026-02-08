import { Show, splitProps, type JSX, type ParentProps } from 'solid-js';
import { useScrollAreaRootContext } from '../root/ScrollAreaRootContext';

export interface ScrollAreaCornerProps extends ParentProps<JSX.HTMLAttributes<HTMLDivElement>> {
  ref?: HTMLDivElement | ((el: HTMLDivElement) => void);
}

export function ScrollAreaCorner(props: ScrollAreaCornerProps) {
  const [local, others] = splitProps(props, ['children', 'ref', 'style']);

  const ctx = useScrollAreaRootContext();

  const mergedStyle = () => {
    const base: JSX.CSSProperties = {
      position: 'absolute',
      bottom: '0',
      'inset-inline-end': '0',
      width: `${ctx.cornerSize().width}px`,
      height: `${ctx.cornerSize().height}px`,
    };
    if (typeof local.style === 'object' && local.style) {
      return { ...base, ...local.style };
    }
    return base;
  };

  return (
    <Show when={!ctx.hiddenState().corner}>
      <div
        ref={(el) => {
          ctx.cornerRef = el;
          if (typeof local.ref === 'function') local.ref(el);
        }}
        style={mergedStyle()}
        {...others}
      >
        {local.children}
      </div>
    </Show>
  );
}
