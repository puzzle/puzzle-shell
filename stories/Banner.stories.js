export default {
  title: "Puzzle Shell/Header",
  argTypes: {},
};

export const Default = ({ label, ...args }) => {
  return `
    <div>
      Header
    </div>
  `;
};
Default.args = {
  label: "Default",
};
