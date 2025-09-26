import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "Listado de 151 Pokémons",
  description: "Listado de Pokémons con SSG",
};

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data: PokemonResponse = await res.json();

  const pokemons = data.results.map((pokemon) => {
    const id = pokemon.url.split("/").at(-2)!;
    return {
      id,
      name: pokemon.name,
    };
  });


  return pokemons;
};


export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);


  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado de Pokémons <small className="text-blue-500">estático</small></span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}