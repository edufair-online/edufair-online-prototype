import Footer from "@/components/Footer";
import { ChakraProvider, Stack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import theme from "theme";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../styles/globals.css";
import { AuthProvider } from "@/utils/AuthContext";
import Router from "next/router";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Stack minH="100vh" w="full" alignItems="center">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Stack>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
