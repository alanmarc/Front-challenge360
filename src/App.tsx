import { ThemeProvider } from '@mui/material/styles';
import { AppRouter } from './router/AppRouter';
import {theme } from './config/theme.config';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter/>
    </ThemeProvider>
  );
}

export default App;
