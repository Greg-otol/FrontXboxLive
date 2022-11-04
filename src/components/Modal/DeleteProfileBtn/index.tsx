import { useNavigate, useParams } from "react-router-dom";
import { Profiles } from "Service/profileService";
import swal from "sweetalert";
import { DeleteProfileButton } from "./style";

export const DeleteProfileBtn = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDeleteProfile = async () => {
    if (id) {
      const payloadDelete = await Profiles.DeleteProfile(id);

      if (payloadDelete) {
        swal({
          title: "Perfil deletado!",
          icon: "success",
          timer: 6000,
        });
        navigate("/profiles");
      } else {
        swal({
          title: "Error",
          text: "Erro ao deletar perfil!",
          icon: "error",
          timer: 6000,
        });
      }
    }
  };

  const openModalDelete = () => {
    swal({
      title: "Apagar Perfil?",
      icon: "warning",
      buttons: ["Não", "Sim"],
    }).then((resp) => {
      if (resp) {
        handleDeleteProfile();
      }
    });
  }

  return (
    <>
      <DeleteProfileButton type="button" onClick={openModalDelete}>
        Deletar
      </DeleteProfileButton>
    </>
  );
};
