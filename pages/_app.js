import Footer from "@/components/Footer";
import { ChakraProvider, Stack } from "@chakra-ui/core";
import Navbar from "../components/Navbar";
import theme from "theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Stack minH="100vh" w="full" alignItems="center">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Stack>
    </ChakraProvider>
  );
}

export default MyApp;
