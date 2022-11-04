import styled from "styled-components";

export const CardProfile = styled.div`
  width: 100%;
  max-width: 300px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Profileimg = styled.img`
  opacity: 0.9;
  border: 1px solid #0d1522;
  border-radius: 50%;
  cursor: pointer;
  width: 150px;
  height: 150px;
  transition: all 0.5s ease-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ProfileDescription = styled.p`
  text-align: center;
  padding-top: 0.6rem;
  font-size: 1.5rem;
  color: #fff;
`;

export const ProfileEdit = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 0.5s ease-out;
  &:hover {
    transform: scale(1.11);
  }
`;
