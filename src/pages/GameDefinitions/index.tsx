import Edit from "assets/icon/edit_profile.svg";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetGames } from "Service/gamesService";
import { IGamesTypes } from "types/interfaces";
import ReactStars from "react-stars";
import { MdFavoriteBorder } from "react-icons/md";
import swal from "sweetalert";
import { GameInfos } from "components/GameInfos";
import { Header } from "components/Header/Header";
import {
  ContainerInfos,
  DeleteGame,
  DivItems,
  EditGame,
  FavoriteIcon,
  GameDescription,
  GameDescriptionFooter,
  ItemsHeader,
  MainPage,
  ScoreGame,
  TitleGame,
} from "./style";

export const GameDefinitions = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [gameId, setGameId] = useState<IGamesTypes>();

  useEffect(() => {
    GetGameId();
  }, []);

  const GetGameId = async () => {
    if (id) {
      const payloadGameId = await GetGames.GameById(id);
      console.log(payloadGameId?.data);
      setGameId(payloadGameId?.data);
    }
  };

  const modalDeleteGame = () => {
    swal({
      title: "Deletar jogo!",
      text: `Deseja deletar o jogo ${gameId?.title}?`,
      icon: "warning",
      buttons: ["Não", "Sim"],
    }).then((res) => {
      if (res) {
        handleDeleteGame();
      }
    });
  };

  const handleDeleteGame = async () => {
    if (id) {
      const payloadDeleteGame = await GetGames.DeleteGame(id);

      if (payloadDeleteGame) {
        swal({
          title: "Jogo deletado do catálogo",
          icon: "success",
          timer: 6000,
        });
        navigate(-1);
      } else {
        swal({
          title: "Error",
          text: "Não é possivel deletar o jogo!",
          icon: "error",
          timer: 6000,
        });
      }
    }
  };

  return (
    <MainPage
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${gameId?.coverImageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />

      <ItemsHeader>
        <ContainerInfos>
          <DivItems>
            <TitleGame>{gameId?.title}</TitleGame>
          </DivItems>
          <DivItems>
            <ScoreGame>
              <ReactStars
                count={5}
                value={gameId?.imbScore}
                edit={false}
                size={35}
                color2={"#ffd700"}
              />
            </ScoreGame>
          </DivItems>
          <DivItems>
            <FavoriteIcon>
              <MdFavoriteBorder />
            </FavoriteIcon>
            <EditGame
              src={Edit}
              onClick={() => navigate(`/profile/game/edit/${id}`)}
            />
            <DeleteGame>
              <AiOutlineDelete onClick={modalDeleteGame} />
            </DeleteGame>
          </DivItems>
        </ContainerInfos>
      </ItemsHeader>

      <GameInfos
        imageGame={gameId?.coverImageUrl}
        gameTrailer={gameId?.trailerYoutubeUrl}
        gameplayGame={gameId?.gameplayYouTubeUrl}
      />

      <GameDescriptionFooter>
        <GameDescription>{gameId?.description}</GameDescription>
      </GameDescriptionFooter>
    </MainPage>
  );
};
