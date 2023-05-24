import { ContextApi } from "../../context/context";
import {
  Container,
  Hero,
  Info,
  DivCarrousel,
  Titulos,
  EmAlta,
  DivEmAlta,
  Filtragem,
  DivStar,
  DivImdb,
  DivAv,
  Assistir,
  Trailler,
  Botao,
  DivFooter,
  Buttons,
} from "./styled";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Api from "../../api/api";
import { transformArr } from "../../functions/convert";
import Cards from "../../components/Cards";
import Carousel from "react-elastic-carousel";

import Pesquisa from "../../assets/images/Pesquisa.svg";
import Imdb from "../../assets/images/imdb.png";
import Estrela from "../../assets/images/estrela.png";
import Player from "../../assets/images/Player.png";
import Video from "../../assets/images/Video.png";

export default function Home() {
  const [hero, setHero] = useState([]);
  const { filmes, series, filmesTopRated, seriesTopRated } =
    useContext(ContextApi);
  const { pathname } = useLocation();

  useEffect(() => {
    if ("results" in filmes && "results" in series) {
      setTimeout(async () => {
        const filmesId = filmes.results.slice(0, 1);
        const seriesId = series.results.slice(0, 1);
        await Api.get(
          `/${pathname === "/filmes" || pathname === "/" ? "movie" : "tv"}/${
            pathname === "/filmes" || pathname === "/"
              ? filmesId[0].id
              : seriesId[0].id
          }`
        )
          .then((response) => setHero(response.data))
          .catch((error) => console.log(error));
      }, 0.2);
    }
    // /${path}/${id}&include_adult=false
  }, [filmes, series]);

  return (
    <Container>
      <Hero
        img={
          hero !== null
            ? `https://image.tmdb.org/t/p/original${hero.backdrop_path}`
            : "https://viciados.net/wp-content/uploads/2022/01/Jujutsu-Kaisen-2-temporada.webp"
        }
      >
        {hero !== null ? (
          <Info>
            <h1>{hero.title ? hero.title : hero.name}</h1>
            <small>
              {hero.genres
                ? hero.genres.map((item) => {
                    return <span key={item.id}> {item.name} </span>;
                  })
                : "sem generos"}
              |{" "}
              {transformArr(
                hero.release_date ? hero.release_date : hero.last_air_date,
                4
              )}
            </small>
            <DivAv>
              <DivStar src={Estrela} alt="star" />
              <span>
                {transformArr(
                  hero.vote_average ? hero.vote_average : hero.popularity,
                  3
                )}
              </span>
              <DivImdb src={Imdb} alt="" />
            </DivAv>

            <p>{hero.overview ? hero.overview : "Sem descrição"}</p>

            <Botao>
              <Assistir>
                <img src={Player} alt="" />
                <p>Assistir Agora</p>
              </Assistir>
              <Trailler>
                <img src={Video} alt="" />
                <p>Trailler</p>
              </Trailler>
            </Botao>
          </Info>
        ) : (
          <h2>Carregando informações</h2>
        )}
      </Hero>
      <Filtragem>
        <ul>
          <li>Popular</li>
          <li>Drama</li>
          <li>Ação</li>
          <li>Aventura</li>
          <li>Comédia</li>
          <li>Crime</li>
          <li>Fantasia</li>
          <li>Família</li>
          <img src={Pesquisa} />
        </ul>
      </Filtragem>
      <Titulos>Últimos Lançamentos</Titulos>
      <DivCarrousel>
        {filmes.results && series.results && (
          <Carousel itemsToShow={5} pagination={false}>
            {pathname === "/filmes" || pathname === "/"
              ? filmes.results.map((item) => (
                  <Cards
                    key={item.id}
                    img={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    title={item.title ? item.title : item.name}
                    year={transformArr(
                      item.release_date
                        ? item.release_date
                        : item.first_air_date,
                      4
                    )}
                  />
                ))
              : series.results.map((item) => (
                  <Cards
                    key={item.id}
                    img={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    title={item.title ? item.title : item.name}
                    year={transformArr(
                      item.release_date
                        ? item.release_date
                        : item.first_air_date,
                      4
                    )}
                  />
                ))}
          </Carousel>
        )}
      </DivCarrousel>

      <Titulos>Em Alta</Titulos>
      <DivEmAlta>
        {filmesTopRated.results && seriesTopRated.results && (
          <EmAlta>
            {pathname === "/filmes" || pathname === "/"
              ? filmesTopRated.results.map((item) => (
                  <Cards
                    key={item.id}
                    img={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    title={item.title ? item.title : item.name}
                    year={transformArr(
                      item.release_date
                        ? item.release_date
                        : item.first_air_date,
                      4
                    )}
                  />
                ))
              : seriesTopRated.results.map((item) => (
                  <Cards
                    key={item.id}
                    img={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    title={item.title ? item.title : item.name}
                    year={transformArr(
                      item.release_date
                        ? item.release_date
                        : item.first_air_date,
                      4
                    )}
                  />
                ))}
          </EmAlta>
        )}
      </DivEmAlta>

      <Buttons>
        <div>
          <button className="Ativo">1</button>
          <button className="Iguais">2</button>
          <button className="Iguais">3</button>
          <button className="Iguais">4</button>
          <p>...</p>
          <button className="Iguais">322</button>
          <button className="Last">Último</button>
        </div>
      </Buttons>

      <DivFooter>
        <p>Desenvolvido por André Bertolin</p>
      </DivFooter>
    </Container>
  );
}
