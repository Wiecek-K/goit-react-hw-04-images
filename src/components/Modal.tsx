import React from "react";

interface ModalProps {
  src: string;
  alt: string;
  closeModal: () => void;
}

class Modal extends React.Component<ModalProps> {
  constructor(props: ModalProps) {
    super(props);
  }

  handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      this.props.closeModal();
    }
  };
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <div className="Overlay" onClick={this.props.closeModal}>
        <div className="Modal">
          <img src={this.props.src} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
