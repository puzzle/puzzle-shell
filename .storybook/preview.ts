import type { Preview } from "@storybook/web-components-vite";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    docs: {
      codePanel: true,
    },
  },
};

export default preview;
