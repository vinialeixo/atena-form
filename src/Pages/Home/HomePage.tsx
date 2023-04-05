import { Box, Button, Center, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const HomePage = () => {
  return (
    <Box
      bgImage="url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80')"
      bgSize="cover"
      minH="100vh"
    >
      <Center h="100%">
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          textAlign="center"
        >
          <Heading as="h1" size="4xl" mb={8} color="white">
            Bem-vindo
          </Heading>
          <Button colorScheme="teal" size="lg">
            Começar
          </Button>
        </MotionBox>
      </Center>
    </Box>
  );
};

export default HomePage;
