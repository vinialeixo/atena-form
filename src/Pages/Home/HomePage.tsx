import { Box, Button, Center, Flex, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

const HomePage = () => {
  const navigate = useNavigate();

  const hangleBackHome = () => {
    navigate("/login");
  };

  return (
    <Box
      bgImage="url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80')"
      bgSize="cover"
      width="100vw"
      minH="100vh"
    >
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        textAlign="center"
      >
        <Button
          bg="#c54226"
          textColor="#ffffff"
          size="md"
          mt={10}
          mr={1000}
          onClick={hangleBackHome}
        >
          Voltar Login
        </Button>

        <Heading as="h1" size="4xl" mt={10} mb={8} color="white">
          Bem-vindo
        </Heading>
        <Box ml={525}>
          <Image src={"https://atena.io/img/atena-logo-white.png"} />
        </Box>
      </MotionBox>
    </Box>
  );
};

export default HomePage;
