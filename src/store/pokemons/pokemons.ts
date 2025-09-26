import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonsState {
 favorites:  {[key: string]: SimplePokemon};
}

//* Estado inicial desde localStorage 
const getInitialState = (): PokemonsState => {
  //* Permitir que el codigo se ejecute solo en el cliente y así evitar errores de SSR por el uso de localStorage
  //! Pero aun así da un error de hidratacion que significa que el estado inicial del servidor es diferente al del cliente 
  // if (typeof window === "undefined") return {};

  const favorites = JSON.parse(
    localStorage.getItem("favorite-pokemons") ?? "{}"
  );

  return favorites;
};

const initialState: PokemonsState = {
  favorites: {  },
  // ...getInitialState(),
};

const pokemons = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons: (state, action: PayloadAction<{ [key: string]: SimplePokemon }>) => { 
      state.favorites = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }

      // TODO: No se debe usar localStorage en un reducer de redux, funciona pero es mala practica (usar middleware de redux)
      localStorage.setItem("favorite-pokemons", JSON.stringify(state.favorites));
    },
  },
});

export const { toggleFavorite } = pokemons.actions;

export default pokemons.reducer;
