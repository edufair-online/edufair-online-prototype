import Footer from "@/components/Footer";
import { ChakraProvider, Flex, Stack } from "@chakra-ui/react";
import theme from "theme";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../styles/globals.css";
import { AuthProvider } from "@/utils/AuthContext";
import Router from "next/router";
import { AnimatePresence } from "framer-motion";
import ThemeSwitcher from "@/components/ThemeSwitcher";

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
            {/* <Navbar /> */}
            <Flex
              maxW={[null, null, "2xl", "6xl"]}
              pt={4}
              px={{ base: 2, md: 0 }}
              w="full"
              // justifyContent="flex-end"
            >
              <ThemeSwitcher />
            </Flex>
            <Component {...pageProps} key={router.route} />
            {/* <QRScanner /> */}
            <Footer />
          </Stack>
        </AuthProvider>
      </ChakraProvider>
    </AnimatePresence>
  );
}

export default MyApp;
