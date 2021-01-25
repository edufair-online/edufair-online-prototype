import Main from "@/components/Main";
import {
  Heading,
  HStack,
  IconButton,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import config from "site.config.js";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Home() {
  const stroke = useColorModeValue(
    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
    "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff"
  );
  const color = useColorModeValue("white", "black");
  return (
    <>
      <Head>
        <title>Edufair online 2021 | Coming Soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main justifyContent="center" d="flex">
        <Heading fontSize={{ base: "4em", md: "5em" }}>
          We're Getting Ready to{" "}
          <Text
            d="inline"
            color={color}
            textShadow={stroke}
            whiteSpace="nowrap"
          >
            Launch in.
          </Text>
        </Heading>
        <Text fontSize={{ base: "1em", md: "1.5em" }}>
          Our website is under construction, we're working very hard to give you
          the best experience on our new website.
        </Text>
        <HStack>
          <IconButton
            as={Link}
            isExternal
            href="https://instagram.com/edufair_online"
            variant="outline"
            icon={<FaInstagram />}
          />
          <IconButton
            as={Link}
            isExternal
            href="https://www.youtube.com/channel/UCt0rriFZO-ZPy802fEKxE7Q"
            variant="outline"
            icon={<FaYoutube />}
          />
          <IconButton
            as={Link}
            isExternal
            href="https://s.id/edu-discord"
            variant="outline"
            icon={<FaDiscord />}
          />
        </HStack>
        <Link
          fontWeight="500"
          href={`mailto:${config.email}?Subject=Sponsorship Edufair Online 2021:YourCompanyName`}
        >
          Become a sponsor!
        </Link>
      </Main>
    </>
  );
}
