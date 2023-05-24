import { ContextApi } from "./context";
import { useEffect, useState } from "react";
import Api from "../api/api";

export default function ContextProvider({ children }) {
  const [filmes, setFilmes] = useState([]);
  const [series, setSeries] = useState([]);
  const [filmesTopRated, setFilmesTopRated] = useState([]);
  const [seriesTopRated, setSeriesTopRated] = useState([]);

  useEffect(() => {
    const consumirApi = async () => {
      // Filmes
      const { data } = await Api.get(
        "/movie/popular?include_adult=false&language=pt-BR"
      );
      setFilmes(data);
      const movieTopRated = await Api.get(
        "/movie/top_rated?include_adult=false&language=pt-BR"
      );
      setFilmesTopRated(movieTopRated.data);
      //Series
      const response = await Api.get(
        "/tv/popular?include_adult=false&language=pt-BR"
      );
      setSeries(response.data);
      const tvTopRated = await Api.get(
        "/tv/top_rated?include_adult=false&language=pt-BR"
      );
      setSeriesTopRated(tvTopRated.data);
    };
    consumirApi();
  }, [Api]);

  return (
    <ContextApi.Provider
      value={{ filmes, series, filmesTopRated, seriesTopRated }}
    >
      {children}
    </ContextApi.Provider>
  );
}
