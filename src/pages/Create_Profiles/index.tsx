import { useNavigate } from "react-router-dom";
import Avatar01 from "assets/img/avatar_1.png";
import { IProfilesTypes } from "types/interfaces";
import React, { useState } from "react";
import swal from "sweetalert";
import { Profiles } from "Service/profileService";
import { Header } from "components/Header/Header";
import {
  ProfileBackground,
  ProfileButton,
  ProfileCol,
  ProfileContainer,
  ProfileFormGroup,
  ProfileImg,
  ProfileRow,
} from "./styles";

export const CreateProfile = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState<IProfilesTypes>({
    imageUrl: "",
    title: "",
    userId: "",
  });

  const handleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const idUser = localStorage.getItem("userId");

    if (idUser) {
      setProfile((profile: IProfilesTypes) => ({
        ...profile,
        userId: idUser,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleCreateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = await Profiles.CreateProfile(profile);

    if (payload) {
      swal({
        title: "Cadastro com sucesso!",
        icon: "success",
        timer: 6000,
      });
      navigate("/profiles");
    } else {
      swal({
        title: "Error",
        icon: "error",
        timer: 6000,
      });
    }
  };

  return (
    <ProfileBackground>
      <Header />

      <ProfileContainer onSubmit={handleCreateProfile}>
        <ProfileImg src={profile.imageUrl ? profile.imageUrl : Avatar01} />
        <ProfileRow>
          <ProfileCol>
            <ProfileFormGroup>
              <input
                type="text"
                placeholder=" Url da imagem"
                name="imageUrl"
                id="imageUrl"
                onChange={handleValues}
                required
              />
            </ProfileFormGroup>
          </ProfileCol>
        </ProfileRow>

        <ProfileRow>
          <ProfileCol>
            <ProfileFormGroup>
              <input
                type="text"
                placeholder=" Nome do perfil"
                name="title"
                id="title"
                onChange={handleValues}
                required
              />
            </ProfileFormGroup>
          </ProfileCol>
        </ProfileRow>

        <ProfileButton type="submit">Criar</ProfileButton>
      </ProfileContainer>
    </ProfileBackground>
  );
};
