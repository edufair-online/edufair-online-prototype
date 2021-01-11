import Head from "next/head";
import { Stack, Code, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "@/components/Link";
import Main from "@/components/Main";
import MotionBox from "@/components/MotionBox";

const NotFound = () => {
  const { asPath } = useRouter();
  return (
    <Main>
      <Head>
        <title>Whoops... 404 Not Found😭</title>
      </Head>
      <Stack textAlign="center" mt={8}>
        <Heading fontSize={{ base: "100px", md: "120px" }} className="noSelect">
          4
          <MotionBox
            animate={{ y: [0, 5, 0] }}
            transition={{ type: "spring", duration: 0.5 }}
            initial={{ y: 5 }}
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.9, rotate: 45 }}
            d="inline-block"
          >
            😭
          </MotionBox>
          4
        </Heading>
        <Text mt={2}>
          The page <Code>{asPath}</Code> does not exist.
        </Text>
        <Text>
          <Link route href="/">
            Back to home.
          </Link>
        </Text>
      </Stack>
    </Main>
  );
};

export default NotFound;
