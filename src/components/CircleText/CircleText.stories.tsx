import type { Meta, StoryObj } from '@storybook/react-vite';

import CT from './CircleText';

const meta = {
  title: 'Components/CircleText',
  component: CT,
  argTypes: {
    size: {
      description: 'width & height of text circle in px',
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
} satisfies Meta<typeof CT>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CircleText: Story = {
  args: {
    size: 500,
    spin: false,
    text: 'Testing Testing',
    textColor: 'black'
  }
};
