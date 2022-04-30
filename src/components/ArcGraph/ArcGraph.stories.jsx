import AG from './ArcGraph';

export default {
  title: 'Components/ArcGraph',
  component: AG,
  argTypes: {
    percentage: {
      description: 'percentage to be displayed',
      control: 'range',
      min: 0,
      max: 100
    },
    size: {
      description: 'width & height of graph',
      default: 500
    },
    color: {
      description: 'fill color for graph',
      control: 'color'
    },
    backgroundColor: {
      description: 'background color for unfilled area of graph',
      control: 'color'
    },
    textColor: {
      description: 'color of text percentage',
      control: 'color'
    }
  },
};

const Template = (args) => <AG {...args} />;

export const ArcGraph = Template.bind({});
ArcGraph.args = {
  percentage: 66,
  size: 500,
  color: 'blue',
  backgroundColor: '#efefef',
  textColor: 'black'
};
