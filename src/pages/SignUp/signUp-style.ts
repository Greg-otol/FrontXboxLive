import styled, { css } from "styled-components";

export const SignUp = styled.div`
  ${({ theme }) => css`
    background-image: ${theme.constants.signupBackground};
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: auto;
    display: grid;
  `}
`;

export const SignUpContainer = styled.div`
  ${() => css`
    background: rgba(0, 0, 0, 0.3);
    margin: 80px auto;
    max-width: 450px;
    padding: 10px;
    border-radius: 10px;
  `}
`;

export const SignUpRow = styled.div`
  ${() => css`
    display: flex;
    gap: 1rem;
  `}
`;

export const SignUpCol = styled.div`
  ${() => css`
    flex: 1;
  `}
`;

export const SignUpFormGroup = styled.div`
  ${() => css`
    margin: 5px;
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

export const SingupCheckbox = styled.div`
  ${({ theme }) => css`
    background: rgba(255, 255, 255, 0.7);
    display: inherit;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 40px;
    padding: 10px 14px 10px 10px;
    margin: 5px 0;
    gap: 20px;
    margin-bottom: 1rem;
    outline: none;
    border-radius: 5px;
    border: none;
    background: rgba(255, 255, 255, 0.7);
    ${theme.mixins.bodyStyle}
  `}
`;

export const SingupBack = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  left: 25px;
  top: 30px;
  cursor: pointer;
  transition: all ease-in-out 0.6s;
  :hover {
    transform: scale(1.2);
  }
`;

export const SingupH2 = styled.h2`
  ${({ theme }) => css`
    text-align: center;
    padding: 5px;
    ${theme.mixins.subTitleStyle}
  `}
`;

export const SingupForm = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const SignUpButton = styled.button`
  ${({ theme }) => css`
    background-color: rgba(0, 0, 0, 0);
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
