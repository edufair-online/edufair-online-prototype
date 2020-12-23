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
import { AspectRatio } from "@chakra-ui/react";
//Komponen ini nanti pas diklik redirect ke page detail kampusnya
const KampusCard = ({ data }) => {
  const { name, isLive, logo, address } = data;
  const color = useColorModeValue("#E2E8F0", "#1A202C");
  console.log(data);
  const croppedLogo = logo.replace(
    "/image/upload/",
    "/image/upload/w_150,h_150,c_lpad,b_auto/"
  );
  const previewImg = logo.replace(
    "/image/upload/",
    "/image/upload/w_5,h_5,c_lpad,b_auto,e_blur:300/"
  );
  return (
    <Box border={`1px solid ${color}`}>
      <Stack direction="row">
        <AspectRatio w="150px" ratio={1}>
          <Image
            p={2}
            src={
              logo
                ? croppedLogo
                : `https://via.placeholder.com/150?text=${name}`
            }
            fallbackSrc={previewImg}
            alt={name}
          />
        </AspectRatio>
        <Flex px="2" py="4" justifyContent="space-between" direction="column">
          <Box>
            <Text fontWeight="bold">{name}</Text>
            <Text>{address}</Text>
          </Box>
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
