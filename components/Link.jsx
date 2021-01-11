import NextLink from "next/link";
import { Link as ChakraLink, useColorMode } from "@chakra-ui/react";
const Link = ({
  children,
  href,
  isExternal = true,
  linkAs,
  route = false,
  colorScheme,
  ...props
}) => {
  const { colorMode } = useColorMode();
  const linkProps = {
    color: colorScheme
      ? "inherit"
      : props.color || (colorMode === "dark" ? "blue.300" : "blue.500"),
    colorScheme,
    children,
    ...props,
  };
  if (route) {
    return (
      <NextLink as={linkAs} href={href} passHref>
        <ChakraLink {...linkProps} />
      </NextLink>
    );
  }
  return <ChakraLink href={href} {...linkProps} isExternal={isExternal} />;
};

export default Link;
