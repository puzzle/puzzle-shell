import { scrollIntoViewIfNeeded } from "./dom.js";

/**
 * Sets focus of menu items using up/down arrow keydown events
 */
export function navigateMenuWithKeyboard(getItems, e) {
  if (e.type === "keydown" && (e.key === "ArrowUp" || e.key === "ArrowDown")) {
    const items = getItems();
    const index = items.findIndex(item => item === document.activeElement);
    const item = items[e.key === "ArrowDown" ? index + 1 : index - 1];
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
