import {
  AddButton,
  AddImg,
  BackButton,
  HeaderBack,
  HeaderContainer,
  InvisibleButton,
  SignOutButton,
  SignOutImg,
} from "./Header_Style";
import back from "../../assets/img/back.png";
import signout from "../../assets/img/signout.png";
import add from "../../assets/icon/add.svg";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const createProfile = () => {
    navigate("/profiles/create")
  }

  const signOut = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("jwt");
    localStorage.removeItem("profileId");
    navigate("/");
  };

  const backPage = () => {
    navigate(-1);
  };

  return (
    <HeaderContainer>
      {window.location.pathname === "/profiles" ? (
        <AddButton onClick={createProfile}>
          <AddImg src={add}/>
        </AddButton>
      ) : (
        ""
      )}
      {window.location.pathname !== "/profiles" ? (
        <BackButton onClick={backPage}>
          <HeaderBack src={back} />
        </BackButton>
      ) : (
        <InvisibleButton></InvisibleButton>
      )}
      {window.location.pathname !== "/signin" && window.location.pathname !== "/signup" ? (
        <SignOutButton onClick={signOut}>
          <SignOutImg src={signout} />
        </SignOutButton>
      ) : (
        <InvisibleButton></InvisibleButton>
      )}
    </HeaderContainer>
  );
};
