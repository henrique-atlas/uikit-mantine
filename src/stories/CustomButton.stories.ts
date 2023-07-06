import type { Meta, StoryObj } from '@storybook/react';
import CustomButton from '../components/button/CustomButton';

const meta: Meta<typeof CustomButton> = {
    component: CustomButton,
  };
export default meta;

type Story = StoryObj<typeof CustomButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        label: 'Button223567',
      },
};

export const Secondary: Story = {
    args: {
        label: 'B223567',
        p: 'lg',
        sx: { color: '#00ECE5' },
      },
};
