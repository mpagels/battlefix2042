import FixItem from "./FixItem";

export default {
  title: "Example/Fix",
  component: FixItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <FixItem {...args} />;

export const Fix_Item = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Fix_Item.args = {
  isFavorite: false,
  isFixed: false,
};
