import gameImg from "../../assets/icon/add_game.svg";
import category from "../../assets/img/category.png";
import { Header } from "components/Header/Header";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactStars from "react-stars";
import { Favorite } from "Service/favoriteService";
import { Profiles } from "Service/profileService";
import { IFavoriteGamesType, IProfilesTypes } from "types/interfaces";
import {
  AdminDiv,
  AdminProfileInfos,
  CardSection,
  ContentCard,
  CoverImageGame,
  GameButton,
  GenrerButton,
  HomePageButton,
  ImageDiv,
  ImgGame,
  ImgGenrer,
  InfoSection,
  ProfileHomepage,
  ProfileImg,
  ProfileName,
  ScoreGame,
  TitleFavorite,
  TitleGame,
} from "./homepage-style";

export const Homepage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [profileInfos, setProfileInfos] = useState<IProfilesTypes>({
    title: "",
    imageUrl: "",
    userId: "",
    user: {
      nickname: "",
      email: "",
      isAdmin: false,
    },
  });

  const [favoriteGames, setFavoriteGames] = useState<IFavoriteGamesType>({
    games: [
      {
        id: "",
        title: "",
        coverImageUrl: "",
        description: "",
        imbScore: 0,
        genders: [
          {
            name: "",
          },
        ],
      },
    ],
    id: "",
  });

  useEffect(() => {
    profileInfosId();
    profileFavoriteGames();
  }, []);

  const profileInfosId = async () => {
    if (id) {
      const getIdProfile = await Profiles.ProfileGetById(id);

      const profileValues = {
        title: getIdProfile?.data.title,
        imageUrl: getIdProfile?.data.imageUrl,
        userId: getIdProfile?.data.userId,
        user: {
          nickname: getIdProfile?.data.user.nickname,
          email: getIdProfile?.data.user.email,
          isAdmin: getIdProfile?.data.user.isAdmin,
        },
      };

      setProfileInfos({
        ...profileInfos,
        ...profileValues,
      });
    }
  };

  const profileFavoriteGames = async () => {
    if (id) {
      const res = await Favorite.GetFavoriteByProfileId(id);
      setFavoriteGames(res?.data.favoriteGames);
    }
  };

  const UserConfigsNavigate = () => {
    navigate(`/user/${profileInfos?.userId}`);
  };

  return (
    <ProfileHomepage>
      <Header />
      <ImageDiv>
        <AdminProfileInfos>
          <ProfileImg
            src={profileInfos?.imageUrl}
            alt="Capa do perfil"
            onClick={UserConfigsNavigate}
          />
          <ProfileName>{profileInfos?.title}</ProfileName>
          <ProfileName>{profileInfos.user?.nickname}</ProfileName>
        </AdminProfileInfos>

        {profileInfos.user?.isAdmin === true ? (
          <AdminDiv>
            <GameButton
              onClick={() => navigate(`/profile/createGames&Genrer/${id}`)}
            >
              <ImgGame src={gameImg} />
            </GameButton>

            <GenrerButton onClick={() => navigate(`/profile/genrers/${id}`)}>
              <ImgGenrer src={category} />
            </GenrerButton>
          </AdminDiv>
        ) : (
          ""
        )}
      </ImageDiv>

      <InfoSection>
        {/* <HomePageButton
          onClick={() => navigate(`/profile/homepage/list/${id}`)}
        >
          Minha biblioteca
        </HomePageButton> */}
        <HomePageButton onClick={() => navigate(`/profile/homepage/library`)}>
          Clique aqui para acessar todos os jogos
        </HomePageButton>
      </InfoSection>

      <TitleFavorite>Jogos favoritos</TitleFavorite>

      <CardSection>
        {favoriteGames
          ? favoriteGames.games.map((game, index) => (
              <ContentCard key={index}>
                <TitleGame>{game.title}</TitleGame>
                <CoverImageGame
                  onClick={() => navigate(`/profile/game/${game.id}`)}
                  src={game.coverImageUrl}
                  alt={"image de fundo do jogo" + game.title}
                />
                <ScoreGame>
                  <ReactStars
                    count={5}
                    value={game.imbScore}
                    edit={false}
                    size={35}
                    color2={"#ffd700"}
                  />
                </ScoreGame>
              </ContentCard>
            ))
          : ""}
      </CardSection>
    </ProfileHomepage>
  );
};
