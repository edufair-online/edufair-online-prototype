import Footer from "@/components/Footer";
import { ChakraProvider, Stack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import theme from "theme";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../styles/globals.css";
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
    <AnimatePresence>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <Stack minH="100vh" w="full" alignItems="center">
            <Navbar />
            <Component {...pageProps} key={router.route} />
            <QRScanner />
            {/* <Footer /> */}
          </Stack>
        </AuthProvider>
      </ChakraProvider>
    </AnimatePresence>
  );
}

export default MyApp;
