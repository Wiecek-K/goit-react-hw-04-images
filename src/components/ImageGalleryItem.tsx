import { Component } from "react";

interface ImageGalleryItemProps {
  src: string;
  alt: string;
  largePhoto: string;
  handleModalOpen(modalAlt: string, modalSrc: string): void;
}
interface State {
  isModalOpen: boolean;
}

class ImageGalleryItem extends Component<ImageGalleryItemProps, State> {
  constructor(props: ImageGalleryItemProps) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  handleModalOpen = () => {
    this.props.handleModalOpen(this.props.alt, this.props.src);
  };



  render() {
    return (
      <li className="ImageGalleryItem">
        <img
          onClick={this.handleModalOpen}
          className="ImageGalleryItem-image"
          src={this.props.src}
          alt={this.props.alt}
        />
      </li>
    );
  }
}
export default ImageGalleryItem;
