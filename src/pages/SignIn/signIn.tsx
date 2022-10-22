import Logo from "assets/img/xbox-black-icon.png";
import { ReturnPage } from "components/ReturnPage";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginService } from "Service/authService";
import swal from "sweetalert";
import { UserLogin } from "types/interfaces";
import * as Style from "./signIn-style";

export const Login = () => {
  const navigation = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChangesValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: UserLogin) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e: React.SyntheticEvent) => {
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
      navigation("/profiles");
    }
  };

  return (
    <Style.Login>
      <Style.LoginContainer>
        <ReturnPage Route={() => navigation("/")} />

          <Style.LoginContent onSubmit={handleLogin}>
            <Style.Row>
              <Style.Col>
                <Style.FormGroup>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder=" Digite seu Email"
                    required
                    onChange={handleChangesValues}
                  />
                </Style.FormGroup>
              </Style.Col>
            </Style.Row>

            <Style.Row>
              <Style.Col>
                <Style.FormGroup>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder=" Digite sua senha"
                    required
                    onChange={handleChangesValues}
                  />
                </Style.FormGroup>
              </Style.Col>
            </Style.Row>

            <Style.LoginDescription>
              Não tem cadastro?{" "}
                <Link style={{ color: "#fff" }} to={"/signup"}>Cadastre-se aqui!</Link>
            </Style.LoginDescription>

            <Style.LoginButton type="submit">Entrar</Style.LoginButton>
          </Style.LoginContent>
       
      </Style.LoginContainer>
    </Style.Login>
  );
};
