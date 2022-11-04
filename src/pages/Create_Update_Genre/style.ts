import styled from "styled-components";
import profileHomepage from "../../assets/img/profile_homepage.png";

export const Page = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${profileHomepage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export const DivContainers = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;

  @media screen and (max-width: 620px) {
    flex-direction: column;
  }
`;

export const DescriptionForm = styled.h2`
  text-align: center;
  color: rgb(230, 230, 230);
`;

export const BtnCreate = styled.button`
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

export const ContainerOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1rem auto;
`;

export const OptionSelect = styled.select`
  width: 260px;
  height: auto;
  text-align: center;
  font-size: 1.2rem;
  color: #f4f5f9;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid rgba(0, 0, 0, 0.6);
  outline: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Options = styled.option`
  background-color: rgba(0, 0, 0, 0.9);
  color: #f4f5f9;
  font-weight: bold;
`;

export const GenrerOption = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 75px;
  gap: 75px 20px;
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

export const GenrerContainer = styled.form`
  background: rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  width: 100%;
  padding: 20px;
  border-radius: 10px;

  @media screen and (max-width: 350px) {
    width: 250px;
  }
`;

export const GenrerTitle = styled.h2`
  text-align: center;
  color: rgb(230, 230, 230);
`;

export const GenrerRow = styled.div`
  display: flex;
  gap: 1rem;
`;

export const GenrerCol = styled.div`
  flex: 1;
`;

export const GenrerFormGroup = styled.div`
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
