import { Header } from "../../components/Header/Header";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterService } from "Service/authService";
import swal from "sweetalert";
import { IUserSignUp } from "types/interfaces";
import {
  SignUpBackground,
  SignUpButton,
  SignUpCol,
  SignUpContainer,
  SignUpFormGroup,
  SignUpRow,
  SignUpTitle,
  SingUpCheckbox,
} from "./signUp-style";

export const SignUp = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState<IUserSignUp>({
    name: "",
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
    cpf: "",
    isAdmin: false,
  });

  const handleChangesValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: IUserSignUp) => ({
      ...values,
      [e.target.name]:
        e.target.name === "isAdmin" ? e.target.checked : e.target.value,
    }));
  };

  const handleSignUp = async (e: React.SyntheticEvent) => {
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
    <SignUpBackground>
      <Header />
      <SignUpContainer onSubmit={handleSignUp}>
        <SignUpTitle>Cadastrar usuário</SignUpTitle>
        <SignUpRow>
          <SignUpCol>
            <SignUpFormGroup>
              <input
                type="text"
                name="name"
                id="name"
                placeholder=" Digite seu Nome"
                required
                onChange={handleChangesValues}
              />
            </SignUpFormGroup>
          </SignUpCol>
        </SignUpRow>

        <SignUpRow>
          <SignUpCol>
            <SignUpFormGroup>
              <input
                type="text"
                name="nickname"
                id="nickname"
                placeholder=" Crie seu Nickname"
                required
                onChange={handleChangesValues}
              />
            </SignUpFormGroup>
          </SignUpCol>
        </SignUpRow>

        <SignUpRow>
          <SignUpCol>
            <SignUpFormGroup>
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" Digite seu Email"
                required
                onChange={handleChangesValues}
              />
            </SignUpFormGroup>
          </SignUpCol>
        </SignUpRow>

        <SignUpRow>
          <SignUpCol>
            <SignUpFormGroup>
              <input
                type="text"
                name="cpf"
                id="cpf"
                placeholder=" Digite seu CPF"
                required
                onChange={handleChangesValues}
              />
            </SignUpFormGroup>
          </SignUpCol>
        </SignUpRow>

        <SignUpRow>
          <SignUpCol>
            <SignUpFormGroup>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=" Crie uma senha"
                required
                onChange={handleChangesValues}
              />
            </SignUpFormGroup>
          </SignUpCol>
        </SignUpRow>

        <SignUpRow>
          <SignUpCol>
            <SignUpFormGroup>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder=" Confirme sua senha"
                required
                onChange={handleChangesValues}
              />
            </SignUpFormGroup>
          </SignUpCol>
        </SignUpRow>

        <SingUpCheckbox>
          <label style={{ marginLeft: "20px" }}>
            Administrador? Ative aqui
          </label>
          <div className="switch__container">
            <input
              name="isAdmin"
              id="switch-flat"
              className="switch switch--flat"
              type="checkbox"
              onChange={handleChangesValues}
            />
            <label htmlFor="switch-flat"></label>
          </div>
        </SingUpCheckbox>

        <SignUpButton type="submit">Cadastrar</SignUpButton>
      </SignUpContainer>
    </SignUpBackground>
  );
};
