import styled, { css } from "styled-components";

export const Background = styled.main`
  ${({ theme }) => css`
      ${theme.mixins.BackgroundProfiles}
  `}
`;

export const ProfileSection = styled.div`
  ${() => css`
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 2rem;
    padding: 3rem;
  `}
`;

export const ProfileDiv = styled.div`
  ${() => css`
    margin: auto 3.5rem;
  `}
`;

export const Profileimg = styled.img`
  ${({ theme }) => css`
    opacity: 0.9;
    border: 2px solid #0d1522;
    border-radius: 50%;
    cursor: pointer;
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
    ${theme.mixins.bodyStyle}
    font-size: 1.5rem;
  `}
`;

export const ProfileEdit = styled.img`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    margin-left: 5.5rem;
    cursor: pointer;
    transition: ${theme.constants.transitionEvents};
    :hover {
      transform: ${theme.constants.transformeScale};
    }
  `}
`;

export const CreateProfile = styled.img`
  ${({theme}) => css`
    width: 65px;
    height: 65px;
    cursor: pointer;
    position: relative;
    left: 5rem;
    transition: ${theme.constants.transitionEvents};
    :hover {
      transform: ${theme.constants.transformeScale};
    }
  `}
`
