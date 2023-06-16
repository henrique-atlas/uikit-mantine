import type { Meta, StoryObj } from '@storybook/react';
import { MantineInput } from './MantineInput';

const meta: Meta<typeof MantineInput> = {
    component: MantineInput,
  }
export default meta;
  
type Story = StoryObj<typeof MantineInput>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Simple: Story = {};
