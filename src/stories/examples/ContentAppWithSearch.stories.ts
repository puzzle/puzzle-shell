import { html } from "lit";
import "../../puzzle-shell";
import { theme } from "../../utils/theme";
import { searchStyles } from "../components/search";

export default {
  title: "Puzzle Shell/Examples/Content app with search",
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => html`
  <style>
    body {
      font-family: var(--pzsh-font-family);
    }
    body,
    body * {
      box-sizing: border-box;
    }
    .app {
      display: flex;
    }
    .left-nav {
      padding: calc(2 * var(--pzsh-spacer))
        var(--pzsh-menu-item-padding-horizontal);
      display: flex;
      flex-direction: column;
    }
    .left-nav,
    .left-nav a {
      color: var(--pzsh-menu-fg);
    }
    main {
      padding: var(--pzsh-page-padding-horizontal-mobile);
    }
    a {
      text-decoration: none;
      color: var(--pzsh-color-brand-2);
    }
    a:hover,
    a:active {
      text-decoration: underline;
    }

    @media (min-width: ${theme.breakpoint}px) {
      .app {
        display: grid;
        grid-template-columns: 1fr 10rem minmax(0, var(--pzsh-breakpoint)) 10rem 1fr;
        background-color: var(--pzsh-color-gray-1);
      }
      pzsh-menu {
        grid-column: 2/3;
      }
      .left-nav {
        padding: calc(4 * var(--pzsh-spacer)) var(--pzsh-spacer);
      }
      .left-nav,
      .left-nav a {
        color: var(--pzsh-color-black);
      }
      main {
        grid-column: 3/4;
        padding: calc(4 * var(--pzsh-spacer))
          var(--pzsh-page-padding-horizontal-desktop);
        background-color: var(--pzsh-color-white);
      }
    }
  </style>
  ${searchStyles}

  <pzsh-container>
    <pzsh-topbar>
      <!-- prettier-ignore -->
      <svg width="214" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M102.016 23V11.625h3.5c1 0 1.893.227 2.679.68a4.674 4.674 0 011.852 1.922c.443.828.664 1.77.664 2.828v.523c0 1.057-.219 1.998-.656 2.82a4.655 4.655 0 01-1.836 1.915c-.792.453-1.685.682-2.68.687h-3.523zm2.343-9.477v7.594h1.133c.917 0 1.617-.3 2.102-.898.484-.6.732-1.456.742-2.57v-.602c0-1.156-.24-2.031-.719-2.625-.479-.6-1.179-.899-2.101-.899h-1.157zm17.407 4.047c0 1.12-.198 2.102-.594 2.946-.396.843-.964 1.494-1.703 1.953-.735.458-1.578.687-2.531.687-.943 0-1.784-.226-2.524-.68-.74-.453-1.312-1.098-1.719-1.937-.406-.844-.612-1.812-.617-2.906v-.563c0-1.12.201-2.104.602-2.953.406-.854.976-1.508 1.711-1.96.739-.46 1.583-.688 2.531-.688.948 0 1.789.229 2.523.687.74.453 1.31 1.107 1.711 1.961.406.85.61 1.83.61 2.945v.508zm-2.375-.515c0-1.193-.214-2.1-.641-2.72-.427-.619-1.036-.929-1.828-.929-.787 0-1.393.307-1.82.922-.428.61-.644 1.505-.649 2.688v.554c0 1.162.214 2.063.641 2.703.427.641 1.041.961 1.844.961.786 0 1.39-.307 1.812-.922.422-.62.635-1.52.641-2.703v-.554zm13.007 2.156c-.088 1.224-.541 2.187-1.359 2.89-.812.704-1.885 1.055-3.219 1.055-1.458 0-2.606-.49-3.445-1.468-.833-.985-1.25-2.334-1.25-4.047v-.696c0-1.093.193-2.057.578-2.89.386-.834.935-1.472 1.649-1.914.718-.448 1.552-.672 2.5-.672 1.312 0 2.369.351 3.171 1.054.803.704 1.266 1.69 1.391 2.961h-2.344c-.057-.734-.263-1.265-.617-1.593-.349-.334-.883-.5-1.601-.5-.782 0-1.368.28-1.758.843-.386.558-.584 1.425-.594 2.602v.86c0 1.228.185 2.127.555 2.695.375.567.963.851 1.765.851.724 0 1.263-.164 1.618-.492.359-.333.565-.846.617-1.54h2.343zm7.438.805c0-.443-.156-.782-.469-1.016-.312-.24-.875-.49-1.687-.75-.813-.266-1.456-.526-1.93-.781-1.292-.698-1.938-1.638-1.938-2.82 0-.615.172-1.162.516-1.641.349-.485.846-.862 1.492-1.133.651-.27 1.381-.406 2.188-.406.812 0 1.536.148 2.172.445.635.292 1.127.706 1.476 1.242.354.537.532 1.146.532 1.828h-2.344c0-.52-.164-.924-.492-1.21-.329-.292-.79-.438-1.383-.438-.573 0-1.018.122-1.336.367-.318.24-.477.557-.477.953 0 .37.185.68.555.93.375.25.924.484 1.648.703 1.334.401 2.305.898 2.914 1.492.61.594.915 1.334.915 2.219 0 .984-.373 1.758-1.118 2.32-.744.558-1.747.836-3.008.836-.874 0-1.671-.159-2.39-.476-.719-.323-1.268-.763-1.649-1.32-.375-.558-.562-1.204-.562-1.938h2.351c0 1.255.75 1.883 2.25 1.883.558 0 .993-.112 1.305-.336.313-.23.469-.547.469-.953z" fill="#69B978"/><path d="M27.45 4.686c-6.28-6.248-16.461-6.248-22.74 0-6.28 6.249-6.28 16.38 0 22.628 6.279 6.248 16.46 6.248 22.74 0 3.015-3 4.71-7.07 4.71-11.314a15.96 15.96 0 00-4.71-11.314zm-1.24 5.527C25.686 11.77 24 16.442 24 16.442c-.564 1.523-3.863 1.51-8.342 1.523 0 0 2.894-.407 3.73-2.015a38.073 38.073 0 001.822-4.864c-4.455 0-4.853 1.553-4.853 1.553s-2.814 7.836-3.82 10.727c-7.804 0-6.557-3.835-6.557-3.835L9.884 8.635h7.905l-.527 1.57s.643-1.57 5.002-1.57c.002 0 4.471.019 3.946 1.578zM41.45 19.15v4.023h-2.746V11.439h4.787a4.907 4.907 0 013.329 1.067 3.519 3.519 0 011.231 2.8 3.506 3.506 0 01-1.231 2.793 4.938 4.938 0 01-3.329 1.059l-2.042-.008zm0-2.095h2.041c.501.035.994-.142 1.356-.488.316-.34.484-.79.465-1.253a1.802 1.802 0 00-.465-1.281 1.763 1.763 0 00-1.356-.5H41.45v3.522zM58.88 11.437v7.689a3.804 3.804 0 01-1.34 3.112 5.347 5.347 0 01-3.51 1.103 5.402 5.402 0 01-3.54-1.103 3.8 3.8 0 01-1.34-3.112v-7.69h2.747v7.69a2.086 2.086 0 00.559 1.6c.439.37 1.005.556 1.58.52a2.184 2.184 0 001.558-.516 2.11 2.11 0 00.547-1.6v-7.693h2.74zM63.33 21.077h5.37v2.096h-8.74v-1.226l5.273-8.414h-5.297v-2.096h8.691v1.177l-5.298 8.463zM72.927 21.077h5.37v2.096h-8.74v-1.226l5.274-8.414h-5.297v-2.096h8.69v1.177l-5.297 8.463zM82.07 21.077h5.079v2.096h-7.823V11.439h2.747l-.003 9.638zM95.471 18.151H90.85v2.926h5.45v2.096h-8.2V11.439h8.213v2.096H90.85v2.523h4.625l-.004 2.093z" fill="#fff"/></svg>
    </pzsh-topbar>
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
    <div class="app">
      <pzsh-menu>
        <div slot="actions" class="pzsh-divider">
          <pzsh-menu-action href="#">
            <pzsh-icon name="sliders-v-alt"></pzsh-icon>
            Administration
          </pzsh-menu-action>
          <pzsh-menu-action href="#">
            <pzsh-icon name="question-circle"></pzsh-icon>
            Help
          </pzsh-menu-action>
          <pzsh-menu-dropdown href="#">
            <div slot="toggle">
              <pzsh-icon name="user"></pzsh-icon>
              Max Mustermann
            </div>
            <div slot="items">
              <pzsh-menu-dropdown-item href="#">
                <pzsh-icon name="setting"></pzsh-icon>
                Account Settings
              </pzsh-menu-dropdown-item>
              <pzsh-menu-dropdown-item href="#">
                <pzsh-icon name="sign-out-alt"></pzsh-icon>
                Logout
              </pzsh-menu-dropdown-item>
            </div>
          </pzsh-menu-dropdown>
          <pzsh-menu-divider></pzsh-menu-divider>
        </div>
        <div slot="items" class="left-nav">
          <label style="margin-bottom: var(--pzsh-spacer)">
            Categories
            <select>
              <option>Humans</option>
              <option>Animals</option>
              <option>Aliens</option>
            </select>
          </label>
          <a href="#">Fruits</a>
          <a href="#">Vegetables</a>
          <a href="#">Crops</a>
        </div>
      </pzsh-menu>
      <main>Content app with search</main>
    </div>
    <pzsh-footer
      ><div slot="start" style="display: block">
        Diese Seite wurde mit Antora generiert. Das Theme basiert auf dem Antora
        default UI (MPL-2.0).
      </div>
    </pzsh-footer>
  </pzsh-container>
`;
Default.storyName = "Content app with search";
