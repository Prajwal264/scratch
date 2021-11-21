import "@styles/_global.scss";
import React from "react";
import "@styles/_utils/fonts/index.scss";
import { AppProps } from "next/app";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/helpers/apollo-client";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default MyApp;
