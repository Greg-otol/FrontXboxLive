import { HomeCarousel } from "components/Carousel";
import { useNavigate } from "react-router-dom";
import "./home-style";
import * as Style from "./home-style";

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/signin");
  };

  return (
    <Style.Home>
      <Style.HomeContainer>
        <Style.HomeTitle>Bem vindo a Xbox Live</Style.HomeTitle>

        <Style.HomeDescription>
          Clique no botão abaixo para entrar em sua conta
        </Style.HomeDescription>
        <Style.HomeButton onClick={handleNavigate}>Entrar</Style.HomeButton>
      </Style.HomeContainer>
      <Style.HomeContainerCarousel>
        <HomeCarousel />
      </Style.HomeContainerCarousel>
    </Style.Home>
  );
};
