import Footer from "@/components/Footer";
import { ChakraProvider, Stack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import theme from "theme";
import NProgress from "nprogress";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "rc-dropdown/assets/index.css";
import "nprogress/nprogress.css";
import "../styles/globals.css";
import "../styles/empty.css";

import { AuthProvider } from "@/utils/AuthContext";
import Router from "next/router";
import QRScanner from "@/components/QRScanner";
import { AnimatePresence } from "framer-motion";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Stack minH="100vh" w="full" alignItems="center">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
          <QRScanner />
          {/* <Footer /> */}
        </Stack>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
