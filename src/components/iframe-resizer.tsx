"use client";

import { useEffect } from "react";

const postIframeHeight = () => {
  const height = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight,
  );

  window.parent.postMessage({ type: "iframeHeight", height }, "*");
};

export function IframeResizer() {
  useEffect(() => {
    postIframeHeight();

    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "requestIframeHeight") {
        postIframeHeight();
      }
    };

    const resizeObserver = new ResizeObserver(postIframeHeight);
    resizeObserver.observe(document.body);

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
