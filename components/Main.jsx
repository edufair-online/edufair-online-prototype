import { Stack } from "@chakra-ui/react";

const Main = (props) => {
  return (
    <Stack
      flex={1}
      w="full"
      maxW={[null, null, "2xl", "6xl"]}
      px={{ base: 2, md: 0 }}
      {...props}
    />
  );
};

export default Main;
