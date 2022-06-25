import CG from './CircleText';

export default {
  title: 'Components/CircleText',
  component: CG,
  argTypes: {
    size: {
      description: 'width & height of text circle',
      default: 500
    },
    spin: {
      description: 'Rotate the text',
      control: 'boolean',
    },
    text: {
      description: 'text to display',
      control: 'text',
    },
    textColor: {
      description: 'color of text percentage',
      control: 'color'
    }
  },
};

const Template = (args) => <CG {...args} />;

export const CircleText = Template.bind({});
CircleText.args = {
  size: 500,
  spin: false,
  text: 'Test',
  textColor: 'black'
};
