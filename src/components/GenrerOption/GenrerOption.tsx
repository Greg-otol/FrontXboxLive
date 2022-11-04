import { useEffect, useState } from "react";
import { IGenrerTypes } from "types/interfaces";
import { Genrers } from "Service/genrerService";
import { ContainerOption, Options, OptionSelect } from "./GenrerOption-style";

export const GenrerOption = () => {
  const [genrers, setGenrers] = useState<IGenrerTypes[]>([]);

  useEffect(() => {
    const fetchGenrer = async () => {
      const payload: any = await Genrers.AllGenrers();
      setGenrers(payload.data);
    };
    fetchGenrer();
  }, []);

  return (
    <ContainerOption>
      <OptionSelect>
        <Options value="default">Gêneros</Options>
        {genrers.map((genrer) => (
          <Options value="" key={genrer.id}>
            {genrer.name}
          </Options>
        ))}
      </OptionSelect>
    </ContainerOption>
  );
};
