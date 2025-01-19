import axios from "axios";
import { Character } from "../models/character-model";

export interface CharactersRepository {
  fetchCharacters: () => Promise<Character[]>;
}

export class CharactersRepositoryImpl implements CharactersRepository {
  API_URL = "https://rickandmortyapi.com/api/character";

  fetchCharacters = async (): Promise<Character[]> => {
    try {
      const response = await axios.get(this.API_URL);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching characters:", error);
      throw error;
    }
  };
}
