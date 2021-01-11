import Link from "@/components/Link";
import Main from "@/components/Main";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";

const sponsorship = () => {
  const email = "hi@edufair-online.com";
  const subject = "Sponsorship Edufair Online 2021:YourCompanyName";
  return (
    <Main>
      <Heading>Let's become Edufair 2021 sponsor!</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, cumque.
        Facilis asperiores amet, minus sit nihil nam corporis nulla at? Dolores
        hic placeat laborum voluptate porro magni itaque officia quod.
      </Text>
      <Box pt="2">
        <Link href={`mailto:${email}?Subject=${subject}`}>
          <Button leftIcon={<FaEnvelope />}>Send email</Button>
        </Link>
      </Box>
    </Main>
  );
};

export default sponsorship;
