import React, {
  useState,
  createContext,
  PropsWithChildren,
  useContext,
} from "react";

interface ModalContextI {
  isModalOpen: boolean;
  modalAlt: string;
  modalSrc: string;
  setModalAlt: (value: string) => void;
  setModalSrc: (value: string) => void;
  setIsModalOpen: (value: boolean) => void;
}

const ModalContext = createContext<ModalContextI | undefined>(undefined);

export const useModalContext = (): ModalContextI => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};

export const ModalContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAlt, setModalAlt] = useState("");
  const [modalSrc, setModalSrc] = useState("");

  const contextValue: ModalContextI = {
    isModalOpen,
    setIsModalOpen,
    modalAlt,
    setModalAlt,
    modalSrc,
    setModalSrc,
  };
  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};
