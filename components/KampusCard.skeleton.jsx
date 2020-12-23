import { Box, Stack, Skeleton, useColorModeValue } from "@chakra-ui/react";

const KampusSkeleton = () => {
  const color = useColorModeValue("#E2E8F0", "#1A202C");
  return (
    <Box border={`1px solid ${color}`}>
      <Stack direction="row">
        <Box w="150px">
          <Skeleton height="150px" width="150px" />
        </Box>
        <Stack w="full" p="4" spacing="4">
          <Skeleton height="18px" />
          <Skeleton height="18px" />
          <Skeleton height="18px" />
        </Stack>
      </Stack>
    </Box>
  );
};

export default KampusSkeleton;
