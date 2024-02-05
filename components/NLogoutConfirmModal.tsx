import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { logoutAuth } from "@/stores/slice/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function App() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleLogout = () => {
    dispatch(logoutAuth());
    router.push("/login");
  };

  return (
    <>
      <Button size="sm" variant="ghost" color="danger" onPress={onOpen}>
        Logout
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Logout</ModalHeader>
              <ModalBody>
                <p>You want to logout?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={handleLogout}>
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
