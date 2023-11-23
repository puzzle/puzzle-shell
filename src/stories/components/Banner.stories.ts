import { html } from "lit";
import "../../components/Banner";
import "../../components/Icon";
import "../../components/Topbar";
import "../../components/Menu";
import "../../components/Nav";
import "../../components/Subnav";
import "../../components/NavItem";
import { searchStyles } from "./search";

export default {
  title: "Puzzle Shell/Components/Banner",
  parameters: {
    layout: "fullscreen",
  },
};

export const WithSearch = () => html`
  ${searchStyles}
  <pzsh-banner>
    <!-- prettier-ignore -->
    <svg slot="tangram" xmlns="http://www.w3.org/2000/svg" width="173.255" height="64" viewBox="0 0 45.84 16.933"><g fill-rule="evenodd"><path fill="#69b978" d="M45.84 0L28.907 16.933 11.974 0z"/><path fill="#61b44b" d="M0 0h23.947L11.974 11.974z"/></g></svg>
    <div slot="content" class="search">
      <div class="search-field">
        <input placeholder="Search..." type="text" />
        <button><pzsh-icon name="search" /></button>
      </div>
    </div>
  </pzsh-banner>
`;

export const WithSearchAndAddAction = () => html`
  ${searchStyles}
  <pzsh-banner>
    <!-- prettier-ignore -->
    <svg slot="tangram" xmlns="http://www.w3.org/2000/svg" width="95" height="100" fill="none"><path fill="#2C97A6" fill-rule="evenodd" d="M95 0v66.7L61.7 33.3 95 0z" clip-rule="evenodd"/><path fill="#3B7BBE" fill-rule="evenodd" d="M47.9 47.1L.7 0H95L47.9 47.1z" clip-rule="evenodd"/><path fill="#69B978" d="M61.635 33.367L28.331 66.671l33.304 33.305L94.939 66.67 61.635 33.367z"/></svg>
    <div slot="content" class="search">
      <div class="search-field">
        <input placeholder="Search..." type="text" />
        <button><pzsh-icon name="search" /></button>
      </div>
      <button class="add" aria-label="Add" title="Add">
        <pzsh-icon name="plus-circle"></pzsh-icon>
        <span>Add</span>
      </button>
    </div>
  </pzsh-banner>
`;

export const WithTwoLevelNavigation = () => html`
  <pzsh-topbar></pzsh-topbar>
  <pzsh-banner>
    <!-- prettier-ignore -->
    <svg slot="tangram" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none"><g fill-rule="evenodd" clip-path="url(#clip0)" clip-rule="evenodd"><path fill="#61B44B" d="M50.5 0H0l25.3 25.3L50.5 0z"/><path fill="#46BCC0" d="M50.5 50H0l25.3-25.3L50.5 50z"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h50.5v50H0z"/></clipPath></defs></svg>
  </pzsh-banner>
  <pzsh-menu>
    <pzsh-nav slot="nav">
      <pzsh-nav-item active>Time Tracking</pzsh-nav-item>
      <pzsh-subnav>
        <pzsh-nav-item active>My Time Tracking</pzsh-nav-item>
        <pzsh-nav-item>Reporting</pzsh-nav-item>
      </pzsh-subnav>
      <pzsh-nav-item>Planning</pzsh-nav-item>
      <pzsh-nav-item>Expenses</pzsh-nav-item>
    </pzsh-nav>
  </pzsh-menu>
`;

export const WithOneLevelNavigationAndSearch = () => html`
  ${searchStyles}
  <pzsh-topbar></pzsh-topbar>
  <pzsh-banner>
    <!-- prettier-ignore -->
    <svg slot="tangram" xmlns="http://www.w3.org/2000/svg" width="239" height="70" fill="none"><path fill="#46BCC0" fill-rule="evenodd" d="M169.034 70l-70-70h70v70z" clip-rule="evenodd"/><path fill="#69B978" fill-rule="evenodd" d="M49.49 49.49L0 0h99.034l49.489 49.49H49.489z" clip-rule="evenodd"/><path fill="#2C97A6" d="M239.034 0h-70v70h70V0z"/></svg>
    <div slot="content" class="search">
      <div class="search-field">
        <input placeholder="Search..." type="text" />
        <button><pzsh-icon name="search" /></button>
      </div>
    </div>
  </pzsh-banner>
  <pzsh-menu>
    <pzsh-nav slot="nav">
      <pzsh-nav-item active>Time Tracking</pzsh-nav-item>
      <pzsh-nav-item>Planning</pzsh-nav-item>
      <pzsh-nav-item>Expenses</pzsh-nav-item>
    </pzsh-nav>
  </pzsh-menu>
`;
