import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { IProfilesTypes } from "types/interfaces";
import { Profiles } from "Service/profileService";
import { DeleteProfileBtn } from "components/Modal/DeleteProfileBtn";
import {
  ProfileEditBackground,
  ProfileEditButton,
  ProfileEditCol,
  ProfileEditContainer,
  ProfileEditFormGroup,
  ProfileEditImg,
  ProfileEditRow,
} from "./EditProfile-style";
import { Header } from "components/Header/Header";

export const EditProfile = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [profile, setProfile] = useState<IProfilesTypes>({
    title: "",
    imageUrl: "",
    userId: "",
  });

  useEffect(() => {
    getProfileId();
  }, []);

  const getProfileId = async () => {
    if (id) {
      const GetByIdProfile = await Profiles.ProfileGetById(id);

      const profileValues = {
        title: GetByIdProfile?.data.title,
        imageUrl: GetByIdProfile?.data.imageUrl,
        userId: GetByIdProfile?.data.userId,
      };

      setProfile({
        ...profile,
        ...profileValues,
      });
    }
  };

  const handleChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile((values: IProfilesTypes) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEditProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const getUserId = localStorage.getItem("userId");

    if (getUserId) {
      setProfile({
        ...profile,
        userId: getUserId,
      });
    }

    if (id) {
      const payloadEdit: any = await Profiles.EditProfile(id, profile);

      if (payloadEdit) {
        swal({
          title: "Perfil atualizado!",
          icon: "success",
          timer: 6000,
        });
        navigate("/profiles");
      } else {
        swal({
          title: "Error",
          text: "Erro ao atualizar o perfil!",
          icon: "error",
          timer: 6000,
        });
      }
    }
  };

  return (
    <ProfileEditBackground>
      <Header />

      <ProfileEditContainer onSubmit={handleEditProfile}>
        <ProfileEditImg src={profile.imageUrl ? profile.imageUrl : ""} />
        <ProfileEditRow>
          <ProfileEditCol>
            <ProfileEditFormGroup>
              <input
                type="text"
                placeholder=" Url da imagem"
                name="imageUrl"
                id="imageUrl"
                value={profile.imageUrl}
                onChange={handleChangeValues}
                required
              />
            </ProfileEditFormGroup>
          </ProfileEditCol>
        </ProfileEditRow>
        <ProfileEditRow>
          <ProfileEditCol>
            <ProfileEditFormGroup>
              <input
                type="text"
                placeholder=" Nome do perfil"
                name="title"
                id="title"
                value={profile.title}
                onChange={handleChangeValues}
                required
              />
            </ProfileEditFormGroup>
          </ProfileEditCol>
        </ProfileEditRow>
        <ProfileEditButton type="submit">Editar</ProfileEditButton>{" "}
        <DeleteProfileBtn />
      </ProfileEditContainer>
    </ProfileEditBackground>
  );
};
