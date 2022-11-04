import { Header } from "components/Header/Header";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetGames } from "Service/gamesService";
import swal from "sweetalert";
import { ICreateGameType } from "types/interfaces";
import {
  CoverImgGame,
  DivItems,
  EditGameButton,
  EditGameCol,
  EditGameContainer,
  EditGameFormGroup,
  EditGameRow,
  MainPage,
} from "./style";

export const EditGameId = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [gameInfo, setGameInfo] = useState<ICreateGameType>({
    title: "",
    description: "",
    coverImageUrl: "",
    year: 0,
    imbScore: 0,
    trailerYoutubeUrl: "",
    gameplayYouTubeUrl: "",
    genreGame: "",
  });

  useEffect(() => {
    GameId();
  }, []);

  const GameId = async () => {
    if (id) {
      const payloadId = await GetGames.GameById(id);

      const gameInfosValues = {
        title: payloadId?.data.title,
        description: payloadId?.data.description,
        coverImageUrl: payloadId?.data.coverImageUrl,
        year: payloadId?.data.year,
        imbScore: payloadId?.data.imbScore,
        trailerYoutubeUrl: payloadId?.data.trailerYoutubeUrl,
        gameplayYouTubeUrl: payloadId?.data.gameplayYouTubeUrl,
        genreGame: payloadId?.data.genders[0].name,
      };

      setGameInfo({
        ...gameInfo,
        ...gameInfosValues,
      });
    }
  };

  const handleChangesValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "year" || e.target.name === "imbScore") {
      setGameInfo((value: ICreateGameType) => ({
        ...value,
        [e.target.name]: parseInt(e.target.value),
      }));
    } else {
      setGameInfo((value: ICreateGameType) => ({
        ...value,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleEditGameInfos = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (id) {
      const payloadEdit = await GetGames.EditGame(id, gameInfo);

      if (payloadEdit) {
        swal({
          title: "Jogo editado com sucesso!",
          icon: "success",
          timer: 6000,
        });
        navigate(-1);
      } else {
        swal({
          title: "Error",
          text: "Erro ao atualizar o jogo!",
          icon: "error",
          timer: 6000,
        });
        console.error(payloadEdit);
      }
    }
  };

  return (
    <MainPage
      style={{
        backgroundImage: `url(${gameInfo?.coverImageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />

      <EditGameContainer onSubmit={handleEditGameInfos}>
        <DivItems>
          <CoverImgGame
            src={gameInfo.coverImageUrl ? gameInfo.coverImageUrl : ""}
          />
        </DivItems>

        <EditGameRow>
          <EditGameCol>
            <EditGameFormGroup>
              <input
                type="text"
                placeholder="Nome do jogo"
                name="title"
                id="title"
                value={gameInfo.title}
                onChange={handleChangesValues}
                required
              />
            </EditGameFormGroup>
          </EditGameCol>
        </EditGameRow>
        <EditGameRow>
          <EditGameCol>
            <EditGameFormGroup>
              <input
                type="text"
                placeholder="Capa do jogo (1920X1080)"
                name="coverImageUrl"
                id="coverImageUrl"
                value={gameInfo.coverImageUrl}
                onChange={handleChangesValues}
                required
              />
            </EditGameFormGroup>
          </EditGameCol>
        </EditGameRow>
        <EditGameRow>
          <EditGameCol>
            <EditGameFormGroup>
              <input
                type="text"
                placeholder="Descrição breve sobre o jogo"
                name="description"
                id="description"
                value={gameInfo.description}
                onChange={handleChangesValues}
                required
              />
            </EditGameFormGroup>
          </EditGameCol>
        </EditGameRow>
        <EditGameRow>
          <EditGameCol>
            <EditGameFormGroup>
              <input
                type="number"
                placeholder="Ano do lançamento"
                name="year"
                id="year"
                value={gameInfo.year}
                onChange={handleChangesValues}
                required
              />
            </EditGameFormGroup>
          </EditGameCol>
        </EditGameRow>
        <EditGameRow>
          <EditGameCol>
            <EditGameFormGroup>
              <input
                type="number"
                placeholder="Score do jogo (0 até 5)"
                name="imbScore"
                id="imbScore"
                value={gameInfo.imbScore}
                onChange={handleChangesValues}
                required
              />
            </EditGameFormGroup>
          </EditGameCol>
        </EditGameRow>
        <EditGameRow>
          <EditGameCol>
            <EditGameFormGroup>
              <input
                type="text"
                placeholder="Trailer do jogo"
                name="trailerYoutubeUrl"
                id="trailerYoutubeUrl"
                value={gameInfo.trailerYoutubeUrl}
                onChange={handleChangesValues}
                required
              />
            </EditGameFormGroup>
          </EditGameCol>
        </EditGameRow>
        <EditGameRow>
          <EditGameCol>
            <EditGameFormGroup>
              <input
                type="text"
                placeholder="Gameplay do jogo"
                name="gameplayYouTubeUrl"
                id="gameplayYouTubeUrl"
                value={gameInfo.gameplayYouTubeUrl}
                onChange={handleChangesValues}
                required
              />
            </EditGameFormGroup>
          </EditGameCol>
        </EditGameRow>
        <EditGameRow>
          <EditGameCol>
            <EditGameFormGroup>
              <input
                type="text"
                placeholder="Gênero do jogo"
                name="genreGame"
                id="genreGame"
                value={gameInfo.genreGame}
                onChange={handleChangesValues}
                required
              />
            </EditGameFormGroup>
          </EditGameCol>
        </EditGameRow>
        <EditGameButton type="submit">Editar</EditGameButton>
      </EditGameContainer>
    </MainPage>
  );
};
