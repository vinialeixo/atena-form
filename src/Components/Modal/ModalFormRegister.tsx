import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

interface ModalFormRegisterProps {
  isOpen: boolean;
  onSubmit: (username: string, password: string, name: string) => void;
}

const ModalFormRegister = ({ onSubmit }: ModalFormRegisterProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(email, password, name);
  };

  return (
    <form onSubmit={handleRegister}>
      <FormControl id="name" isRequired>
        <FormLabel>Nome</FormLabel>
        <Input type="text" value={name} onChange={handleNameChange} />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={email} onChange={handleEmailChange} />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </FormControl>
      <Button type="submit">Registrar</Button>
    </form>
  );
};

export default ModalFormRegister;
