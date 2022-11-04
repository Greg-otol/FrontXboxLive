import { Header } from "components/Header/Header";
import { ProfilesCards } from "components/ProfilesCards/ProfilesCards";
import { ProfileBackground, ProfileSection } from "./profiles-style";

export const Profiles = () => {
  return (
    <ProfileBackground>
      <Header />

      <ProfileSection>
        <ProfilesCards />
      </ProfileSection>
    </ProfileBackground>
  );
};
