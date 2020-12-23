import Footer from "@/components/Footer";
import { ChakraProvider, Stack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import theme from "theme";
import "../styles/globals.css";
import { AuthProvider } from "@/utils/AuthContext";

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
