import axios, { AxiosResponse } from "axios";
import type { PhotoI } from "../types/Photo";

axios.defaults.baseURL =
  "https://pixabay.com/api/?key=34392060-359edd6d0360047c3a2486bc3&per_page=12&image_type=photo&orientation=horizontal";
interface fetchType {
  total: number;
  totalHits: number;
  hits: PhotoI[];
}

export const fetchPhotosWithQuery = async (
  searchQuery: string,
  page = 1
): Promise<fetchType> => {
  const response: AxiosResponse<fetchType> = await axios.get(
    `&q=${searchQuery}&page=${page}`
  );
  return response.data;
};
