import styled from "styled-components";

export const ContainerOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

export const OptionSelect = styled.select`
  width: auto;
  height: auto;
  text-align: center;
  font-size: 20px;
  color: rgb(230, 230, 230);
  background-color: transparent;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //appearance: none;
  cursor: pointer;
`;

export const Options = styled.option`
  background-color: rgba(70, 120, 195, 1.9);
  color: rgb(230, 230, 230);
`;

export const GenrerOption = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 75px;
  gap: 75px 20px;
`;
