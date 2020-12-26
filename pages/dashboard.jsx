import Main from "@/components/Main";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Spinner,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { useRequireAuth } from "@/utils/AuthContext";
import { FaPencilAlt, FaSave } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getUserStamps } from "@/utils/helpers/userHelpers";
const dashboard = () => {
  const { user, updateProfile } = useRequireAuth();
  const [stamps, setStamps] = useState();
  const { displayName, email, id, photoURL, phoneNumber } = user || {};
  const { handleSubmit, errors, register, formState, reset } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const required = (value) => {
    if (!value) return "Can't be empty";
  };
  const getStamps = async () => {
    const result = await getUserStamps(id);
    setStamps(result);
  };
  useEffect(() => {
    if (user) {
      getStamps();
    }
  }, [user]);
  const onSubmit = (values) => {
    console.log(values);
    updateProfile(values)
      .then(() => {
        toast({
          title: "Success.",
          description: `Profil berhasil diubah`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        onClose();
      })
      .catch((error) => {
        console.error(error);
        toast({
          title: "Failed.",
          description: `Terjadi kesalahan`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  useEffect(() => {
    if (user) {
      const { displayName, phoneNumber } = user;
      reset({ displayName, phoneNumber });
    }
    return reset();
  }, [user]);
  return (
    <Main pt={{ base: 8, md: 10 }}>
      {user ? (
        <Flex direction="column" alignItems={{ base: "center", md: "start" }}>
          <Avatar size="xl" name={displayName} src={photoURL} />
          <Heading textAlign={{ base: "center", md: "left" }}>
            Hi, {displayName}
          </Heading>
          <Text mt={0}>
            {email}
            {phoneNumber && ` - ${phoneNumber}`}
          </Text>

          <Button
            mt="2"
            colorScheme="blue"
            leftIcon={<FaPencilAlt />}
            size="sm"
            variant="outline"
            onClick={onOpen}
          >
            Edit profile
          </Button>
          <Divider my="4" />
          <Heading fontWeight="500" fontSize="lg">
            Event yang kamu ikuti
          </Heading>
          {stamps ? (
            <Box w="full" overflow="auto" mt="2">
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th isNumeric>No</Th>
                    <Th>Description</Th>
                    <Th>Point</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {stamps.length &&
                    stamps.map((data, idx) => (
                      <Tr key={idx}>
                        <Td isNumeric>{idx + 1}</Td>
                        <Td>{data.description}</Td>
                        <Td>
                          {data.point > 0 ? (
                            <Text fontWeight="600" color="green.600">
                              + {data.point}
                            </Text>
                          ) : (
                            <Text fontWeight="600" color="red.600">
                              - {data.point}
                            </Text>
                          )}
                        </Td>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </Box>
          ) : stamps !== undefined ? (
            <Text mt="4">Kamu belum mengikuti event apapun 😢</Text>
          ) : (
            <Spinner mt="2" />
          )}
        </Flex>
      ) : (
        <Spinner />
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb="4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.displayName}>
                <FormLabel htmlFor="name">Display name</FormLabel>
                <Input
                  name="displayName"
                  placeholder="Display name"
                  ref={register({ validate: required })}
                />
                <FormErrorMessage>
                  {errors.displayName?.message}
                </FormErrorMessage>
                <FormHelperText>
                  Mohon masukan nama yang sesuai karena nama akan digunakan
                  untuk sertifikat, email, dan lain-lain.
                </FormHelperText>
              </FormControl>
              <FormControl isInvalid={errors.phoneNumber}>
                <FormLabel htmlFor="name">Phone number</FormLabel>
                <Input
                  name="phoneNumber"
                  placeholder="Phone number"
                  type="tel"
                  ref={register}
                />
                <FormErrorMessage>
                  {errors.phoneNumber?.message}
                </FormErrorMessage>
              </FormControl>
              <Flex mt="4" justifyContent="space-between">
                <Button
                  colorScheme="green"
                  isLoading={formState.isSubmitting}
                  type="submit"
                  size="sm"
                  leftIcon={<FaSave />}
                >
                  Save
                </Button>
                <Button ml="auto" onClick={onClose} size="sm">
                  Cancel
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Main>
  );
};

export default dashboard;
