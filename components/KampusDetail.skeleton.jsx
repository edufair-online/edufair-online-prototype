import { Box, Stack, Skeleton } from "@chakra-ui/react";
const KampusDetailSkeleton = (props) => {
  return (
    <>
      <Stack direction="row" {...props}>
        <Box w="150px">
          <Skeleton height="150px" width="150px" />
        </Box>
        <Stack w="full" pl="4" spacing="4">
          <Skeleton height="35px" />
          <Skeleton height="16px" />
          <Skeleton height="16px" />
          <Skeleton height="16px" />
        </Stack>
      </Stack>
      <Box w="full" pt="8">
        <Skeleton height="20px" w="150px" />
        <Stack direction="row" mt="4" spacing="6">
          <Skeleton height="200px" w={1 / 2} />
          <Skeleton height="200px" w={1 / 2} />
        </Stack>
      </Box>
    </>
  );
};

export default KampusDetailSkeleton;
