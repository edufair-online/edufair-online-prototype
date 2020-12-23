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
import MotionBox from "./MotionBox";
import { useRouter } from "next/router";
//Komponen ini nanti pas diklik redirect ke page detail kampusnya
const KampusCard = ({ data, ...props }) => {
  const { name, isLive, logo, address, id } = data;
  const router = useRouter();
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
  const handleClick = () => {
    router.push(`/kampus/${id}`);
  };
  return (
    <MotionBox
      border={`1px solid ${color}`}
      cursor="pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      shadow="sm"
      {...props}
    >
      <Stack direction="row">
        <AspectRatio w="150px" ratio={1}>
          <Image p={2} src={croppedLogo} fallbackSrc={previewImg} alt={name} />
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
    </MotionBox>
  );
};

export default KampusCard;
