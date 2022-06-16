import React from 'react'

import { PymeProvider } from './context/PymeContext';
import { ThemeProvider } from './context/ThemeContext';
import { NavigatorMain } from './navigator/Navigation';

export const App = () => {
  return (
    <PymeProvider>
      <ThemeProvider>
        <NavigatorMain />
      </ThemeProvider>
    </PymeProvider>
  );
};
