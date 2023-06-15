import { useModalContext } from "../context/ModalContext";

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
  const { setIsModalOpen, setModalAlt, setModalSrc } = useModalContext();

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
        onClick={handleOpenModal}
      />
    </li>
  );
};
