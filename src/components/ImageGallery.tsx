import { ImageGalleryItem } from "./ImageGalleryItem";
import { PhotoI } from "../types/Photo.ts";

interface ImageGalleryProps {
  photos: PhotoI[];
}

export const ImageGallery = ({ photos }: ImageGalleryProps) => (
  <ul className="ImageGallery">
    {photos.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ImageGalleryItem
        key={id}
        src={webformatURL}
        alt={tags}
        largePhoto={largeImageURL}
      />
    ))}
  </ul>
);
