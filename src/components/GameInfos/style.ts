import styled from "styled-components";

export const InfoContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const CoverImageGame = styled.img`
  width: 260px;
  height: 350px;
  margin: 1rem auto;
`;

export const ContainerIframes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 20px;
  gap: 10px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const IframeContent = styled.iframe`
  width: 100%;
  height: 450px;
  border: 1px solid #000;

  @media screen and (max-width: 400px) {
    height: 350px;
  }
`;
