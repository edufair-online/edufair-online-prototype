import { Box, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import Link from "@/components/Link";

const Footer = () => {
  const navigation = [
    {
      text: "Beranda",
      url: "/",
    },
    {
      text: "Kebijakan Privasi",
      url: "/",
    },
    {
      bold: true,
      text: "Dukung Kami!",
      url: "/sponsorship",
    },
    {
      text: "Tentang",
      url: "/about",
    },
  ];
  const social = [
    {
      text: "Instagram",
      url: "https://www.instagram.com/edufair_online/",
    },
    {
      text: "Youtube",
      url: "https://www.youtube.com/channel/UCt0rriFZO-ZPy802fEKxE7Q",
    },
    {
      text: "Discord",
      url: "https://discord.gg/kUdsQEAXv8",
    },
  ];
  return (
    <Flex
      w="full"
      pt="6"
      pb="10"
      maxW={[null, null, "2xl", "6xl"]}
      px={{ base: 2, md: 0 }}
      flexDir={{ base: "column-reverse", md: "row" }}
      justifyContent="space-between"
      alignItems={{ base: "center", md: "start" }}
      textAlign={{ base: "center", md: "left" }}
    >
      <Flex h="full" direction="column" maxW="500px" mt={{ base: 6, md: 0 }}>
        <Heading fontSize={{ base: "xl", md: "2xl" }}>
          Edufair Online 2021
        </Heading>
        <Text fontWeight="500">
          "Exploring knowledge and experience in digital era"
        </Text>
        <Text mt="2" mb="auto">
          An annual event held by student now coming online
        </Text>
        <Text mt={{ base: 10, md: 0 }} colorScheme="gray" fontSize="sm">
          Crafted with ❤️ by <Link href="https://wisesa.dev">raisoturu</Link>
        </Text>
      </Flex>
      <HStack alignItems="start">
        <Flex direction="column" mr="6">
          <Text fontWeight="bold" mb="2">
            Navigasi
          </Text>
          {navigation.map((data, idx) => (
            <Link
              route
              href={data.url}
              key={idx}
              fontWeight={data.bold ? "bold" : "normal"}
              colorScheme="blue"
              py="1"
            >
              {data.text}
            </Link>
          ))}
        </Flex>
        <Flex direction="column">
          <Text fontWeight="bold" mb="2">
            Find US!
          </Text>
          {social.map((data, idx) => (
            <Link
              href={data.url}
              key={idx}
              fontWeight={data.bold ? "bold" : "normal"}
              colorScheme="blue"
              py="1"
            >
              {data.text}
            </Link>
          ))}
        </Flex>
      </HStack>
    </Flex>
  );
};

export default Footer;
