import * as Style from "./style";

interface Prop {
  Route: () => void;
}

export const CreateGenrerAdmin = ({ Route }: Prop) => {
  return (
    <Style.SectionItemsDiv>
      <Style.SepareItems>
        <Style.CreateGenrerIcon onClick={Route} />
      </Style.SepareItems>
    </Style.SectionItemsDiv>
  );
};
