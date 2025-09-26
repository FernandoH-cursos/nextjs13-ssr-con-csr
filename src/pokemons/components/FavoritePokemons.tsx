"use client";

import { PokemonGrid } from './PokemonGrid';
import { useAppSelector } from '@/store';

import { IoHeartOutline } from 'react-icons/io5';

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) => Object.values(state.pokemons.favorites));

  /* 
  const [pokemons, setPokemons] = useState(favoritePokemons);

  useEffect(() => {
    setPokemons(favoritePokemons);
  }, [favoritePokemons]); 
  */

  return (
    <>
      {favoritePokemons.length > 0 ? (
        <PokemonGrid pokemons={favoritePokemons} />
      ) : (
        <NoFavorites />
      )}
    </>
  );
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[50vh]">
      <IoHeartOutline size={100} className="text-red-500" />
      <span className="text-2xl">No hay favoritos</span>
    </div>
  );
};
