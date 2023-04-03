import { useState } from "react";
import { Container, Box, Heading, Text } from "@chakra-ui/react";
import LoginForm from "./LoginForm";

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
    <Container maxW="md">
      <Box mt={8} textAlign="center">
        <Heading>Entre na Sua Conta</Heading>
        <Text mt={2} color="gray.500">
          Insira suas credenciais
        </Text>
      </Box>
      <Box>
        <LoginForm onSubmit={handleLogin} />
        {isLoading && <Text mt={4}>Carregando...</Text>}
        {error && (
          <Text mt={4} color="red.500">
            {" "}
            {error}
          </Text>
        )}
      </Box>
    </Container>
  );
}

export default LoginPage;
