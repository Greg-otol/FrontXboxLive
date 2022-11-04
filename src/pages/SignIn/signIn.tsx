import { Header } from "../../components/Header/Header";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "Service/authService";
import swal from "sweetalert";
import { IUserSignIn } from "types/interfaces";
import {
  SignInContainer,
  SignInRow,
  SignInCol,
  SignInFormGroup,
  SignInButton,
  SignInTitle,
  SignInBackground,
  SigninNavigate,
} from "./signIn-style";

export const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChangesValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: IUserSignIn) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignIn = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const response: any = await loginService.Login(values);

    if (!response) {
      swal({
        title: "Erro de login",
        text: "Usuário ou senha inválidos",
        icon: "error",
        timer: 6000,
      });
    }

    const jwt = response.data.token;
    const userId = response.data.user.id;

    if (jwt) {
      localStorage.setItem("jwt", jwt);
      localStorage.setItem("userId", userId);
      swal({
        title: "Bem vindo",
        icon: "success",
        timer: 3000,
      });
      navigate("/profiles");
    }
  };

  const handleNavigate = () => {
    navigate("/signup");
  };

  return (
    <SignInBackground>
      <Header />
      <SignInContainer onSubmit={handleSignIn}>
        <SignInTitle>Xbox Live</SignInTitle>
        <SignInRow>
          <SignInCol>
            <SignInFormGroup>
              <input
                type="text"
                name="email"
                id="email"
                placeholder=" Digite seu Email"
                required
                onChange={handleChangesValues}
              />
            </SignInFormGroup>
          </SignInCol>
        </SignInRow>

        <SignInRow>
          <SignInCol>
            <SignInFormGroup>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=" Digite sua senha"
                required
                onChange={handleChangesValues}
              />
            </SignInFormGroup>
          </SignInCol>
        </SignInRow>

        <SignInButton type="submit">Entrar</SignInButton>
        <SigninNavigate onClick={handleNavigate}>
          Cadastre-se aqui!
        </SigninNavigate>
      </SignInContainer>
    </SignInBackground>
  );
};
