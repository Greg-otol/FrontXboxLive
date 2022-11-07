import styled from "styled-components";
import backgroundHome from "../../assets/img/background_home.jpg";

export const HomeBackground = styled.div`
  display: flex;
  padding: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  background-image: url(${backgroundHome});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1rem;
  width: 300px;
  
  @media screen and (min-width: 1024px) {
    max-width: 260px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const HomeContainer = styled.div`
  max-width: 450px;
  border-radius: 10px;
`;

export const HomeTitle = styled.h1`
  text-align: center;
  color: rgb(230, 230, 230);
`;

export const HomeDescription = styled.p`
  text-align: center;
  color: rgb(230, 230, 230);
`;

export const HomeButton = styled.button`
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
