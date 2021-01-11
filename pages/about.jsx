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
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 0,
            paddingTop: "56.2500%",
            paddingBottom: "48px",
            boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
            marginTop: " 1.6em",
            marginBottom: "0.9em",
            overflow: "hidden",
            borderRadius: "8px",
            willChange: "transform",
          }}
        >
          <iframe
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              border: "none",
              padding: 0,
              margin: 0,
            }}
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAERlutToWc&#x2F;view?embed"
          ></iframe>
        </div>
      </Box>
    </Main>
  );
};

export default about;
