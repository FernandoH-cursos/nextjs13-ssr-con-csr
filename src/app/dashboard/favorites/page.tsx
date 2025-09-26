import { FavoritePokemons } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "Pokémons favoritos con SSG",
};


export default async function FavoritesPage() {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pokémons favoritos <small className="text-blue-500">Global State</small></span>

      <FavoritePokemons />
    </div>
  );
}