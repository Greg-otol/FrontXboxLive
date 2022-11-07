import styled from "styled-components";
import backgroundProfile from "../../assets/img/background_profile.jpg";

export const ProfileBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${backgroundProfile});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  
`;

export const ProfileSection = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2rem;
  padding: 3rem;
`;
