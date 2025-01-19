import { create } from "zustand";
import { Character } from "../models/character-model";

interface CharactersStore {
  // Estado
  loading: boolean;
  error: string | null;
  characters: Character[];

  // Ações
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setCharacters: (characters: Character[]) => void;
}

export const useCharactersStore = create<CharactersStore>((set) => ({
  loading: false,
  error: null,
  characters: [],

  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setCharacters: (characters) => set({ characters }),
}));
