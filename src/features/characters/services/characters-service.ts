import { Character } from "../models/character-model";
import { CharactersRepository } from "../repositories/characters-repository";

export interface CharactersService {
  getCharacters: () => Promise<Character[]>;
}

export class CharactersServiceImpl implements CharactersService {
  constructor(private repository: CharactersRepository) {}

  getCharacters = async (): Promise<Character[]> => {
    try {
      const characters = await this.repository.fetchCharacters();
      return characters;
    } catch (error) {
      console.error("Error in service layer:", error);
      throw error;
    }
  };
}
