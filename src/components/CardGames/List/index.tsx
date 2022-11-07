import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { ReactNode, useState } from "react";
import { Favorite } from "Service/favoriteService";
import { useNavigate } from "react-router-dom";
import { Card, ContentCard, Icon, IconContainer, TitleGame } from "./style";

interface CardProps {
  title: string;
  children: ReactNode;
  Route: () => void;
  idGame: string | undefined;
}

export const CardGames = (props: CardProps) => {
  const navigate = useNavigate();

  const [favorite, setFavorite] = useState<string>();

  const favoriteGame = async () => {
    const id = localStorage.getItem("profileId");

    if (id) {
      const favoriteObj = {
        gameId: props.idGame,
        favoriteGameId: props.idGame,
      };

      const payloadFavorite = await Favorite.FavoriteGame(id, favoriteObj);
      console.log(payloadFavorite?.data);
      setFavorite(payloadFavorite?.data);
      navigate(-1);
    }
  };

  return (
    <Card>
      <IconContainer>
        <Icon onClick={favoriteGame}>
          {favorite ? <MdFavorite /> : <MdFavoriteBorder />}
        </Icon>
      </IconContainer>

      <TitleGame>{props.title}</TitleGame>

      <ContentCard onClick={props.Route}>{props.children}</ContentCard>
    </Card>
  );
};
