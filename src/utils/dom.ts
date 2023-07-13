export function isNodeOrChild(element: unknown, nodeName: string) {
  return (
    element &&
    element instanceof HTMLElement &&
    (element.nodeName.toLowerCase() === nodeName ||
      element.closest(nodeName) != null)
  );
}

export function scrollIntoViewIfNeeded(target: HTMLElement) {
  if (target.getBoundingClientRect().bottom > window.innerHeight) {
    target.scrollIntoView(false);
  }

  if (target.getBoundingClientRect().top < 0) {
    target.scrollIntoView();
  }
}
