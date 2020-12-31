import { Box, Button, IconButton, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaQrcode } from "react-icons/fa";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import {
  getStampDetail,
  checkStamp,
  claimStamps,
} from "@/utils/helpers/userHelpers";
import dynamic from "next/dynamic";
import { useAuth } from "@/utils/AuthContext";

const QrReader = dynamic(() => import("react-qr-reader"), {
  ssr: false,
});

const QRScanner = () => {
  const { user } = useAuth();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [result, setResult] = useState("");
  const [delay, setDelay] = useState(500);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const resetScan = (delay = 0) => {
    setTimeout(() => {
      setResult("");
      setDelay(500);
      setLoading(false);
    }, delay);
  };
  const handleClaims = async (stampID) => {
    setLoading(true);
    try {
      //check if user already claim this
      const isClaim = await checkStamp(user.id, stampID);
      if (!isClaim) {
        // if not get data then claim
        const stampData = await getStampDetail(stampID);
        // check if stamp valid
        if (stampData) {
          await claimStamps(user.id, stampID, stampData).then(() => {
            toast({
              title: "Success.",
              description: `Klaim QRCode berhasil.`,
              status: "success",
              duration: 3000,
              isClosable: true,
            });
            resetScan();
            onClose();
          });
        } else {
          toast({
            title: "Error.",
            description: `QRCode tidak valid.`,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          resetScan(1500);
        }
      } else {
        toast({
          title: "Error.",
          description: `Kamu sudah claim QRcode tersebut.`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
      resetScan(1500);
    } catch (error) {
      toast({
        title: "Error.",
        description: `Terjadi kesalahan`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.error(error);
      resetScan(1500);
    }
    setLoading(false);
  };
  const handleScan = (stampID) => {
    if (stampID && result === "") {
      console.log(stampID);
      setDelay(false);
      setResult(stampID);
      handleClaims(stampID);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  useEffect(() => {
    return () => {
      setResult("");
      setDelay(500);
      setLoading(false);
    };
  }, [isOpen]);

  return (
    <>
      <IconButton
        colorScheme="blue"
        icon={<FaQrcode />}
        width="52px"
        height="52px"
        borderRadius="50%"
        position="fixed"
        bottom={4}
        right={4}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Scan QR Code</DrawerHeader>

            <DrawerBody minH="50vh">
              <Box mx="auto" maxW={{ md: "50vh" }}>
                {isOpen && (
                  <QrReader
                    delay={delay}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: "100%" }}
                  />
                )}
              </Box>

              <Text>{result === "" ? "Scanning ..." : result}</Text>
              {loading && (
                <>
                  <Text>Processing</Text>
                  <Spinner />
                </>
              )}
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default QRScanner;
