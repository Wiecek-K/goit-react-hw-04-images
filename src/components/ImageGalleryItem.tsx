import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
interface ImageGalleryItemProps {
  src: string;
  alt: string;
  largePhoto: string;
}

export const ImageGalleryItem = ({
  src,
  alt,
  largePhoto,
}: ImageGalleryItemProps) => {
  const {
    isModalOpen,
    modalAlt,
    modalSrc,
    setIsModalOpen,
    setModalAlt,
    setModalSrc,
  } = useContext(ModalContext);

  const handleOpenModal = () => {
    setModalAlt(alt);
    setModalSrc(largePhoto);
    setIsModalOpen(true);
  };
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={src}
        alt={alt}
        onClick={setIsModalOpen(handleOpenModal)}
      />
    </li>
  );
};
