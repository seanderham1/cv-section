"use client";

import { useEffect } from "react";

const getContentHeight = () => {
  const main = document.querySelector("main");
  const section = document.querySelector("main > section");

  if (!main || !section) {
    return 0;
  }

  const mainStyles = window.getComputedStyle(main);
  const paddingTop = Number.parseFloat(mainStyles.paddingTop) || 0;
  const paddingBottom = Number.parseFloat(mainStyles.paddingBottom) || 0;

  return Math.ceil(section.offsetTop + section.offsetHeight + paddingTop + paddingBottom);
};

const postIframeHeight = () => {
  const height = getContentHeight();
  if (!height) return;

  window.parent.postMessage({ type: "iframeHeight", height }, "*");
};

export function IframeResizer() {
  useEffect(() => {
    const section = document.querySelector("main > section");
    if (!section) return undefined;

    postIframeHeight();

    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "requestIframeHeight") {
        postIframeHeight();
      }
    };

    const resizeObserver = new ResizeObserver(postIframeHeight);
    resizeObserver.observe(section);

    window.addEventListener("resize", postIframeHeight);
    window.addEventListener("message", handleMessage);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", postIframeHeight);
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return null;
}
