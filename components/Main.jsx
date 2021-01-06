import { Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionStack = motion.custom(Stack);
const Main = (props) => {
  // const mainVariant = {
  //   exit: { opacity: 0, transition: { duration: 0.1 } },
  // };
  return (
    <MotionStack
      flex={1}
      w="full"
      maxW={[null, null, "2xl", "6xl"]}
      px={{ base: 2, md: 0 }}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      {...props}
    />
  );
};

export default Main;
