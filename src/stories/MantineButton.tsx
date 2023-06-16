import React from 'react';
import { Button } from '@mantine/core';

/**
 * Primary UI component for user interaction
 */
export const MantineButton = ({label, variant}: {label: string, variant: string}) => {
  return <Button variant={variant}>{label}</Button>
};
