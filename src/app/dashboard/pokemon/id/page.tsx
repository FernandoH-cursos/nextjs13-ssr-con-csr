/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Pokemon, PokemonResponse } from "@/pokemons";

// Tipo de las props que recibe la página
type PokemonPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Función que genera los parámetros estáticos para las páginas de Pokémon (del 1 al 151 genera páginas estáticas)
export async function generateStaticParams() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const pokemons: PokemonResponse = await res.json();
  
  return pokemons.results.map((pokemon) => {
    const id = pokemon.url.split("/").at(-2)!;
    
    return { id };
  });
}

// Función que genera los metadatos dinámicos para cada página de Pokémon
export async function generateMetadata({
  params,
}: PokemonPageProps): Promise<Metadata> {
  const pokemonId = (await params).id;

  try {
    const { id, name } = await getPokemon(pokemonId);

    return {
      title: `#${id} - ${name}`,
      description: `Información del Pokémon ${name}`,
    };
  } catch (error) {
    return { title: "Pokémon no encontrado", description: "" };
  }
}

// Función que obtiene los datos de un Pokémon por su ID
const getPokemon = async (id: string): Promise<Pokemon> => {
  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      cache: "force-cache", // TODO: cambiar en un futuro
      // next: { revalidate: 60 * 60 * 30 * 6 }, // revalida cada 6 horas
    }).then((res) => res.json());

    console.log("se cargó el pokemon:", pokemon.name);

    return pokemon;
  } catch (error) {
    notFound();
  }
};

// Componente principal de la página de Pokémon
export default async function PokemonPage({ params }: PokemonPageProps) {
  const { id } = await params;
  const pokemon = await getPokemon(id);

  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={pokemon.sprites.other?.dream_world.front_default ?? ""}
              width={150}
              height={150}
              alt={`Imagen del pokemon ${pokemon.name}`}
              className="mb-5"
            />

            <div className="flex flex-wrap">
              {pokemon.moves.map((move) => (
                <p key={move.move.name} className="mr-2 capitalize">
                  {move.move.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Types</p>
            <div className="text-base font-medium text-navy-700 flex">
              {pokemon.types.map((type) => (
                <p key={type.slot} className="mr-2 capitalize">
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Peso</p>
            <span className="text-base font-medium text-navy-700 flex">
              {pokemon.weight}
            </span>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Regular Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Shiny Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
