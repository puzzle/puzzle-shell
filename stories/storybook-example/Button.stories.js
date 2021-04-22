import "./Button";

export default {
  title: "Example/Button",
  // argTypes: {
  //   //   backgroundColor: { control: 'color' },
  //   onClick: { action: "onClick" },
  // },
};

const Template = ({ ...args }) =>
  `<psh-button
     label="${args.label}"
     size="${args.size || ""}"
     ${args.primary ? 'primary="true"' : ""}
   ></psh-button>`;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
Primary.storyName = "Schubidu blablabla";

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
