import {
  Box,
  Flex,
  Icon,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";

//Komponen ini nanti pas diklik redirect ke page detail kampusnya
const KampusCard = ({ data }) => {
  const { name, isLive } = data;
  const color = useColorModeValue("#E2E8F0", "#1A202C");
  return (
    <Box border={`1px solid ${color}`}>
      <Stack direction="row">
        <Image src="https://via.placeholder.com/150?text=Logo+kampus" />
        <Flex px="2" py="4" justifyContent="space-between" direction="column">
          <Text fontWeight="bold">{name}</Text>
          <Text>
            {isLive ? (
              <>
                <Icon as={FaCircle} mr="1" color="green.400" boxSize={3} />
                Live
              </>
            ) : (
              "Offline"
            )}
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default KampusCard;
