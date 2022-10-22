import * as Style from "./styled";

interface Prop {
  Route: () => void;
}

export const CreateGamesAdmin = ({ Route }: Prop) => {
  return (
    <Style.SectionItemsDiv>
      <Style.SepareItems>
        <Style.CreateGameIcon onClick={Route} />
      </Style.SepareItems>
    </Style.SectionItemsDiv>
  );
};
