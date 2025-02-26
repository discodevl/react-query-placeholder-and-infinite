import { Character } from "../utils/types";
import DisplayCharacter from "./DisplayCharacter";

type Props = {
  characters: Character[];
  isLoading: boolean;
};

function DisplayCharacters({ characters, isLoading }: Props) {
  return (
    <div className="flex flex-wrap gap-4 mb-2">
      {characters?.map((char, i) => (
        <DisplayCharacter key={i} char={char} isLoading={isLoading}/>
      ))}
    </div>
  );
}

export default DisplayCharacters;
