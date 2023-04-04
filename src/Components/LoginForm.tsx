import { useState } from "react";

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

interface LoginFormPros {
  onSubmit: (username: string, password: string) => void;
  openModal: () => void;
}

function LoginForm({ onSubmit, openModal }: LoginFormPros) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form onSubmit={handleLogin}>
      <FormControl id="username" isRequired>
        <FormLabel> User </FormLabel>
        <Input type="text" value={username} onChange={handleUsernameChange} />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          type="passwprd"
          value={password}
          onChange={handlePasswordChange}
        />
      </FormControl>
      <Button mt={2} type="submit">
        Enter
      </Button>
      <Button mt={2} onClick={openModal}>
        Cadastrar
      </Button>
    </form>
  );
}

export default LoginForm;
