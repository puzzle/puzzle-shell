import { html } from "lit-element";
import "./Footer";

export default {
  title: "Puzzle Shell/Components/Footer",
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => {
  return html`<pzsh-footer></pzsh-footer>`;
};
Default.args = {
  label: "Default",
};
