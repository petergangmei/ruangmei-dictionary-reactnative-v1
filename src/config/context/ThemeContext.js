import React, { createContext, useContext, useState, useEffect } from 'react';
import { Appearance } from 'react-native';

// Themes
const lightTheme = {
  colors: {
    primary: '#2E8BC0',
    primaryDark: '#145DA0',
    secondary: '#F5F5F5',
    background: '#edf5f5',
    text: '#1B1B1B',
    textLight: '#4d4848',
    textPrimary: '#FFFFFF',
    textSecondary: '#4d4848',
    surface: '#FFFFFF',
    accent: '#FFC600',
    placeholder: '#A5A5A5',
  },
};

const darkTheme = {
  colors: {
    primary: '#2E8BC0',
    primaryDark: '#2F49CC',
    secondary: '#1B1B1B',
    background: '#1B1B1B',
    text: '#FFFFFF',
    textLight: '#FFFFFF',
    textPrimary: '#FFFFFF',
    textSecondary: '#fcfcfc',
    surface: '#252525',
    accent: '#FFC600',
    placeholder: '#B7B7B7',
  },
};

// Create Context
const ThemeContext = createContext();

// Provider Component
export const ThemeProvider = ({ children }) => {
  const systemTheme = Appearance.getColorScheme(); // Detect system theme
  const [isDarkMode, setIsDarkMode] = useState(systemTheme === 'dark');
  const [theme, setTheme] = useState(isDarkMode ? darkTheme : lightTheme);

  // Watch for system theme changes
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      const isDark = colorScheme === 'dark';
      setIsDarkMode(isDark);
      setTheme(isDark ? darkTheme : lightTheme);
    });

    return () => subscription.remove();
  }, []);

  // Toggle theme manually
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    setTheme(newTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook to Access Theme
export const useTheme = () => useContext(ThemeContext);
