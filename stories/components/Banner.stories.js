import { html } from 'lit-element';
import '../../src/Banner.js';

/* eslint-disable camelcase */

export default {
  title: 'Puzzle Shell/Components/Banner',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => html`<pzsh-banner></pzsh-banner>`;

export const With_Search = () => html`<pzsh-banner></pzsh-banner>`;

export const With_Search_And_Add_Action = () =>
  html`<pzsh-banner></pzsh-banner>`;

export const With_Navigation = () => html`<pzsh-banner></pzsh-banner>`;
