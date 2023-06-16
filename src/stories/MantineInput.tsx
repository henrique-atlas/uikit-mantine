import React from 'react';
import { Input } from '@mantine/core';

/**
 * Primary UI component for user interaction
 */
export const MantineInput = () => {
  return (
    <>
      <Input.Label required>Input label</Input.Label>
      <Input />
    </>
    )
};
