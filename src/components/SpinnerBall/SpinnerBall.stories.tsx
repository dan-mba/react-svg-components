import type { Meta, StoryObj } from '@storybook/react';

import SB from './SpinnerBall';

const meta = {
  title: 'Components/SpinnerBall',
  component: SB,
  argTypes: {
    size: {
      description: 'width & height of spinner in px',
      default: 200
    },
    primaryColor: {
      description: 'primary color for spinner',
      control: 'color'
    },
    secondaryColor: {
      description: 'secondary color for spinner',
      control: 'color'
    },
    duration: {
      description: 'duration of spinning animation',
      default: '3s'
    }
  },
} satisfies Meta<typeof SB>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SpinnerBall: Story = {
  args: {
    size: 200,
    primaryColor: 'blue',
    secondaryColor: '#eeeeee',
    duration: '3s'
  }
};
