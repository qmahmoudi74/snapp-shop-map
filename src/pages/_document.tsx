import { ColorModeScript } from "@chakra-ui/react";
import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import appTheme from "theme";

const Document = () => {
  return (
    <Html lang="fa-IR">
      <Head>
        <link
          rel="preload"
          href="/assets/fonts/Vazirmatn[wght].woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>

      <body>
        <ColorModeScript initialColorMode={appTheme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
