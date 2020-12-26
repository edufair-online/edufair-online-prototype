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
  Text,
} from "@chakra-ui/react";

import dynamic from "next/dynamic";

const QrReader = dynamic(() => import("react-qr-reader"), {
  ssr: false,
});

const QRScanner = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [result, setResult] = useState("");
  const handleScan = (data) => {
    if (data) {
      console.log(data);
      setResult(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  useEffect(() => {
    return () => {
      setResult("");
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
                <QrReader
                  delay={300}
                  onError={handleError}
                  onScan={handleScan}
                  style={{ width: "100%" }}
                />
              </Box>
              <Text>{result === "" ? "Scanning ..." : result}</Text>
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
