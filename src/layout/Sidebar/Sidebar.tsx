import { useState } from 'react';
import { createStyles, Navbar, getStylesRef, rem, Avatar, Container, Center, Text } from '@mantine/core';
import {
  IconSwitchHorizontal,
  IconLogout,
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
  },

  version: {
    backgroundColor: theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
      0.1
    ),
    color: theme.white,
    fontWeight: 700,
  },

  header: {
    paddingBottom: theme.spacing.md,
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
      0.1
    )}`,
  },

  main: {
    paddingTop: theme.spacing.xs,
    marginTop: theme.spacing.xs,
    borderTop: `${rem(1)} solid ${theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
      0.1
    )}`,
  },

  footer: {
    paddingTop: theme.spacing.xs,
    marginTop: theme.spacing.xs,
    borderTop: `${rem(1)} solid ${theme.fn.lighten(
      theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
      0.1
    )}`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.white,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        0.1
      ),
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.white,
    opacity: 0.75,
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        0.15
      ),
      [`& .${getStylesRef('icon')}`]: {
        opacity: 0.9,
      },
    },
  },
}));

const data = [
  { link: '', label: 'Region', info: 'North America' },
  { link: '', label: 'Language', info: 'English' },
  { link: '', label: 'Currency', info: 'USD' },
  { link: '', label: 'Terms', info: 'NEt20' },
  { link: '', label: 'Payment Type', info: 'xxx-xx' },
  { link: '', label: 'Countries', info: '34' },
  { link: '', label: 'WSE', info: '05' },
  { link: '', label: 'Contractors', info: '22' },
];

export function NavbarSimpleColored() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      key={item.label}
      href={item.link}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <span>{item.label}</span>
      <span>{item.info}</span>
    </a>
  ));

  return (
    <Navbar height={700} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section>
        <Container>
          <Center>
            <Avatar size={92} />
          </Center>
          <Center>Compoany</Center>
          <Text>45500 Fremont Blvd, CA 94538, United States</Text>
        </Container>
      </Navbar.Section>

      <Navbar.Section grow className={classes.main}>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}
