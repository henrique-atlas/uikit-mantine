import { createStyles, MantineNumberSize } from '@mantine/core';

// Styles params are optional
export interface CustomButtonStylesParams {
  radius?: MantineNumberSize;
}

export default createStyles((theme, { radius }: CustomButtonStylesParams) => ({
  // add all styles as usual
  root: { borderRadius: theme.fn.radius(radius) },
  title: { fontSize: theme.fontSizes.sm },
  button: {
    fontSize: theme.fontSizes.lg,
    backgroundColor: '#1f883d',
    color: '#fff',
    wordWrap: 'break-word',
    boxSizing: 'border-box',
    textDecoration: 'none',
    position: 'relative',
    display: 'inline-block',
    padding: '5px 16px',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    cursor: 'pointer',
    userSelect: 'none',
    border: '1px solid',
    borderRadius: '6px',
    appearance: 'none'
  },
  description: { fontSize: theme.fontSizes.xs },
}));
