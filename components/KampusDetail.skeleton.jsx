import { Box, Stack, Skeleton, SimpleGrid } from "@chakra-ui/react";
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
      <Box pt="8" mb="300px">
        <Skeleton height="20px" w="150px" />
        <SimpleGrid mt="4" spacing="6" columns={{ base: 1, md: 2 }}>
          <Skeleton height="400px" w="full" />
          <Skeleton height="400px" w="full" />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default KampusDetailSkeleton;
