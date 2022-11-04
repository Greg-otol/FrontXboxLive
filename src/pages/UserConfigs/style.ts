import styled from "styled-components";
import backgroundSignin from "../../assets/img/background_signin.jpg";

export const UserBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${backgroundSignin});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export const UserContainer = styled.form`
  background: rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  max-width: 350px;
  padding: 20px;
  border-radius: 10px;
  @media screen and (max-width: 350px) {
    width: 270px;
  }
`;

export const UserTitle = styled.h2`
  text-align: center;
  color: rgb(230, 230, 230);
`;

export const UserRow = styled.div`
  display: flex;
  gap: 1rem;
`;

export const UserCol = styled.div`
  flex: 1;
`;

export const UserFormGroup = styled.div`
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

export const BtnsRequests = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
`;

export const BtnEdit = styled.button`
  background-color: rgba(0, 0, 0, 0.2);
  color: rgb(230, 230, 230);
  border: none;
  border-radius: 5px;
  text-decoration: none;
  display: block;
  font-size: 1.25rem;
  padding: 10px;
  margin: 10px auto;
  width: 100%;
  cursor: pointer;
  transition: all 0.8s ease-out;
  &:hover {
    background-color: rgba(0, 200, 0, 0.6);
  }
`;

export const BtnDelete = styled.button`
  background-color: rgba(0, 0, 0, 0.2);
  color: rgb(230, 230, 230);
  border: none;
  border-radius: 5px;
  text-decoration: none;
  display: block;
  font-size: 1.25rem;
  padding: 10px;
  margin: 10px auto;
  width: 100%;
  cursor: pointer;
  transition: all 0.8s ease-out;
  &:hover {
    background-color: rgba(255, 0, 0, 0.6);
  }
`;
