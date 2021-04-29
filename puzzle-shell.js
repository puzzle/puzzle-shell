// Registers all Puzzle Shell web components
import './pzsh-banner.js';
import './pzsh-container.js';
import './pzsh-footer.js';
import './pzsh-header.js';
import './pzsh-topbar.js';

// TODO: remove example component
import { PuzzleShell } from './src/PuzzleShell.js';

window.customElements.define('puzzle-shell', PuzzleShell);
