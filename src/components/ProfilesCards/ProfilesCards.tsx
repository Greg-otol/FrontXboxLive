import Edit from "assets/icon/edit_profile.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Profiles } from "Service/profileService";
import { IProfilesTypes } from "types/interfaces";
import {
  CardProfile,
  ProfileDescription,
  ProfileEdit,
  Profileimg,
} from "./profilesCards_style";

export const ProfilesCards = () => {
  const navigate = useNavigate();

  const [profiles, setProfiles] = useState<IProfilesTypes[]>([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const payload: any = await Profiles.ProfilesUser();
      setProfiles(payload.data);
    };
    fetchProfiles();
  }, []);

  const handleEditProfile = async (id: string) => {
    navigate(`/profiles/edit/${id}`);
  };

  const handleNavigateHomepage = (id: string | undefined) => {
    if (id) {
      localStorage.setItem("profileId", id);
      navigate(`/profile/homepage/${id}`);
    }
  };

  return (
    <>
      {profiles.map((profile) => (
        <CardProfile key={profile.id}>
          <Profileimg
            onClick={() => handleNavigateHomepage(profile.id)}
            src={profile.imageUrl}
            alt="Avatar do usuário"
          />

          <ProfileDescription>{profile.title}</ProfileDescription>

          <ProfileEdit
            src={Edit}
            alt="Icone de editar o perfil"
            onClick={() => handleEditProfile(`${profile.id}`)}
          />
        </CardProfile>
      ))}
    </>
  );
};
