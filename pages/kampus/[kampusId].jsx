import EventCard from "@/components/EventCard";
import KampusDetailSkeleton from "@/components/KampusDetail.skeleton";
import Link from "@/components/Link";
import Main from "@/components/Main";
import { useEvent } from "@/utils/hooks/useEvent";
import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  FaChevronLeft,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const kampusDetail = () => {
  const router = useRouter();
  const { kampusId } = router.query;
  const { kampus, events, loading } = useEvent(kampusId);
  const { name, description, address, website } = kampus || {};
  const croppedLogo = kampus?.logo?.replace(
    "/image/upload/",
    "/image/upload/w_150,h_150,c_lpad,b_auto/"
  );
  const previewImg = kampus?.logo?.replace(
    "/image/upload/",
    "/image/upload/w_10,h_10,c_lpad,b_auto,e_blur:300/"
  );
  const linkColor = useColorModeValue("gray.700", "gray.500");
  return (
    <Main>
      {loading ? (
        <KampusDetailSkeleton mt="8" />
      ) : (
        <>
          <Box>
            <Link href="/" route color={linkColor}>
              <FaChevronLeft style={{ display: "inline" }} />
              <Text ml="2" d="inline">
                Back to home
              </Text>
            </Link>
          </Box>
          <Stack direction={{ base: "column", md: "row" }} mt="4">
            <Image
              alignSelf="center"
              w="150px"
              h="150px"
              p={{ md: 2 }}
              src={croppedLogo}
              fallbackSrc={previewImg}
              alt={kampus?.name}
            />
            <Box>
              <Heading as="h1">{kampus?.name}</Heading>
              <Link href={`https://google.com/maps/search/${name}`}>
                <Text color={linkColor} mt="0">
                  <FaMapMarkerAlt style={{ display: "inline" }} /> {address}
                </Text>
              </Link>
              <Text mt="4" textAlign="justify">
                {description}
              </Text>
              <Link href={website} color="black">
                <Button
                  mt="2"
                  size="sm"
                  variant="outline"
                  rightIcon={<FaExternalLinkAlt />}
                >
                  Visit Website
                </Button>
              </Link>
            </Box>
          </Stack>
          <Heading mt="4" as="h2" fontSize="2xl">
            Events
          </Heading>
          {events.length ? (
            <SimpleGrid
              mt="4"
              spacing={{ base: 4, md: 6 }}
              columns={{ base: 1, md: 2 }}
            >
              {events.map((data, idx) => (
                <EventCard data={data} key={idx} />
              ))}
            </SimpleGrid>
          ) : (
            <Text textAlign="center">Tidak ada event.</Text>
          )}
        </>
      )}
    </Main>
  );
};

export default kampusDetail;
