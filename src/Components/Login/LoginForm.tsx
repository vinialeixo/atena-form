import { useState } from "react";

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Tooltip,
} from "@chakra-ui/react";

interface LoginFormPros {
  onSubmit: (username: string, password: string) => void;
  openModal: () => void;
}

const LoginForm = ({ onSubmit, openModal }: LoginFormPros) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //para pagina nao recarregar
    onSubmit(username, password);
  };

  return (
    <form onSubmit={handleLogin}>
      <FormControl id="username" isRequired>
        <Tooltip label="teste@teste.com" placement="left">
          <FormLabel> E-mail </FormLabel>
        </Tooltip>
        <Input type="text" value={username} onChange={handleUsernameChange} />
      </FormControl>
      <FormControl id="password" isRequired>
        <Tooltip label="12345" placement="left">
          <FormLabel>Password</FormLabel>
        </Tooltip>
        <Input
          placeholder="*******"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </FormControl>
      <Button mt={2} type="submit">
        Sign In
      </Button>
      <Button mt={2} ml={5} onClick={openModal}>
        Sign Up
      </Button>
    </form>
  );
};

export default LoginForm;
