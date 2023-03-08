import type { AppProps } from "next/app";
import AppProvider from "providers";
import "theme/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default App;
