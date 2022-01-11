import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "@/lib/theme";
import Layout from "frontend/components/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};
export default MyApp;
