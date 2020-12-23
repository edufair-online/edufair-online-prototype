import {
  AspectRatio,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useColorModeValue,
  useDisclosure,
  Text,
  Avatar,
  Stack,
  Box,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { FaRegCalendarPlus, FaVideo, FaYoutube } from "react-icons/fa";
import Link from "./Link";
import MotionBox from "./MotionBox";

const EventCard = ({ data, ...props }) => {
  const {
    title,
    url,
    speakers,
    description,
    forceLive,
    endDate,
    beginDate,
    recordingURL,
  } = data || {};
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    // timeZoneName: "short",
  };
  const begin = new Date(beginDate).toLocaleString("id-ID", dateOptions);
  const end = new Date(endDate).toLocaleString("id-ID", dateOptions);
  const color = useColorModeValue("#E2E8F0", "#1A202C");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const calendarURLprefix = "https://calendar.google.com/calendar/r/eventedit";
  const beginTime = dayjs(beginDate).format("YYYYMMDDTHHmmss");
  const endTime = dayjs(endDate).format("YYYYMMDDTHHmmss");
  const calendarURL = `${calendarURLprefix}?text=${encodeURIComponent(
    title
  )}&dates=${beginTime}/${endTime}&details=${encodeURIComponent(
    description
  )}+JOIN+URL+${encodeURIComponent(url)}`;
  return (
    <MotionBox
      border={`1px solid ${color}`}
      cursor="pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onOpen}
      shadow="sm"
      {...props}
    >
      <AspectRatio minW="200px" ratio={1}>
        <Image p={2} src={"/Main Content.jpg"} />
      </AspectRatio>
      <Modal isCentered onClose={onClose} isOpen={isOpen} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack
              direction={{ base: "column", md: "row" }}
              justifyContent="space-between"
              spacing={{ base: 0 }}
              mb="2"
            >
              <Text fontWeight="500">{begin} WIB</Text>
              <Text>Sampai</Text>
              <Text fontWeight="500">{end} WIB</Text>
            </Stack>
            {forceLive && (
              <Link fontWeight="bold" href={url}>
                <Badge colorScheme="red">Live sekarang!</Badge>
              </Link>
            )}
            <Text mt="2" textAlign="justify">
              {description}
            </Text>
            <Text mt="4" fontWeight="bold">
              Speakers:
            </Text>
            <SimpleGrid spacing="2" mt="2" columns={{ base: 1, md: 2 }}>
              {speakers.map((data, key) => (
                <Stack direction="row">
                  <Avatar name={data.name} key={key} />
                  <Box>
                    <Text fontWeight="500">{data.name}</Text>
                    <Text>{data.title}</Text>
                  </Box>
                </Stack>
              ))}
            </SimpleGrid>
          </ModalBody>
          <ModalFooter>
            {!recordingURL && (
              <Link href={url}>
                <Button
                  leftIcon={<FaVideo />}
                  size="sm"
                  colorScheme="green"
                  mr={3}
                >
                  Join
                </Button>
              </Link>
            )}
            {recordingURL && (
              <Link href={recordingURL}>
                <Button
                  leftIcon={<FaYoutube />}
                  size="sm"
                  colorScheme="red"
                  mr={3}
                >
                  Recording
                </Button>
              </Link>
            )}
            <Link href={calendarURL}>
              <Button
                leftIcon={<FaRegCalendarPlus />}
                size="sm"
                colorScheme="blue"
              >
                Add to calendar
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </MotionBox>
  );
};

export default EventCard;
