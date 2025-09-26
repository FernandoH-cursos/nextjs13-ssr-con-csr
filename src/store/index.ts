import { useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { localStorageMiddleware } from "./middlewares/localstorage-middleware";

import counterReducer from "./counter/counterSlice";
import pokemonsReducer from "./pokemons/pokemons";

/*
 * Store de redux toolkit que sirve para manejar el estado global de la aplicacion.
 * 'reducer' es un objeto que contiene los reducers de la aplicacion. Los reducers son funciones puras que toman el estado actual
 * y una accion, y devuelven un nuevo estado.
 */
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsReducer,
  },
  //* Agregar el middleware de localStorage para guardar el estado en localStorage despues de que la accion haya sido procesada 
  //* por el reducer.
  /* middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware), */
});

//* 'RootState' es el tipo del estado global de la aplicacion.
export type RootState = ReturnType<typeof store.getState>;
//* 'AppDispatch' es el tipo de la funcion dispatch del store.
export type AppDispatch = typeof store.dispatch;

/*
 * Custom hooks para usar el dispatch y el selector con los tipos correctos.
 * 'useAppDispatch' es un hook que devuelve la funcion dispatch del store con el tipo correcto.
 * 'useAppSelector' es un hook que devuelve el estado global de la aplicacion con el tipo correcto.
 */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
