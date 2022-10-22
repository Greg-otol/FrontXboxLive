import * as Style from "./style";

interface Prop {
  Route: () => void;
}

export const ReturnPage = ({ Route }: Prop) => {
  return <Style.BackIcon onClick={Route} />;
};
