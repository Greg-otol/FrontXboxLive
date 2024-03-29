import swal from "sweetalert";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetGames } from "Service/gamesService";
import { ICreateGameType, IGenrerTypes } from "types/interfaces";
import { Header } from "components/Header/Header";
import {
  AddGameButton,
  AddGameCol,
  AddGameContainer,
  AddGameFormGroup,
  AddGameRow,
  CoverImgGame,
  DivImg,
  AddGameSelect,
  Page,
} from "./style";
import { Genrers } from "../../Service/genrerService";

export const CrudGamesGenrer = () => {
  const [genrers, setGenrers] = useState<IGenrerTypes[]>([]);

  useEffect(() => {
    allGenrers();
  }, []);

  const allGenrers = async () => {
    const allGenrers = await Genrers.AllGenrers();

    if (allGenrers) {
      setGenrers(allGenrers.data);
    }
  };

  const navigate = useNavigate();

  const [game, setGame] = useState<ICreateGameType>({
    title: "",
    coverImageUrl: "",
    description: "",
    year: 0,
    imbScore: 0,
    gameplayYouTubeUrl: "",
    trailerYoutubeUrl: "",
    genreGame: "",
  });

  const handleValues = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (e.target.name === "year" || e.target.name === "imbScore") {
      setGame((value: ICreateGameType) => ({
        ...value,
        [e.target.name]: parseInt(e.target.value),
      }));
    } else {
      setGame((value: ICreateGameType) => ({
        ...value,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleCreateGame = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payloadGame = await GetGames.CreateGame(game);

    if (payloadGame) {
      swal({
        title: "Jogo cadastrado com sucesso!",
        icon: "success",
        timer: 6000,
      });
    } else {
      swal({
        title: "Error ao cadastrar o jogo",
        icon: "error",
        timer: 6000,
      });
    }
    navigate(-1);
  };

  return (
    <Page>
      <Header />
      <AddGameContainer onSubmit={handleCreateGame}>
        <DivImg>
          <CoverImgGame src={game.coverImageUrl ? game.coverImageUrl : ""} />
        </DivImg>

        <AddGameRow>
          <AddGameCol>
            <AddGameFormGroup>
              <input
                type="text"
                placeholder="Nome do jogo"
                name="title"
                id="title"
                onChange={handleValues}
                required
              />
            </AddGameFormGroup>
          </AddGameCol>
        </AddGameRow>

        <AddGameRow>
          <AddGameCol>
            <AddGameFormGroup>
              <input
                type="text"
                placeholder="Url da capa do jogo"
                name="coverImageUrl"
                id="coverImageUrl"
                onChange={handleValues}
                required
              />
            </AddGameFormGroup>
          </AddGameCol>
        </AddGameRow>

        <AddGameRow>
          <AddGameCol>
            <AddGameFormGroup>
              <input
                type="text"
                placeholder="Descrição sobre o jogo"
                name="description"
                id="description"
                onChange={handleValues}
                required
              />
            </AddGameFormGroup>
          </AddGameCol>
        </AddGameRow>

        <AddGameRow>
          <AddGameCol>
            <AddGameFormGroup>
              <input
                type="number"
                placeholder="Ano de lançamento"
                name="year"
                id="year"
                onChange={handleValues}
                required
              />
            </AddGameFormGroup>
          </AddGameCol>
        </AddGameRow>

        <AddGameRow>
          <AddGameCol>
            <AddGameFormGroup>
              <input
                type="number"
                placeholder="ImbScore do jogo (0 a 5)"
                name="imbScore"
                id="imbScore"
                onChange={handleValues}
                required
              />
            </AddGameFormGroup>
          </AddGameCol>
        </AddGameRow>

        <AddGameRow>
          <AddGameCol>
            <AddGameFormGroup>
              <input
                type="text"
                placeholder="Url do trailer do jogo"
                name="trailerYoutubeUrl"
                id="trailerYoutubeUrl"
                onChange={handleValues}
                required
              />
            </AddGameFormGroup>
          </AddGameCol>
        </AddGameRow>

        <AddGameRow>
          <AddGameCol>
            <AddGameFormGroup>
              <input
                type="text"
                placeholder="Url do gameplay"
                name="gameplayYouTubeUrl"
                id="gameplayYouTubeUrl"
                onChange={handleValues}
                required
              />
            </AddGameFormGroup>
          </AddGameCol>
        </AddGameRow>

        <AddGameRow>
          <AddGameCol>
            <AddGameSelect>
              <select name="genreGame" id="genreGame" onChange={handleValues}>
                <option value="">Selecione o gênero</option>
                {genrers.map((genrer) => {
                  return (
                    <option key={genrer.id} value={genrer.name}>
                      {genrer.name}
                    </option>
                  );
                })}
              </select>
            </AddGameSelect>
          </AddGameCol>
        </AddGameRow>

        <AddGameButton type="submit">Cadastrar</AddGameButton>
      </AddGameContainer>
    </Page>
  );
};
