import "@styles/_global.scss";
import React from "react";
import "@styles/_utils/fonts/index.scss";
import { AppProps } from "next/app";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
