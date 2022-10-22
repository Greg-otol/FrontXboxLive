import styled, { css } from "styled-components";

export const Login = styled.div`
  ${({ theme }) => css`
    background-image: ${theme.constants.loginBackground};
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: grid;
  `}
`;

export const LoginContainer = styled.div`
  ${() => css`
    background: rgba(0, 0, 0, 0.3);
    margin: 150px auto;
    max-width: 500px;
    padding: 50px;
    border-radius: 10px;
  `}
`;

export const Row = styled.div`
  ${() => css`
    display: flex;
    gap: 1rem;
  `}
`;

export const Col = styled.div`
  ${() => css`
    flex: 1;
  `}
`;

export const FormGroup = styled.div`
  ${() => css`
    margin: 1rem 0;
    width: 300px;

    input {
      background: rgba(255, 255, 255, 0.7);  
      display: inherit;
      border: none;
      outline: 0;
      border-radius: 5px;
      color: black;
      font-size: 16px;
      padding: 10px;
      width: 100%;
    }
  `}
`;

export const LoginContent = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const LoginDescription = styled.p`
  ${({ theme }) => css`
    padding: 1rem;
    color: #fff;
    ${theme.mixins.bodyStyle}
  `}
`;

export const LoginButton = styled.button`
  ${({ theme }) => css`
    background-color: rgba(0, 0, 0, 0.0);
    border: 1px solid teal;
    border-radius: 5px;
    color: white;
    display: block;
    font-size: 1.25rem;
    padding: 10px;
    margin-top: 10px;
    width: 50%;
    cursor: pointer;
    transition: all 0.6s ease-out;

    &:hover {
      background-color: rgba(0, 128, 128, 0.6);
      color: white;
    }
  `}
`;
