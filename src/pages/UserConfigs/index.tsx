import { Header } from "components/Header/Header";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { User } from "Service/userService";
import swal from "sweetalert";
import { IUserType } from "types/interfaces";
import {
  BtnDelete,
  BtnEdit,
  BtnsRequests,
  UserBackground,
  UserCol,
  UserContainer,
  UserFormGroup,
  UserRow,
  UserTitle,
} from "./style";

export const UserConfigs = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState<IUserType>({
    name: "",
    nickname: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    getUserId();
  }, []);

  const getUserId = async () => {
    if (id) {
      const payloadUser = await User.GetUserById(id);
      console.log(payloadUser?.data);

      const userDatas = {
        name: payloadUser?.data.name,
        nickname: payloadUser?.data.nickname,
        email: payloadUser?.data.email,
        cpf: payloadUser?.data.cpf,
        password: payloadUser?.data.password,
        confirmPassword: payloadUser?.data.password,
        isAdmin: payloadUser?.data.isAdmin,
      };

      setUser({
        ...user,
        ...userDatas,
      });
    }
  };

  const handleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEditUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (id) {
      const payloadUser = await User.UpdatedUser(id, user);

      if (payloadUser) {
        swal({
          title: "Usuário editado com sucesso!",
          icon: "success",
          timer: 6000,
        });
        navigate(-1);
      } else {
        swal({
          title: "Error",
          text: "Não foi possível editar o usuário!",
          icon: "error",
          timer: 6000,
        });
      }
    }
  };

  const DeleteUser = async () => {
    if (id) {
      const payloadRemove = await User.DeleteUser(id);

      if (payloadRemove) {
        swal({
          title: "Usuário removido com sucesso!",
          icon: "success",
          timer: 6000,
        });
        navigate("/");
      } else {
        swal({
          title: "Error",
          text: "Não foi possível remover o usuário",
          icon: "error",
          timer: 6000,
        });
      }
    }
  };

  const handleDeleteUser = () => {
    swal({
      title: "Deseja remover o usuário?",
      text: "Todas os dados salvos serão removidos!",
      icon: "warning",
      buttons: ["Não", "Sim"],
    }).then((resp) => {
      if (resp) {
        DeleteUser();
      }
    });
  };

  return (
    <UserBackground>
      <Header />

      <UserContainer onSubmit={handleEditUser}>
        <UserTitle>Gerenciamento de usuário</UserTitle>

        <UserRow>
          <UserCol>
            <UserFormGroup>
              <input
                type="text"
                placeholder=" Nome do usuário"
                name="name"
                id="name"
                value={user.name}
                onChange={handleValues}
                required
              />
            </UserFormGroup>
          </UserCol>
        </UserRow>

        <UserRow>
          <UserCol>
            <UserFormGroup>
              <input
                type="text"
                placeholder=" Nickname do usuário"
                name="nickname"
                id="nickname"
                value={user.nickname}
                onChange={handleValues}
                required
              />
            </UserFormGroup>
          </UserCol>
        </UserRow>

        <UserRow>
          <UserCol>
            <UserFormGroup>
              <input
                type="text"
                placeholder=" Email do usuário"
                name="email"
                id="email"
                value={user.email}
                onChange={handleValues}
                required
              />
            </UserFormGroup>
          </UserCol>
        </UserRow>

        <BtnsRequests>
          <BtnEdit type="submit">Editar</BtnEdit>
          <BtnDelete type="button" onClick={handleDeleteUser}>
            Deletar
          </BtnDelete>
        </BtnsRequests>
      </UserContainer>
    </UserBackground>
  );
};
