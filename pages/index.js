import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Main from "@/components/Main";
import { FaSearch, FaTimesCircle } from "react-icons/fa";
import Fuse from "fuse.js";
import listKampus from "@/data/listKampus";
import KampusCard from "@/components/KampusCard";
export default function Home() {
  const [query, setQuery] = useState("");
  const options = {
    keys: ["name", "address"],
    threshold: 0.4,
  };
  // we use fuse to "fuzzy" search name, description, and location
  const fuse = new Fuse(listKampus, options);
  const results = fuse.search(query);
  const kampus = query ? results.map((kampus) => kampus.item) : listKampus;
  return (
    <Main px={{ base: 2, md: 0 }}>
      <Head>
        <title>Next.js + chakra-ui boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDirection="column">
        <Heading as="h1" fontSize={{ base: "2xl", md: "4xl" }}>
          EDUFAIR?
        </Heading>
        <Text>Apaan tuh</Text>
        <Text align="center" mt="4" mb="2">
          Find your favourite campus
        </Text>
        <InputGroup
          w={{ base: "full", lg: "300px" }}
          alignSelf="center"
          size="sm"
        >
          <InputLeftElement>
            <Icon color="gray.500" as={FaSearch} boxSize={4} />
          </InputLeftElement>
          <Input
            placeholder="e.g. Telkom University or 'Bandung'"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <InputRightElement>
            {query && (
              <Icon
                color="gray.500"
                as={FaTimesCircle}
                boxSize={4}
                onClick={() => setQuery("")}
              />
            )}
          </InputRightElement>
        </InputGroup>
        {kampus.length ? (
          <SimpleGrid
            mt="4"
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 2, md: 4 }}
          >
            {kampus.map((data, idx) => {
              return <KampusCard key={idx} data={data} />;
            })}
          </SimpleGrid>
        ) : (
          <Box mt="10">
            <Text fontSize="1.5em" align="center" fontWeight="bold">
              Kampus yang kamu cari tidak ketemu 😭
            </Text>
            <Text align="center">
              Coba cari menggunakan nama kota, misalnya "Bandung"
            </Text>
          </Box>
        )}
      </Flex>
    </Main>
  );
}
