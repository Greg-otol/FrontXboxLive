import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 70px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

export const AddButton = styled.button`
  display: flex;
  background: rgba(0, 0, 0, 0);
  border: none;
  transition: all 0.5s ease-out;
  color: rgb(230, 230, 230);

  &:hover {
    transform: scale(1.08);
  }
`;

export const AddImg = styled.img`
  display: flex;
  width: 40px;
`;

export const SignOutButton = styled.button`
  display: flex;
  background: rgba(0, 0, 0, 0);
  border: none;
  transition: all 0.5s ease-out;
  color: rgb(230, 230, 230);

  &:hover {
    transform: scale(1.11);
  }
`;

export const SignOutImg = styled.img`
  display: flex;
  width: 40px;
`;

export const InvisibleButton = styled.button`
  display: flex;
  background: rgba(0, 0, 0, 0);
  border: none;
`;

export const BackButton = styled.button`
  display: flex;
  background: rgba(0, 0, 0, 0);
  border: none;
  transition: all 0.5s ease-out;

  &:hover {
    transform: scale(1.11);
  }
`;

export const HeaderBack = styled.img`
  display: flex;
  width: 30px;
`;
