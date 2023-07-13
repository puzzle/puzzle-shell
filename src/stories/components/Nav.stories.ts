import { html } from "lit";
import "../../components/Nav";
import "../../components/NavItem";
import "../../components/Subnav";

export default {
  title: "Puzzle Shell/Components/Nav",
  parameters: {
    layout: "fullscreen",
  },
};

export const OneLevel = () => html`
  <pzsh-nav>
    <pzsh-nav-item active>Time Tracking</pzsh-nav-item>
    <pzsh-nav-item>Planning</pzsh-nav-item>
    <pzsh-nav-item>Expenses</pzsh-nav-item>
  </pzsh-nav>
`;

export const TwoLevels = () => html`
  <pzsh-nav>
    <pzsh-nav-item active>Time Tracking</pzsh-nav-item>
    <pzsh-subnav>
      <pzsh-nav-item active>My Time Tracking</pzsh-nav-item>
      <pzsh-nav-item>Reporting</pzsh-nav-item>
    </pzsh-subnav>
    <pzsh-nav-item>Planning</pzsh-nav-item>
    <pzsh-nav-item>Expenses</pzsh-nav-item>
  </pzsh-nav>
`;
