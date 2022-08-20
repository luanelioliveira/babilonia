import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../styles/themes/default';
import { GlobalStyle } from '../styles/global';
import { AuthProvider } from '../contexts/AuthContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
