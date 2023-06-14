import { useState, useEffect, useContext } from "react";

import { ImageGallery } from "./components/ImageGallery";
import { Button } from "./components/Button";
import { Loader } from "./components/Loader.tsx";
import { Searchbar } from "./components/Searchbar.tsx";
import { Modal } from "./components/Modal.tsx";
import { ModalProvider, ModalContext } from "./context/ModalContext.tsx";

import { fetchPhotosWithQuery } from "./services/api";
import type { PhotoI } from "./types/Photo.ts";

function App() {
  const [photos, setPhotos] = useState<PhotoI[]>([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("dog");
  const [isLoading, setIsLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    getPhotos(query, page);
  }, [query, page]);

  const {
    isModalOpen,
    modalAlt,
    modalSrc,
    setIsModalOpen,
    setModalAlt,
    setModalSrc,
  } = useContext(ModalContext);

  const getPhotos = async (query: string, page: number) => {
    setIsLoading(true);
    try {
      const data = await fetchPhotosWithQuery(query, page);
      setPhotos((prevState) => [...prevState, ...data.hits]);
      if (data.total > page * 12) {
        setIsEnd(false);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  const loadMore = () => {
    setPage((prevState) => prevState + 1);
  };
  const resetPhotosData = () => {
    setPhotos([]);
    setPage(1);
    setIsEnd(true);
  };
  const handleSubmit = (query: string) => {
    resetPhotosData();
    setQuery(query);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setModalAlt("");
    setModalSrc("");
  };
  return (
    <ModalProvider>
      <Searchbar handleSubmit={handleSubmit} />
      <div className="App">
        <ImageGallery photos={photos} />
        {isLoading ? <Loader /> : null}
        {isModalOpen ? (
          <Modal src={modalSrc} alt={modalAlt} closeModal={closeModal} />
        ) : null}
        {!isEnd ? <Button onClick={loadMore} title="Load More" /> : null}
      </div>
    </ModalProvider>
  );
}
export default App;
