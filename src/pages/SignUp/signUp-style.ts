import styled from "styled-components";
import backgroundSignin from "../../assets/img/background_signin.jpg";

export const SignUpBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${backgroundSignin});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export const SignUpContainer = styled.form`
  background: rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  max-width: 350px;
  padding: 20px;
  border-radius: 10px;
  @media screen and (max-width: 350px) {
    width: 270px;
  }
`;

export const SignUpTitle = styled.h2`
  text-align: center;
  color: rgb(230, 230, 230);
`;

export const SignUpRow = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SignUpCol = styled.div`
  flex: 1;
`;

export const SignUpFormGroup = styled.div`
  margin: 5px auto;
  width: 100%;
  input {
    display: inherit;
    border: 1px solid lightgray;
    border-radius: 5px;
    outline: 0;
    font-size: 1rem;
    padding: 10px;
    width: 100%;
  }
`;

export const SingUpCheckbox = styled.div`
  background: rgba(0, 0, 0, 0);
  color: rgb(230, 230, 230);
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 0px 3px 20px;

  @media screen and (max-width: 350px) {
    font-size: 11px;
  }

  .switch__container {
    margin-left: 5px;
    width: 70px;
  }

  .switch {
    visibility: hidden;
    position: absolute;
    margin-left: -9999px;
  }

  .switch + label {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
  }

  .switch--flat + label {
    padding: 2px;
    width: 40px;
    height: 20px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 60px;
    transition: background 0.4s;
  }
  .switch--flat + label:before,
  .switch--flat + label:after {
    display: block;
    position: absolute;
    content: "";
  }
  .switch--flat + label:before {
    top: 2px;
    left: 2px;
    bottom: 2px;
    right: 2px;
    background-color: rgba(230, 230, 230, 10);
    border-radius: 60px;
    transition: background 0.4s;
  }
  .switch--flat + label:after {
    top: 2px;
    left: 2px;
    bottom: 2px;
    width: 15px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 60px;
    transition: margin 0.4s, background 0.4s;
  }
  .switch--flat:checked + label {
    background-color: rgba(0, 200, 0, 0.8);
  }
  .switch--flat:checked + label:after {
    margin-left: 19px;
    background-color: rgba(0, 200, 0, 0.8);
  }
`;

export const SignUpButton = styled.button`
  background-color: rgba(0, 0, 0, 0.2);
  color: rgb(230, 230, 230);
  border: none;
  border-radius: 5px;
  text-decoration: none;
  display: block;
  font-size: 1.25rem;
  padding: 10px;
  margin: 10px auto;
  width: 100%;
  cursor: pointer;
  transition: all 0.8s ease-out;
  &:hover {
    background-color: rgba(0, 200, 0, 0.6);
  }
`;
