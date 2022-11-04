import styled from "styled-components";
import backgroundProfile from "../../assets/img/background_profile.jpg";

export const ProfileBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${backgroundProfile});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export const ProfileContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  background: rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  
  padding: 20px;
  border-radius: 10px;
  @media screen and (max-width: 500px) {
    max-width: 250px;
  }
`;

export const ProfileRow = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ProfileCol = styled.div`
  flex: 1;
`;

export const ProfileFormGroup = styled.div`
  margin: 10px auto;
  width: 100%;
  input {
    display: inherit;
    border: 1px solid lightgray;
    border-radius: 5px;
    outline: 0;
    font-size: 1rem;
    padding: 10px;
    width: 400px;

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
`;

export const ProfileButton = styled.button`
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

export const ProfileImg = styled.img`
  width: 206px;
  height: 206px;
  border: 1px solid #0d1522;
  border-radius: 50%;
  cursor: pointer;
`;
