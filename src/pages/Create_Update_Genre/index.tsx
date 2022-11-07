import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ICreateGenrerType, IGenrerTypes } from "types/interfaces";
import { Genrers } from "Service/genrerService";
import swal from "sweetalert";
import { Header } from "components/Header/Header";
import {
  BtnCreate,
  BtnDelete,
  BtnEdit,
  ContainerOption,
  DescriptionForm,
  DivContainers,
  GenrerCol,
  GenrerContainer,
  GenrerFormGroup,
  GenrerRow,
  Options,
  OptionSelect,
  Page,
} from "./style";

export const CrudGenrer = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<ICreateGenrerType>({
    name: "",
  });
  const [allName, setAllName] = useState<IGenrerTypes[]>([]);
  const [genrerId, setGenrerId] = useState<string>("");

  useEffect(() => {
    fecthAllGenrers();
  }, []);

  const fecthAllGenrers = async () => {
    const allGenrers = await Genrers.AllGenrers();

    if (allGenrers) {
      setAllName(allGenrers.data);
    }
  };

  const fechtGenrerId = async (id: string) => {
    const genrer = await Genrers.GetGenrerById(id);

    if (genrer) {
      setName({
        name: genrer.data.name,
      });
    }
  };

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName((name: ICreateGenrerType) => ({
      ...name,
      [e.target.name]: e.target.value,
    }));
  };

  const createGenrer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payloadCreate = await Genrers.CreateGenrer(name);

    if (payloadCreate) {
      swal({
        title: "Gênero cadastrado com sucesso!",
        icon: "success",
        timer: 6000,
      });
    } else {
      swal({
        title: "Error ao cadastrar gênero!",
        icon: "error",
        timer: 6000,
      });
    }
  };

  const editGenrer = async () => {
    const payloadEdit = await Genrers.EditGenrer(genrerId, name);

    if (payloadEdit) {
      swal({
        title: "Gênero editado com sucesso!",
        icon: "success",
        timer: 6000,
      });
      fecthAllGenrers();
    } else {
      swal({
        title: "Error ao editar gênero!",
        icon: "error",
        timer: 6000,
      });
    }
  };

  const deleteGenrer = async () => {
    const payloadDelete = await Genrers.DeleteGenrer(genrerId);

    if (payloadDelete) {
      swal({
        title: "Gênero deletado com sucesso!",
        icon: "success",
        timer: 6000,
      });
      fecthAllGenrers();
    } else {
      swal({
        title: "Error ao deletar gênero!",
        icon: "error",
        timer: 6000,
      });
    }
  };

  const takeGenrer = (e: React.ChangeEvent<any>) => {
    setGenrerId(e.target.value);
    fechtGenrerId(e.target.value);
  };

  return (
    <Page>
      <Header />
      <DivContainers>
        <GenrerContainer onSubmit={createGenrer}>
          <DescriptionForm>Adicionar gêneros de jogos</DescriptionForm>
          <GenrerRow>
            <GenrerCol>
              <GenrerFormGroup>
                <input
                  type="text"
                  placeholder=" Gênero"
                  name="name"
                  id="name"
                  onChange={handleValue}
                  required
                />
              </GenrerFormGroup>
            </GenrerCol>
          </GenrerRow>
          <BtnCreate type="submit">Adicionar</BtnCreate>
        </GenrerContainer>

        <GenrerContainer>
          <DescriptionForm>Editar ou excluir gêneros</DescriptionForm>

          <ContainerOption>
            <OptionSelect onChange={takeGenrer} id="gender">
              <Options value="default">Gênero</Options>
              {allName.map((genrer) => (
                <Options key={genrer.id} value={genrer.id}>
                  {genrer.name}
                </Options>
              ))}
            </OptionSelect>
          </ContainerOption>

          <GenrerRow>
            <GenrerCol>
              <GenrerFormGroup>
                <input
                  type="text"
                  placeholder=" Editar ou deletar Gênero"
                  name="name"
                  id="name"
                  value={name.name}
                  onChange={(e: React.ChangeEvent<any>) =>
                    setName({ name: e.target.value })
                  }
                  required
                />
              </GenrerFormGroup>
            </GenrerCol>
          </GenrerRow>

          <BtnEdit type="button" onClick={editGenrer}>
            Editar
          </BtnEdit>
          <BtnDelete type="button" onClick={deleteGenrer}>
            Deletar
          </BtnDelete>
        </GenrerContainer>
      </DivContainers>
    </Page>
  );
};
