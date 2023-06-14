import { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import { PhotoI } from "../types/Photo.ts";

interface ImageGalleryProps {
  photos: PhotoI[];
  handleModalOpen(modalAlt: string, modalSrc: string): void;
}

class ImageGallery extends Component<ImageGalleryProps> {
  constructor(props: ImageGalleryProps) {
    super(props);
  }
  handleModalOpen = (modalAlt: string, modalSrc: string) => {
    this.props.handleModalOpen(modalAlt, modalSrc);
  };
  render() {
    const { photos } = this.props;
    return (
      <ul className="ImageGallery">
        {photos.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
          handleModalOpen={this.handleModalOpen}
            key={id}
            src={webformatURL}
            alt={tags}
            largePhoto={largeImageURL}
          />
        ))}
      </ul>
    );
  }
}
export default ImageGallery;
