import { CardGames } from "components/CardGames/List";
import { SearchGames } from "components/Search/Games";
import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { useNavigate } from "react-router-dom";
import { GetGames } from "Service/gamesService";
import { IGamesTypes, IGenrerTypes } from "types/interfaces";
import { Header } from "components/Header/Header";
import {
  CardGrid,
  ContainerCard,
  CoverImageGame,
  GenrerGame,
  LibraryGames,
  SectionSearch,
} from "./style";
import { Genrers } from "Service/genrerService";
import {
  ContainerOption,
  Options,
  OptionSelect,
} from "components/GenrerOption/GenrerOption-style";

export const LibraryAllGames = () => {
  const navigate = useNavigate();

  const [games, setGames] = useState<IGamesTypes[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    getAllGames();
  }, []);

  const getAllGames = async () => {
    const payloadGames = await GetGames.AllGames();
    setGames(payloadGames?.data);
  };

  const searchGames = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const [genrers, setGenrers] = useState<IGenrerTypes[]>([]);

  useEffect(() => {
    const fetchGenrer = async () => {
      const payload: any = await Genrers.AllGenrers();
      setGenrers(payload.data);
    };
    fetchGenrer();
  }, []);

  const [searchGenrer, setSearchGenrer] = useState("");

  // const filteredGames = games.filter((game) => {
  //   const genrerMatch = game.genders?.findIndex(genrer => genrer.name === searchGenrer)
  //   if (genrerMatch !== -1) {
  //     return game;
  //   }
  // })

  return (
    <LibraryGames>
      <Header />

      <ContainerCard>
        <SearchGames value={search} handleSearchValue={searchGames} />

        <ContainerOption>
          <OptionSelect
            value={searchGenrer}
            onChange={(e) => setSearchGenrer(e.target.value)}
          >
            <Options value="">Pesquisar jogo por gêneros</Options>
            {genrers.map((genrer) => (
              <Options value={genrer.name} key={genrer.id}>
                {genrer.name}
              </Options>
            ))}
          </OptionSelect>
        </ContainerOption>

        <SectionSearch>Todos os jogos disponíveis na plataforma</SectionSearch>
      </ContainerCard>

      <CardGrid>
        {search !== "" || searchGenrer !== ""
          ? games
              .filter(
                (e: IGamesTypes) =>
                  (e.title.toLowerCase().includes(search.toLowerCase()) ||
                    e.year.toFixed().includes(search.toLowerCase()) ||
                    e.imbScore.toFixed().includes(search.toLowerCase())) &&
                  e.genders?.map((genrer) => genrer.name).includes(searchGenrer)
                // filteredGames.includes(e)
              )
              .map((game) => (
                <CardGames
                  idGame={game.id}
                  Route={() => navigate(`/profiles/game/${game.id}`)}
                  key={game.id}
                  title={game.title}
                >
                  <CoverImageGame src={game.coverImageUrl} alt="" />
                  <GenrerGame>
                    {game.genders?.map((genrer) => (
                      <span key={genrer.id}>{genrer.name}</span>
                    ))}
                  </GenrerGame>
                  <p>{game.year}</p>
                  <ReactStars
                    count={5}
                    value={game.imbScore}
                    edit={false}
                    size={35}
                    color2={"#ffd700"}
                  />
                </CardGames>
              ))
          : games.map((game) => (
              <CardGames
                idGame={game.id}
                Route={() => navigate(`/profile/game/${game.id}`)}
                key={game.id}
                title={game.title}
              >
                <CoverImageGame src={game.coverImageUrl} alt="" />
                <GenrerGame>
                  {game.genders?.map((genrer) => (
                    <span key={genrer.id}>{genrer.name}</span>
                  ))}
                </GenrerGame>
                <p>{game.year}</p>
                <ReactStars
                  count={5}
                  value={game.imbScore}
                  edit={false}
                  size={35}
                  color2={"#ffd700"}
                />
              </CardGames>
            ))}
      </CardGrid>
    </LibraryGames>
  );
};
