import { ThemeProvider } from 'theme-ui';
import 'focus-visible';

import theme from '../constants/theme';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
