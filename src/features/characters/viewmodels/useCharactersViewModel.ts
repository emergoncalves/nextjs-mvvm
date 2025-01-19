import { useState, useEffect } from "react";
import { CharactersService } from "../services/characters-service";
import { Character } from "../models/character-model";

export function useCharactersViewModel(service: CharactersService) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await service.getCharacters();
        setCharacters(data);
      } catch (err) {
        console.error("Error fetching characters:", err);
        setError("Failed to fetch characters");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { characters, loading, error };
}
