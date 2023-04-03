import { useState } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

interface LoginFormPros {
  onSubmit: (username: string, password: string) => void;
}

function LoginForm({ onSubmit }: LoginFormPros) {
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
      <Button type="submit">Enter</Button>
    </form>
  );
}

export default LoginForm;
