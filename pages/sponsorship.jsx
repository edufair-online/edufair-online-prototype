import Link from "@/components/Link";
import Main from "@/components/Main";
import { Box, Heading } from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";

const sponsorship = () => {
  return (
    <Main>
      <Heading textAlign="center">Let's become Edufair 2021 sponsor!</Heading>
      <Box pt="2" minH="75vh">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfePkGzFoJN-lS1VutTG-UHpym-E8wxGxyDKpfHCRI0Sc5C8w/viewform?embedded=true"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          width="100%"
          height="100%"
        >
          Loading…
        </iframe>
        <Link href="/" route colorScheme="black" p="2">
          <BsArrowLeft style={{ display: "inline" }} /> Back to home
        </Link>
      </Box>
    </Main>
  );
};

export default sponsorship;
