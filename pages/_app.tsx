import "@styles/_global.scss";
import "@styles/_utils/fonts/index.scss";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
