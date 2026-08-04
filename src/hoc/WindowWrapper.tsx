import React, { useLayoutEffect, useRef } from "react";
import useWindowStore from "../store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

/**
 * @param {React.ComponentType} Component
 * @param {string} windowKey
 * @param {{ dragHandle?: string }} [options] - If set, window only drags from that selector inside the window (e.g. "[data-window-drag]").
 */
const WindowWrapper = (Component, windowKey, options = {}) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef(null);

    useGSAP(() => {
      if (!isOpen) return;

      const el = ref.current;
      if (!el) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
      );
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      // Gallery (and any window that opts in) only starts a drag from its handle.
      // Other windows keep dragging from the full window surface.
      const handle = options.dragHandle
        ? el.querySelector(options.dragHandle)
        : null;

      // Never fall back to the full window when a handle was requested.
      if (options.dragHandle && !handle) return;

      const [instance] = Draggable.create(el, {
        trigger: handle || el,
        onPress: () => focusWindow(windowKey),
      });

      return () => instance.kill();
    }, [isOpen]);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className="absolute"
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;
