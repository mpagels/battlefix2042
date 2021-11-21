import CategoryButton from "./CategoryButton";

export default {
  title: "Example/Button",
  component: CategoryButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <CategoryButton {...args} />;

export const Test = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Test.args = {
  label: "Core Features",
  isActive: false,
};
