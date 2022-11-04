import { CardGames } from "components/CardGames/List";
import { GenrerOption } from "components/GenrerOption/GenrerOption";
import { SearchGames } from "components/Search/Games";
import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { useNavigate } from "react-router-dom";
import { GetGames } from "Service/gamesService";
import { IGamesTypes } from "types/interfaces";
import { Header } from "components/Header/Header";
import {
  CardGrid,
  ContainerCard,
  CoverImageGame,
  GenrerGame,
  LibraryGames,
  SectionSearch,
} from "./style";

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

  return (
    <LibraryGames>
      <Header />

      <ContainerCard>
        <SearchGames value={search} handleSearchValue={searchGames} />
        <GenrerOption />

        <SectionSearch>Todos os jogos disponiveis na plataforma</SectionSearch>
      </ContainerCard>

      <CardGrid>
        {search !== ""
          ? games
              .filter(
                (e: IGamesTypes) =>
                  e.title.toLowerCase().includes(search.toLowerCase()) ||
                  e.year.toFixed().includes(search.toLowerCase()) ||
                  e.imbScore.toFixed().includes(search.toLowerCase())
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
