export default {
  title: "Puzzle Shell/Components/TopBar",
};

export const Default = () => {
  return `
    <div style="background: darkblue; color: white">
      TopBar plain
    </div>
  `;
};

export const WithActions = () => {
  return `
    <div style="background: darkblue; color: white">
      TopBar with icons
    </div>
  `;
};
WithActions.storyName = "With actions";

export const WithSearch = () => {
  return `
    <div style="background: darkblue; color: white">
      TopBar with search
    </div>
  `;
};
WithSearch.storyName = "With search";
