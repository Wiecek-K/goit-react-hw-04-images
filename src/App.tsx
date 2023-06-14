import { Component } from "react";

import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Loader from "./components/Loader.tsx";
import Searchbar from "./components/Searchbar.tsx";

import { fetchPhotosWithQuery } from "./services/api";
import type { PhotoI } from "./types/Photo.ts";
import Modal from "./components/Modal.tsx";

interface State {
  page: number;
  query: string;
  isloading: boolean;
  photos: PhotoI[];
  isEnd: boolean;
  isModalOpen: boolean;
  modalSrc: string;
  modalAlt: string;
}

export default class App extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      page: 1,
      query: "dog",
      isloading: false,
      isModalOpen: false,
      photos: [],
      isEnd: false,
      modalSrc: "",
      modalAlt: "",
    };
  }

  getPhotos = async (query: string, page?: number) => {
    this.setState({ isloading: true });
    try {
      const data = await fetchPhotosWithQuery(query, page);
      this.setState((prevState) => ({
        photos: [...prevState.photos, ...data.hits],
      }));
      if (data.total > this.state.page * 12) {
        this.setState({ isEnd: false });
      }
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ isloading: false });
    }
  };

  loadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };
  resetPhotosData = () => {
    this.setState({ photos: [], page: 1, isEnd: true });
  };
  handleSubmit = (query: string) => {
    this.resetPhotosData();
    this.setState({ query });
    this.getPhotos(query, 1);
  };

  componentDidMount() {
    this.getPhotos(this.state.query, this.state.page);
  }
  componentDidUpdate(_prevProps: object, prevState: State) {
    if (prevState.page !== this.state.page) {
      this.getPhotos(this.state.query, this.state.page);
    }
  }
  handleModalOpen = (modalAlt: string, modalSrc: string) => {
    this.setState({ modalAlt, modalSrc, isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false, modalAlt: "", modalSrc: "" });
  };
  render() {
    return (
      <>
        <Searchbar handleSubmit={this.handleSubmit} />
        <div className="App">
          <ImageGallery
            photos={this.state.photos}
            handleModalOpen={this.handleModalOpen}
          />
          {this.state.isloading ? <Loader /> : null}
          {this.state.isModalOpen ? (
            <Modal
              src={this.state.modalSrc}
              alt={this.state.modalAlt}
              closeModal={this.closeModal}
            />
          ) : null}
          {!this.state.isEnd ? (
            <Button onClick={this.loadMore} title="Load More" />
          ) : null}
        </div>
      </>
    );
  }
}
