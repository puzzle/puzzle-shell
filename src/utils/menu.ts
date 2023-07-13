import { scrollIntoViewIfNeeded } from "./dom";

/**
 * Sets focus of menu items using up/down arrow keydown events
 */
export function navigateMenuWithKeyboard(
  getItems: () => ReadonlyArray<HTMLElement>,
  e: Event,
) {
  if (
    e instanceof KeyboardEvent &&
    e.type === "keydown" &&
    (e.key === "ArrowUp" || e.key === "ArrowDown")
  ) {
    const items = getItems();
    let index = items.findIndex((item) => item === document.activeElement);
    if (e.key === "ArrowUp") {
      index -= 1;
    } else if (e.key === "ArrowDown") {
      index += 1;
    }
    const item = items[index];
    if (item) {
      item.focus();

      // Follow focused item when off-screen
      scrollIntoViewIfNeeded(item);

      // Prevent scrolling of the viewport as long as focus is not at
      // beginning/end of menu items
      e.preventDefault();
    }
  }
}
