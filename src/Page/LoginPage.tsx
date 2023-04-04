import { useState } from "react";
import { Container, Box, Heading, Text, Flex, Center } from "@chakra-ui/react";
import LoginForm from "../Components/LoginForm";

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (username: string, password: string) => {
    setIsLoading(true);
    ///logica de autentificacao

    setTimeout(() => {
      setIsLoading(false);
      setError("Usuario ou senha Incorretos");
    }, 2000);
  };

  return (
    <Center
      // align="center"
      // justify="center"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        textAlign="center"
      >
        <Box mt={8} justifyContent="center">
          <Heading>Entre na Sua Conta</Heading>
          <Text color="red.500">Insira suas credenciais</Text>
        </Box>
        <Box mt={8}>
          <LoginForm onSubmit={handleLogin} />
          {isLoading && <Text mt={4}>Carregando...</Text>}
          {error && (
            <Text mt={4} color="red.500">
              {" "}
              {error}
            </Text>
          )}
        </Box>
      </Box>
    </Center>
  );
}

export default LoginPage;
