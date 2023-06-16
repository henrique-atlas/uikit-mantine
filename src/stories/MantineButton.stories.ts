import type { Meta, StoryObj } from '@storybook/react';
import { MantineButton } from './MantineButton';

const meta: Meta<typeof MantineButton> = {
    component: MantineButton,
  }
export default meta;
  
type Story = StoryObj<typeof MantineButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        label: 'Button223567',
        variant: 'filled'
      },
};

export const Secondary: Story = {
    args: {
        label: 'B223567',
        variant: 'light'
      },
};