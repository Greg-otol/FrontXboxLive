import styled from "styled-components";

export const MainPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const DivItems = styled.div`
  display: flex;
  //flex-direction: row;
  justify-content: center;
  align-items: center;
  //gap: 20px;
`;

export const EditGameContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  width: 70%;
  margin: 30px;
  padding: 20px;
  border-radius: 10px;
  @media screen and (max-width: 350px) {
    width: 270px;
  }
`;

export const EditGameRow = styled.div`
  display: flex;
  gap: 1rem;
`;

export const EditGameCol = styled.div`
  flex: 1;
`;

export const EditGameFormGroup = styled.div`
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

export const EditGameButton = styled.button`
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
  width: 206px;
  height: 206px;
  border: 1px solid #0d1522;
  border-radius: 50%;
  cursor: pointer;
`;
