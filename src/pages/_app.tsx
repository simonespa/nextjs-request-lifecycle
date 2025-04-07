import type { AppProps } from "next/app";
import App, { AppContext } from "next/app";

export default function CustomApp({ Component, pageProps }: AppProps) {
  console.log('CustomApp');

  return <Component {...pageProps} />;
}

CustomApp.getInitialProps = async (appContext: AppContext) => {
  console.log('CustomApp.getInitialProps');

  const props = App.getInitialProps(appContext);
  const customApp = 'custom-app';

  return { props, appContext, customApp };
};
