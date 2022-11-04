import {
  HomeBackground,
  HomeButton,
  HomeContainer,
  HomeDescription,
  HomeMainContainer,
  HomeTitle,
} from "../Home/home-style";
import { CarouselOne } from "../../components/Carousel/Carousel";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/signin");
  };

  return (
    <HomeBackground>
      <HomeMainContainer>
        <HomeContainer>
          <HomeTitle>Bem vindo a Xbox Live</HomeTitle>
          <HomeDescription>
            Clique no botão abaixo para acessar sua conta
          </HomeDescription>
          <HomeButton onClick={handleNavigate}>Entrar</HomeButton>
        </HomeContainer>
        <CarouselOne />
      </HomeMainContainer>
    </HomeBackground>
  );
};
