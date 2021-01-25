import { Divider, HStack, Stack, Text } from "@chakra-ui/react";
import Link from "@/components/Link";
const Footer = () => {
  return (
    <Stack
      as="footer"
      p={4}
      w="100%"
      maxW={[null, null, "2xl", "6xl"]}
      fontSize={12}
    >
      <Divider />
      <HStack justifyContent="space-between">
        <Link route href="/" colorScheme="gray">
          Edufair Online &#169; 2021
        </Link>
        <Text>
          Made with ❤️ by{" "}
          <Link href="https://wisesa.dev" isExternal>
            wisesa
          </Link>{" "}
          & friends
        </Text>
      </HStack>
    </Stack>
  );
};
export default Footer;
