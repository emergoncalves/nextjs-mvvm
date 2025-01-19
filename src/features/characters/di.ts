import { CharactersServiceImpl } from "./services/characters-service";
import { CharactersRepositoryImpl } from "./repositories/characters-repository";

export interface CharactersContainer {
  service: CharactersServiceImpl;
  repository: CharactersRepositoryImpl;
}

export function createCharactersContainer(): CharactersContainer {
  const repository = new CharactersRepositoryImpl();
  const service = new CharactersServiceImpl(repository);

  return {
    service: service,
    repository: repository,
  };
}

export type CharactersDI = typeof createCharactersContainer;
