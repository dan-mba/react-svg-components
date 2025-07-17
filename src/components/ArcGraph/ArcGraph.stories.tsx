import type { Meta, StoryObj } from '@storybook/react-vite';
import AG from './ArcGraph';

const meta = {
  title: 'Components/ArcGraph',
  component: AG,
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
} satisfies Meta<typeof AG>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ArcGraph: Story = {
  args: {
    percentage: 60,
    size: 500,
    color: 'blue',
    emptyColor: '#e0e0e0',
    textColor: 'black'
  }
};
