export function isNodeOrChild(element, nodeName) {
  return (
    element.nodeName.toLowerCase() === nodeName ||
    element.closest(nodeName) != null
  );
}

export function scrollIntoViewIfNeeded(target) {
  if (target.getBoundingClientRect().bottom > window.innerHeight) {
    target.scrollIntoView(false);
  }

  if (target.getBoundingClientRect().top < 0) {
    target.scrollIntoView();
  }
}
