import { DefaultProps, Selectors, MantineNumberSize, Box } from '@mantine/core';
import useStyles, { CustomButtonStylesParams } from './CustomButtonStyle';

// This type will contain a union with all selectors defined in useStyles,
// in this case it will be `'root' | 'title' | 'description'`
type MyComponentStylesNames = Selectors<typeof useStyles>;

// DefaultProps adds system props support (margin, padding, sx, unstyled, styles and classNames).
// It accepts 2 types: styles names and styles params, both of them are optional
interface CustomButtonProps extends DefaultProps<MyComponentStylesNames, CustomButtonStylesParams> {
  radius?: MantineNumberSize;
  label: string,
  variant: string
}

export default function CustomButton({
  classNames,
  styles,
  unstyled,
  radius,
  className,
  label,
  variant,
  ...others
}: CustomButtonProps) {
  const { classes, cx } = useStyles(
    // First argument of useStyles is styles params
    { radius },
    // Second argument is responsible for styles api integration
    { name: 'CustomButton', classNames, styles, unstyled }
  );

  // Use Box component as a base and spread ...others prop.
  // By doing so, you will add sx, padding (pt, pb, px, etc.) and margin (my, m, mt, etc.) props support
  return (
    <Box className={cx(classes.root, className)} {...others}>
      <div className={classes.title}>Awesome BTN components</div>
      <button type="button" className={classes.button}>{label}</button>
      <div className={classes.description}>With Styles API support</div>
    </Box>
  );
}
