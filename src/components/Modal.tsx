import { useEffect } from "react";
interface ModalProps {
  src: string;
  alt: string;
  closeModal: () => void;
}

export const Modal = ({ src, alt, closeModal }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div className="Overlay" onClick={closeModal}>
      <div
        className="Modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};
