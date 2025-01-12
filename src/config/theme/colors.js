import { DefaultTheme, DarkTheme } from 'react-native-paper';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2F49CC',
    accent: '#FFC600',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    text: '#1B1B1B',
    placeholder: '#A5A5A5',
    onSurface: '#000000',
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#2F49CC',
    accent: '#FFC600',
    background: '#1B1B1B',
    surface: '#252525',
    text: '#FFFFFF',
    placeholder: '#B7B7B7',
    onSurface: '#FFFFFF',
  },
};
