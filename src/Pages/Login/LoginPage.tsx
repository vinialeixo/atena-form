import { useState } from "react";
import { Box, Heading, Text, Center } from "@chakra-ui/react";
import LoginForm from "../../Components/LoginForm";
import { useNavigate } from "react-router-dom";
import ModalForm from "../../Components/Modal/ModalForm";

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleLogin = (username: string, password: string) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      if (username === "teste@teste.com" && password === "12345") {
        return navigate("/home");
      }
      setError("Usuario ou senha Incorretos");
    }, 1500);
  };

  return (
    <>
      <Center
        width="100vw"
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
        >
          <Box mt={8} justifyContent="center">
            <Heading>Entre na Sua Conta</Heading>
            <Text color="red.500">Insira suas credenciais</Text>
          </Box>
          <Box mt={8}>
            <LoginForm onSubmit={handleLogin} openModal={openModal} />
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
      <ModalForm
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={() => console.log("deu certo")}
      />
    </>
  );
}

export default LoginPage;
