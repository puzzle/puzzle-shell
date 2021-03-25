export default {
  title: "Puzzle Shell/TopBar",
  argTypes: {},
};

export const Default = ({ label, ...args }) => {
  return `
    <div style="background: darkblue; color: white">
      TopBar plain
    </div>
  `;
};
Default.args = {
  label: "Default",
};

export const WithActions = ({ label, ...args }) => {
  return `
    <div style="background: darkblue; color: white">
      TopBar with icons
    </div>
  `;
};
WithActions.args = {
  label: "With actions",
};

export const WithSearch = ({ label, ...args }) => {
  return `
    <div style="background: darkblue; color: white">
      TopBar with search
    </div>
  `;
};
WithSearch.args = {
  label: "With search",
};
