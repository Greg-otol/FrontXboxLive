import { ReactNode } from "react";
import { DivContent } from "./style";

interface FormProps {
  children: ReactNode;
}

export const ContainerForm = (props: FormProps) => {
  return (
    <ContainerForm>
      <DivContent>{props.children}</DivContent>
    </ContainerForm>
  );
};
