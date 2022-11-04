import { CardGames } from "components/CardGames/List";
import { GenrerOption } from "components/GenrerOption/GenrerOption";
import { Header } from "components/Header/Header";
import { SearchGames } from "components/Search/Games";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactStars from "react-stars";
import { HomepageProfile } from "Service/homepageService";
import { IGamesProfile } from "types/interfaces";
import {
  Categories,
  ContainerCard,
  CoverImageGame,
  GenrerGame,
  ListGames,
  SectionList,
  SectionsSearch,
} from "./Games-style";

export const GamesList = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [games, setGames] = useState<IGamesProfile[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    gamesProfile();
  }, []);

  const gamesProfile = async () => {
    if (id) {
      const payload = await HomepageProfile.GetHomepageByProfileId(id);
      console.log(payload?.data.profileData.games);
      setGames(payload?.data.profileData.games);
    }
  };

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <ListGames>
      <Header />
      <SectionList>
        <SearchGames value={search} handleSearchValue={handleSearchValue} />

        <Categories>
          <SectionsSearch>Todos os jogos</SectionsSearch>
          <SectionsSearch>Todos os jogos favoritos</SectionsSearch>
        </Categories>

        <GenrerOption />

        <ContainerCard>
          {search !== ""
            ? games
                .filter(
                  (e: IGamesProfile) =>
                    e.title.toLowerCase().includes(search.toLowerCase()) ||
                    e.imbScore.toFixed().includes(search.toLowerCase())
                )
                .map((game, index) => (
                  <CardGames
                    idGame={game.id}
                    Route={() => navigate(`/profile/game/${game.id}`)}
                    key={index}
                    title={game.title}
                  >
                    <CoverImageGame src={game.coverImageUrl} alt="" />
                    <GenrerGame>
                      {game.genders.map((genrer, index) => (
                        <span key={index}>{genrer.name}</span>
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
                    {game.genders.map((genrer, index) => (
                      <span key={index}>{genrer.name}</span>
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
        </ContainerCard>
      </SectionList>
    </ListGames>
  );
};
