import { ReactNode } from "react";
import * as Stlye from "./style";

interface FormProps {
  children: ReactNode;
}

export const ContainerForm = (props: FormProps) => {
  return (
    <Stlye.ContainerForm>
      <Stlye.DivContent>{props.children}</Stlye.DivContent>
    </Stlye.ContainerForm>
  );
};
