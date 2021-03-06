/* eslint-disable react/prop-types */
import '../styles/globals.css';
import { ThemeProvider } from 'theme-ui';
import theme from '../styles/theme';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
