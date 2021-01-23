import { useRef } from "react";
import {
  Box,
  IconButton,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Link from "@/components/Link";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import displayName from "@/utils/displayName";
import { useAuth } from "@/utils/AuthContext";
const Navbar = () => {
  const Icons = useColorModeValue(<FaSun />, <FaMoon />);
  const color = useColorModeValue("gray.800", "white");
  const bgDrawer = useColorModeValue("white", "black");
  const { toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { user, logout } = useAuth();
  return (
    <>
      <Box w="full" mx="10px" height="50px">
        <Stack
          px={{ base: 2, md: 0 }}
          h="full"
          m="auto"
          maxW={[null, null, "2xl", "6xl"]}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row">
            <Link
              d={{ base: "block", lg: "none" }}
              href="/"
              route
              fontWeight="bold"
              color={color}
            >
              Edufair
            </Link>
            <Stack
              spacing={5}
              direction="row"
              d={{ base: "none", lg: "flex" }}
              align="center"
            >
              <Link href="/" route fontWeight="bold" color={color}>
                Home
              </Link>
              <Link
                isExternal={false}
                href="https://edufair-blog.vercel.app/"
                color={color}
              >
                Blog
              </Link>
              <Link route href="/sponsorship" color={color}>
                Sponsorship
              </Link>
              <Link route href="/about" color={color}>
                About
              </Link>
            </Stack>
          </Stack>

          <Stack direction="row">
            <Stack
              spacing={5}
              direction="row"
              d={{ base: "none", lg: "flex" }}
              align="center"
            >
              {user ? (
                <>
                  <Link fontWeight="500" route href="/dashboard" color={color}>
                    hi, {displayName(user.displayName)}
                  </Link>
                  <Link route href="/dashboard" color={color}>
                    Dashboard
                  </Link>
                  <Link route href="#" color={color} onClick={logout}>
                    Logout
                  </Link>
                </>
              ) : (
                <Link route href="/signIn" color={color} onClick={logout}>
                  Sign in
                </Link>
              )}
            </Stack>
            <IconButton
              variant="transparent"
              size="sm"
              onClick={toggleColorMode}
              icon={Icons}
            />
            <IconButton
              d={{ base: "flex", lg: "none" }}
              variant="transparent"
              size="sm"
              onClick={onOpen}
              icon={<FaBars />}
            />
          </Stack>
        </Stack>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent bg={bgDrawer}>
            <DrawerCloseButton />
            <DrawerHeader>Edufair covid edition</DrawerHeader>
            <DrawerBody>
              <Stack>
                {user ? (
                  <>
                    <Link
                      fontWeight="bold"
                      px="2"
                      route
                      href="/dashboard"
                      color={color}
                    >
                      hi, {displayName(user.displayName)}
                    </Link>
                    <Link p="2" route href="/dashboard" color={color}>
                      Dashboard
                    </Link>
                  </>
                ) : (
                  <Link
                    p="2"
                    route
                    href="/signIn"
                    color={color}
                    onClick={logout}
                  >
                    Sign in
                  </Link>
                )}
                <Link
                  p="2"
                  isExternal={false}
                  href="https://edufair-blog.vercel.app/"
                  color={color}
                >
                  Blog
                </Link>
                <Link p="2" route href="/sponsorship" color={color}>
                  Sponsorship
                </Link>
                <Link p="2" route href="/about" color={color}>
                  About
                </Link>
                {user && (
                  <Link p="2" route href="#" color={color} onClick={logout}>
                    Logout
                  </Link>
                )}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Navbar;
