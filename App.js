import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';
import {ThemeProvider} from 'styled-components';
import theme from './src/styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
