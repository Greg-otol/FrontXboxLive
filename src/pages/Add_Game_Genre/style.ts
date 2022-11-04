import styled, { css } from "styled-components";
import profileHomepage from "../../assets/img/profile_homepage.png";

export const Page = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${profileHomepage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;

  @media (min-height: 900px) {
    height: 100vh;
  }
`;

export const AddGameContainer = styled.form`
  background: rgba(0, 0, 0, 0.3);
  width: 70%;
  margin: 30px;
  padding: 20px;
  border-radius: 10px;
  @media screen and (max-width: 350px) {
    width: 270px;
  }
`;

export const AddGameRow = styled.div`
  display: flex;
  gap: 1rem;
`;

export const AddGameCol = styled.div`
  flex: 1;
`;

export const AddGameFormGroup = styled.div`
  margin: 5px auto;
  width: 100%;
  input {
    display: inherit;
    border: 1px solid lightgray;
    border-radius: 5px;
    outline: 0;
    font-size: 1rem;
    padding: 10px;
    width: 100%;
  }
`;

export const AddGameButton = styled.button`
  background-color: rgba(0, 0, 0, 0.2);
  color: rgb(230, 230, 230);
  border: none;
  border-radius: 5px;
  text-decoration: none;
  display: block;
  font-size: 1.25rem;
  padding: 10px;
  margin: 10px auto;
  width: 80%;
  cursor: pointer;
  transition: all 0.8s ease-out;
  &:hover {
    background-color: rgba(0, 200, 0, 0.6);
  }
`;

export const CoverImgGame = styled.img`
  ${() => css`
    width: 206px;
    height: 206px;
    border: 1px solid #0d1522;
    border-radius: 10px;
  `}
`;

export const DivImg = styled.form`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
