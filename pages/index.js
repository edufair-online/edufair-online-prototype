import Main from "@/components/Main";
import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
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
  const filter = useColorModeValue("invert(0)", "invert(1)");
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
        <Box>
          <Link
            mt="2"
            fontWeight="500"
            href={`mailto:${config.email}?Subject=Sponsorship Edufair Online 2021:YourCompanyName`}
          >
            Become a sponsor!
          </Link>
        </Box>
        <Box
          position="absolute"
          w="full"
          maxW={[null, null, "2xl", "6xl"]}
          bottom={20}
          zIndex={-2}
        >
          <AspectRatio ratio={{ base: 20 / 20, md: 22 / 5 }}>
            <Image
              opacity="40%"
              filter={filter}
              objectPosition="10%"
              w="full"
              alt="dino"
              src="https://res.cloudinary.com/wisesa/image/upload/c_crop,h_277,w_890/v1611598414/4ff07986208593.5d9a654e92f36_ipbgg7.gif"
            />
          </AspectRatio>
        </Box>
      </Main>
    </>
  );
}
