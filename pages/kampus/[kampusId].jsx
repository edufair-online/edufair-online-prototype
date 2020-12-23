import Main from "@/components/Main";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

const kampusDetail = () => {
  const router = useRouter();
  const { kampusId } = router.query;
  return (
    <Main>
      <Box>This is a kampus detail for {kampusId}</Box>
    </Main>
  );
};

export default kampusDetail;
