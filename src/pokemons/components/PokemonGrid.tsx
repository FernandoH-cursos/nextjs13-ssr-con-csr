
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { PokemonCard } from "./PokemonCard";

interface PokemonGridProps {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: PokemonGridProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
