
import { ThemeProvider } from './context/ThemeContext';
import { NavigatorMain } from './navigator/Navigation';

export const App = () => {
  return (
    <ThemeProvider>
      <NavigatorMain />
    </ThemeProvider>
  );
};
