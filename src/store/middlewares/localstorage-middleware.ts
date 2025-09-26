import { Action, Middleware } from "@reduxjs/toolkit";

import { RootState } from "..";

/* 
* Un middleware en redux es una funcion que recibe el store y retorna otra funcion que recibe el siguiente dispatch y retorna otra 
* funcion que recibe la accion.
* El middleware se ejecuta antes de que la accion llegue al reducer
* Se puede usar para hacer cosas como logging, manejo de errores, llamadas asincronas, etc.
* En este caso, se usara para guardar el estado en localStorage despues de que la accion haya sido procesada por el reducer.
*/

export const localStorageMiddleware: Middleware = (store) => {

  return (next) => (action) => {
    // console.log({ state: store.getState(), action });

    //* Llamar al siguiente dispatch (el reducer) 
    const result = next(action);

    //* Si la accion es toggleFavorite, guardar el estado de pokemons en localStorage
    const { type } = action as Action;

    if (type === "pokemons/toggleFavorite") {

      const { pokemons } = store.getState() as RootState;

      localStorage.setItem("favorite-pokemons", JSON.stringify(pokemons));

      return;

    }

    return result;

  };

};