import {
  ContainerIframes,
  CoverImageGame,
  IframeContent,
  InfoContainer,
} from "./style";

interface Props {
  imageGame: string | undefined;
  gameTrailer: string | undefined;
  gameplayGame: string | undefined;
}

export const GameInfos = ({ imageGame, gameTrailer, gameplayGame }: Props) => {
  return (
    <InfoContainer>
      <CoverImageGame src={imageGame} />

      <ContainerIframes>
        <IframeContent src={gameTrailer} loading="lazy"></IframeContent>
        <IframeContent src={gameplayGame} loading="eager"></IframeContent>
      </ContainerIframes>
    </InfoContainer>
  );
};
