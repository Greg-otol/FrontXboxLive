import styled, { css } from "styled-components";

export const Home = styled.main`
  ${({ theme }) => css`
    background-image: ${theme.constants.xboxBackground};
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 0 auto;
    display: grid;
  `}
`;

export const HomeContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0px 50px 10px 50px;
    max-width: 450px;
    height: 0 auto;
    padding: 40px;
    //border: 1px solid teal;
    border-radius: 10px;

    @media (max-width: 507px) {
      height: 0 auto;
    }
  `}
`;

export const HomeContainerCarousel = styled.div`
  ${() => css`
    display: flex;
    margin: 0px 50px 50px 100px;
    max-width: 350px;
    height: 0 auto;

    @media (max-width: 507px) {
      margin: 0px 50px 50px 50px;
      height: 0 auto;
    }
  `}
`;

export const HomeTitle = styled.h1`
  ${({ theme }) => css`
    display: flex;
    justify-content: start;
    align-items: center;
    font-weight: bold;
    margin-bottom: 1rem;
    color: ${theme.colors.secondBgColor};
    ${theme.mixins.logoStyle};
  `}
`;

export const HomeSection = styled.section`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding-bottom: 1.5rem;
  `}
`;

export const HomeDescription = styled.p`
  ${({ theme }) => css`
    font-style: oblique;
    ${theme.mixins.bodyStyle}
    color: ${theme.colors.titleColor};
    ::selection {
      background: transparent;
      color: ${theme.colors.textColor};
    }
  `}
`;

export const HomeButton = styled.button`
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
