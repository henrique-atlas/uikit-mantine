import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import { useDarkMode } from 'storybook-dark-mode';

export const theme: MantineThemeOverride = {
  // colorScheme: useDarkMode() ? 'dark' : 'light',
  colorScheme: 'light',
  colors: {
    // atlasBlue[0] = atlasBlue900, atlasBlue[6] = atlasBlue500, atlasBlue[0] = atlasBlue100
    atlasBlue: ['#06195E', '#BEC8DD', '#A0B2D6', '#809DD4', '#5C87D8', '#3471E4', '#0559FA', '#1B57CB', '#2853A7', '#2F4F8B', '#334975', '#344463', '#D2DFFF'],
    primaryColor: 'atlasBlue',
    // blue: ['#E9EDFC', '#C1CCF6', '#99ABF0'],
  },
  spacing: {
    xxs: '0.4rem',
  },
};
export const darkTheme: MantineThemeOverride = {
  colorScheme: 'dark',
  colors: {
    atlasBlue: ['#06195E', '#BEC8DD', '#A0B2D6', '#809DD4', '#5C87D8', '#3471E4', '#0559FA', '#1B57CB', '#2853A7', '#D2DFFF'],
    primaryColor: 'atlasBlue',
  },
  spacing: {
    xxs: '0.4rem',
  },
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeWrapper({ children }: ThemeProviderProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={useDarkMode() ? darkTheme : theme}>
      {children}
    </MantineProvider>
  );
}
