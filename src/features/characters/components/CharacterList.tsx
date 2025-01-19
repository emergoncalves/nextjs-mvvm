"use client";
import React from "react";
import { useCharactersViewModel } from "../viewmodels/useCharactersViewModel";
import Image from "next/image";
import { coreDI } from "@/features/core/di-container";

const CharacterList: React.FC = () => {
  const { characters, loading, error } = useCharactersViewModel(
    coreDI.characters.service
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Rick and Morty Characters</h1>
      <ul className="grid grid-cols-4 gap-4 w-full md:w-1/2">
        {characters.map((character) => (
          <li key={character.id} className="flex flex-col items-center">
            <Image
              src={character.image}
              alt={character.name}
              width={100}
              height={100}
              className="rounded-lg"
            />
            <p className="mt-2 text-center">{character.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
