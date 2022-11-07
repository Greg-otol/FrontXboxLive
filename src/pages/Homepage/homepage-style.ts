import styled from "styled-components";
import { Games } from "Mocks/Games";
import profileHomepage from "../../assets/img/profile_homepage.png";

export const imgUrl = Games.map((games) => games.coverImageUrl);

export const ProfileHomepage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${profileHomepage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;

  @media (min-height: 1200px) {
    height: 100vh;
  }
`;

export const TitleFavorite = styled.h3`
  padding: 10px;
  color: rgb(230, 230, 230);
`;

export const AdminProfileInfos = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem 0;
`;

export const ProfileImg = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #000;
  transition: all ease-in-out 0.6s;
  :hover {
    transform: scale(1.2);
  }
`;

export const ProfileName = styled.p`
  text-align: center;
  color: rgb(230, 230, 230);
  margin: 0;
  ::selection {
    background: transparent;
  }
`;

export const ImageDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 180px;
  padding: 20px;
`;

export const AdminDiv = styled.div`
  display: flex;
  gap: 20px;
`;

export const CardSection = styled.section`
  /* display: grid;
    justify-self: center;
    justify-items: center;
    align-self: center;
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  height: auto;
  margin-top: 20px;
`;

export const ContentCard = styled.div`
  color: #f4f5f9;
  line-height: 1.5rem;
  margin: 1rem 0.6rem;
`;

export const TitleGame = styled.h2`
  font-size: 1.25rem;
  line-height: 1.25rem;
  color: #f4f5f9;
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  ::selection {
    background: transparent;
    color: rgb(230, 230, 230);
  }
`;

export const CoverImageGame = styled.img`
  width: 350px;
  height: 400px;
  margin: 0 auto;
  border-radius: 10px;
  cursor: pointer;

  @media screen and (max-width: 450px) {
    width: 270px;
  }
`;

export const ScoreGame = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.6rem auto;
  ::selection {
    background: transparent;
    color: rgb(230, 230, 230);
  }
`;

export const InfoSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: auto;
  padding: 20px;
  gap: 20px;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const InfoCard = styled.div`
  color: rgb(230, 230, 230);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: auto;
  margin: 20px;
  border: 2px solid #000;
  cursor: pointer;
`;

export const HomePageButton = styled.button`
  background-color: rgba(0, 0, 0, 0.2);
  color: rgb(230, 230, 230);
  border: none;
  border-radius: 5px;
  text-decoration: none;
  display: block;
  font-size: 1.25rem;
  padding: 10px;
  margin: 10px auto;
  width: 60%;
  cursor: pointer;
  transition: all 0.8s ease-out;
  &:hover {
    background-color: rgba(0, 200, 0, 0.6);
  }
`;

export const GameButton = styled.button`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0);
  border: none;
  transition: all 0.5s ease-out;

  &:hover {
    transform: scale(1.11);
  }
`;

export const ImgGame = styled.img`
  display: flex;
  width: 50px;
`;

export const GenrerButton = styled.button`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0);
  border: none;
  transition: all 0.5s ease-out;

  &:hover {
    transform: scale(1.11);
  }
`;

export const ImgGenrer = styled.img`
  display: flex;
  width: 50px;
`;
