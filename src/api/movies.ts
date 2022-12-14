import { axiosInstance } from "./axios";

export const getPopularMovies = async () => {
  try {
    return await axiosInstance.get("/movie/popular");
  } catch (error) {
    console.error(error);
  }
};

export const getTopRatedMovies = async () => {
  try {
    return await axiosInstance.get("/movie/top_rated");
  } catch (error) {
    console.error(error);
  }
};
export const getMovieDetails = async (id: number) => {
  try {
    return await axiosInstance.get(
      `/movie/${id}?language=es-ES&append_to_response=videos`
    );
  } catch (error) {
    console.error(error);
  }
};
export const getMovieCredits = async (id: number) => {
  try {
    return await axiosInstance.get(`/movie/${id}/credits`);
  } catch (error) {
    console.error(error);
  }
};
