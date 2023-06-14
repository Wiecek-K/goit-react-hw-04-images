import { useState, createContext, PropsWithChildren } from "react";

interface ModalContextI {
  isModalOpen: boolean;
  modalAlt: string;
  modalSrc: string;
  setModalAlt: (value: string) => void;
  setModalSrc: (value: string) => void;
  setIsModalOpen: (value: boolean) => void;
}

export const ModalContext = createContext<ModalContextI | undefined>(undefined);

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAlt, setModalAlt] = useState("");
  const [modalSrc, setModalSrc] = useState("");

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        modalAlt,
        modalSrc,
        setIsModalOpen,
        setModalAlt,
        setModalSrc,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
