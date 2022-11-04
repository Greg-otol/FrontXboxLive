import styled from "styled-components";

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SearchInput = styled.input`
  display: inherit;
  width: 60%;
  border: 1px solid lightgray;
  border-radius: 5px;
  outline: 0;
  font-size: 1rem;
  padding: 10px;
`;

export const SearchIcon = styled.i`
  font-size: 32px;
  margin: 0 0 0 5px;
  //margin: 0 0.6rem;
  color: #f4f5f9;
  cursor: pointer;
`;
