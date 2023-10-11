import { Html, Head, Main, NextScript } from "next/document";
import { Toaster } from 'react-hot-toast';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&family=Poppins:ital,wght@0,500;0,600;0,900;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Toaster />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
