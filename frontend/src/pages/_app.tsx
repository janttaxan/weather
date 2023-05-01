import 'shared/globals.css';

import type { AppProps } from 'next/app';

import { CommonProvider } from 'app-layers/common-context/common-context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CommonProvider>
      <Component {...pageProps} />
    </CommonProvider>
  );
}
