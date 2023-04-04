import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

import ModalFormRegister from "./ModalFormRegister";
import { useState } from "react";

interface ModalFormProps {
  isOpen: boolean;
  onSubmit: (username: string, password: string, name: string) => void;
  onClose: () => void;
}

const ModalForm = ({ isOpen, onClose, onSubmit }: ModalFormProps) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleFormSubmit = (
    userName: string,
    password: string,
    name: string
  ) => {
    onSubmit(userName, password, name);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Área de Cadastro</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ModalFormRegister onSubmit={handleFormSubmit} isOpen={false} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalForm;
