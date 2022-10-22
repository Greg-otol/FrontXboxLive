import styled, { css } from "styled-components";

export const ProfileDiv = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    margin: auto 3.5rem;
  `}
`;

export const CardProfile = styled.div`
  ${() => css`
    width: 100%;
    max-width: 300px;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `}
`;

export const Profileimg = styled.img`
  ${({ theme }) => css`
    opacity: 0.9;
    border: 1px solid #0d1522;
    border-radius: 50%;
    cursor: pointer;
    width: 150px;
    height: 150px;
    transition: ${theme.constants.transitionEvents};
    :hover {
      transform: ${theme.constants.transformeScale};
    }
  `}
`;

export const ProfileDescription = styled.p`
  ${({ theme }) => css`
    text-align: center;
    padding-top: 0.6rem;
    //padding-bottom: 0.6rem;
    ${theme.mixins.bodyStyle}
    font-size: 1.5rem;
    color: #fff;
  `}
`;

export const ProfileEdit = styled.img`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: ${theme.constants.transitionEvents};
    :hover {
      transform: ${theme.constants.transformeScale};
    }
  `}
`;
