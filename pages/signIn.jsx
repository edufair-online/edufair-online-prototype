import FirebaseAuth from "@/components/FirebaseAuth";
import Main from "@/components/Main";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
const Login = () => {
  const color = useColorModeValue("#E2E8F0", "#1A202C");
  return (
    <Main px={{ base: 4, md: 0 }} alignItems="center" justifyContent="center">
      <Head>
        <title>Sign-in</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading fontSize="2xl">Sign-in ke Edufair</Heading>
      <Box
        border={`1px solid ${color}`}
        maxW="500px"
        minW="270px"
        p={4}
        textAlign="center"
      >
        <FirebaseAuth />
      </Box>
    </Main>
  );
};

export default Login;
