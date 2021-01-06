import Main from "@/components/Main";
import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Link from "@/components/Link";
// CURSED COMPONENT
const about = () => {
  return (
    <Main>
      <Head>
        <title>ABOUT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Heading>Edufair online concept prototype</Heading>
        <Link href="https://github.com/raisoturu/edufair-online-prototype">
          Source code https://github.com/raisoturu/edufair-online-prototype
        </Link>
      </Box>
    </Main>
  );
};

export default about;
