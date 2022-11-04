import styled from "styled-components";
import homepageBackground from "../../assets/img/profile_homepage.png";

export const ListGames = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${homepageBackground});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
`;

export const SectionList = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

export const Categories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 1rem 0;
`;

export const SectionsSearch = styled.p`
  margin: 0 3rem;
  color: #f4f5f9;
  cursor: pointer;
`;

export const ContainerCard = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

export const CoverImageGame = styled.img`
  width: 320px;
  height: 400px;
  margin: 0 auto;
  border-radius: 10px;
`;

export const GenrerGame = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 0 0.6rem;
  margin-top: 0.5rem;
`;
