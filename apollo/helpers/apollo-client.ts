import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

const uploadLink = createUploadLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
}) as unknown as ApolloLink; // workaround for https://github.com/DefinitelyTyped/DefinitelyTyped/pull/46785

const client = new ApolloClient({
  link: uploadLink,
  cache: new InMemoryCache(),
});

export default client;
