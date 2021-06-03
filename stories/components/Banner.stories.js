import { html } from "lit-element";
import "../../src/components/Banner.js";

export default {
  title: "Puzzle Shell/Components/Banner",
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => html`<pzsh-banner></pzsh-banner>`;

export const WithSearch = () => html`<pzsh-banner></pzsh-banner>`;

export const WithSearchAndAddAction = () => html`<pzsh-banner></pzsh-banner>`;

export const WithNavigation = () => html`<pzsh-banner></pzsh-banner>`;
