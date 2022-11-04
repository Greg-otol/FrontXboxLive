import styled from "styled-components";

export const MainPage = styled.main`
  height: auto;
`;

export const DivItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ItemsHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const ContainerInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 20px;
  padding: 10px;
  width: 100%;

  @media screen and (max-width: 585px) {
    flex-direction: column;
  }
`;

export const PlayGame = styled.h1`
  font-weight: bold;
  color: #f4f5f9;
  cursor: pointer;
`;

export const TitleGame = styled.h2`
  font-size: 1.35rem;
  color: #f4f5f9;
`;

export const ScoreGame = styled.p`
  font-size: 1.35;
  text-align: center;
  color: #f4f5f9;
`;

export const FavoriteIcon = styled.i`
  font-size: 50px;
  color: #fff;
  margin-bottom: 15px;
  cursor: pointer;
  transition: all ease-in-out 0.4s;
  :hover {
    transform: scale(1.2);
  }
`;

export const DivMethods = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0 2rem;
`;

export const DeleteGame = styled.i`
  font-size: 50px;
  color: #fff;
  margin-bottom: 15px;
  cursor: pointer;
  transition: all ease-in-out 0.4s;
  :hover {
    transform: scale(1.2);
  }
`;

export const EditGame = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all ease-in-out 0.4s;
  :hover {
    transform: scale(1.2);
  }
`;

export const GameDescriptionFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  background: #00000075;
`;

export const GameDescription = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: rgb(230, 230, 230);
`;
