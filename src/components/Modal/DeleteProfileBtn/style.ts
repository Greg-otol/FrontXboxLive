import styled from "styled-components";

export const DeleteProfileButton = styled.button`
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
    background-color: rgba(165, 42, 42, 0.6);
  }
`;
