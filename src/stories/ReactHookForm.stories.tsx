import type { Meta, StoryObj } from '@storybook/react';
import { HookForm } from './ReactHookForm';

const meta: Meta<typeof HookForm> = {
    component: HookForm,
  }
export default meta;
  
type Story = StoryObj<typeof HookForm>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Simple: Story = {};
