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

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (username: string, password: string, name: string) => void;
}

const ModalForm = ({ isOpen, onClose, onSubmit }: ModalFormProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Register Area</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ModalFormRegister onSubmit={onSubmit} isOpen={false} />
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
