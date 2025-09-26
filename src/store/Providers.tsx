"use client";

import { useEffect } from 'react';

import { store } from '.';

import { Provider } from 'react-redux';

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    // This function will be called when the component is mounted on the client side
    const favorites = JSON.parse(
      localStorage.getItem("favorite-pokemons") ?? "{}"
    );
    console.log(favorites);
    store.dispatch({ type: "pokemons/setFavoritePokemons", payload: favorites });
  }, []);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
