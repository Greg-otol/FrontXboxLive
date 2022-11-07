import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: transparent;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;
  margin-top: 0.5rem;
  font-size: 3rem;
  color: #b8000c;
`;

export const Icon = styled.i`
  cursor: pointer;
  color: #fff;
  transition: all ease-in-out 0.4s;
  :hover {
    transform: scale(1.2);
  }
`;

export const TitleGame = styled.h2`
  color: #f4f5f9;
  text-align: center;
`;

export const ContentCard = styled.div`
  color: #f4f5f9;
  line-height: 1.5rem;
  margin: 0.5rem auto;
  cursor: pointer;
  p {
    line-height: 1.75rem;
    text-align: center;
    margin: 0.6rem auto;
  }
`;
