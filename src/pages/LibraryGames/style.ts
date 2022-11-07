import styled from "styled-components";
import profileHomepage from "../../assets/img/profile_homepage.png";

export const LibraryGames = styled.main`
  display: flex;
  flex-direction: column;
  justify-items: center;
  background-image: url(${profileHomepage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
`;

export const CardGrid = styled.section`
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

export const SectionSearch = styled.h4`
  text-align: center;
  color: rgb(230, 230, 230);
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
`;

export const CoverImageGame = styled.img`
  width: 350px;
  height: 400px;
  margin: 0 auto;
  border-radius: 10px;

  @media screen and (max-width: 450px) {
    width: 270px;
  }
`;

export const GenrerGame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 0.5rem;
`;
