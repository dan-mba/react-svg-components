import type { Meta, StoryObj } from '@storybook/react-vite';
import CG from './CircleGraph';

const meta =  {
  title: 'Components/CircleGraph',
  component: CG,
  argTypes: {
    percentage: {
      description: 'percentage to be displayed',
      control: {
        type: 'range',
        min: 0,
        max: 100
      }
    },
    size: {
      description: 'width & height of graph in px',
      default: 500
    },
    color: {
      description: 'fill color for graph',
      control: 'color'
    },
    emptyColor: {
      description: 'color for unfilled area of graph',
      control: 'color'
    },

    textColor: {
      description: 'color of text percentage',
      control: 'color'
    }
  },
} satisfies Meta<typeof CG>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CircleGraph: Story = {
  args: {
    percentage: 66,
    size: 500,
    color: 'blue',
    emptyColor: '#e0e0e0',
    textColor: 'black'
  }
};
