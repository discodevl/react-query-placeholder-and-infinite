import { Character } from "../utils/types";

type Props = {
  char: Character;
  isLoading: boolean;
};

function DisplayCharacter({ char, isLoading }: Props) {
  return (
    <div className={`flex gap-4 border-gray rounded max-w-[400px] min-w-[400px]`} >
      <img
        src={char.image}
        alt={`${char.name} image`}
        className="rounded h-full size-24"
        style={{opacity: isLoading ? "0.3" : "1"}}
      />
      <div className="flex flex-col">
        <div className="flex items-center justify-center gap-1">
            <label className="font-bold">Name:</label>
            <output>{char.name}</output>
        </div>
        <div className="flex items-center justify-center gap-1">
            <label className="font-bold">Gender:</label>
            <output>{char.gender}</output>
        </div>
        <div className="flex items-center justify-center gap-1">
            <label className="font-bold">Species:</label>
            <output>{char.species}</output>
        </div>
      </div>
    </div>
  );
}

export default DisplayCharacter;
