import { createStyles, rem, NativeSelect } from '@mantine/core';

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

export function ContainedNativeSelect({
  label,
}: {
  label: string;
}) {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();

  return (
    <NativeSelect label={label} data={['React', 'Vue', 'Angular', 'Svelte']} classNames={classes} />
  );
}
