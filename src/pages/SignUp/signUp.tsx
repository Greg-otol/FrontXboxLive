import Logo from "assets/img/xbox-black-icon.png";
import { ReturnPage } from "components/ReturnPage";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterService } from "Service/authService";
import swal from "sweetalert";
import { RegisterUser } from "types/interfaces";
import * as Style from "./signUp-style";

export const SignUp = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState<RegisterUser>({
    name: "",
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
    cpf: "",
    isAdmin: false,
  });

  const handleChangesValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: RegisterUser) => ({
      ...values,
      [e.target.name]:
        e.target.name === "isAdmin" ? e.target.checked : e.target.value,
    }));
  };

  const handleRegisterUser = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const response: any = await RegisterService.Register(values);

    if (!response) {
      swal({
        title: "Erro de Cadastro",
        text: "Informações incorretas!",
        icon: "error",
        timer: 6000,
      });
    }

    const jwt = response.data.token;

    if (!jwt) {
      swal({
        title: "Error!",
        text: `${response.data.message}`,
        icon: "error",
        timer: 6000,
      });
    }

    localStorage.setItem("jwt", jwt);
    swal({
      title: "Usuário cadastrado com sucesso!",
      icon: "success",
      timer: 6000,
    });

    navigate("/signin");
  };

  return (
    <Style.SignUp>
      <Style.SignUpContainer>
        <ReturnPage Route={() => navigate(-1)} />

        <Style.SingupH2 style={{ color: "#fff" }}>Cadastro de usuário</Style.SingupH2>

        <Style.SingupForm onSubmit={handleRegisterUser}>

          <Style.SignUpRow>
            <Style.SignUpCol>
              <Style.SignUpFormGroup>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder=" Digite seu Nome"
                  required
                  onChange={handleChangesValues}
                />
              </Style.SignUpFormGroup>
            </Style.SignUpCol>
          </Style.SignUpRow>

          <Style.SignUpRow>
            <Style.SignUpCol>
              <Style.SignUpFormGroup>
                <input
                  type="text"
                  name="nickname"
                  id="nickname"
                  placeholder=" Crie seu Nickname"
                  required
                  onChange={handleChangesValues}
                />
              </Style.SignUpFormGroup>
            </Style.SignUpCol>
          </Style.SignUpRow>

          <Style.SignUpRow>
            <Style.SignUpCol>
              <Style.SignUpFormGroup>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" Digite seu Email"
                  required
                  onChange={handleChangesValues}
                />
              </Style.SignUpFormGroup>
            </Style.SignUpCol>
          </Style.SignUpRow>

          <Style.SignUpRow>
            <Style.SignUpCol>
              <Style.SignUpFormGroup>
                <input
                  type="text"
                  name="cpf"
                  id="cpf"
                  placeholder=" Digite seu CPF"
                  required
                  onChange={handleChangesValues}
                />
              </Style.SignUpFormGroup>
            </Style.SignUpCol>
          </Style.SignUpRow>

          <Style.SignUpRow>
            <Style.SignUpCol>
              <Style.SignUpFormGroup>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=" Digite uma senha"
                  required
                  onChange={handleChangesValues}
                />
              </Style.SignUpFormGroup>
            </Style.SignUpCol>
          </Style.SignUpRow>

          <Style.SignUpRow>
            <Style.SignUpCol>
              <Style.SignUpFormGroup>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder=" Confirme sua senha"
                  required
                  onChange={handleChangesValues}
                />
              </Style.SignUpFormGroup>
            </Style.SignUpCol>
          </Style.SignUpRow>

          <Style.SingupCheckbox>
            <label>Administrador? Marque aqui →</label>
            <input
              type="checkbox"
              name="isAdmin"
              checked={values.isAdmin}
              onChange={handleChangesValues}
            />
          </Style.SingupCheckbox>
          <Style.SignUpButton type="submit">Cadastrar</Style.SignUpButton>
        </Style.SingupForm>
      </Style.SignUpContainer>
    </Style.SignUp>
  );
};
