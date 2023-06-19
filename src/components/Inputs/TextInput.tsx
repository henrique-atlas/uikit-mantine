import { createStyles, rem, TextInput } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: rem(54),
    paddingTop: rem(18),
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: `calc(${theme.spacing.sm} / 2)`,
    zIndex: 1,
  },
}));

export function ContainedTextInput({
  label,
  placeholder,
}: {
  label: string;
  placeholder?: string;
}) {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();

  return <TextInput label={label} placeholder={placeholder} classNames={classes} />;
}
