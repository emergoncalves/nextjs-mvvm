
import { createCharactersContainer } from "@/features/characters/di";
import { createAuthContainer } from "@/features/auth/di";

export interface CoreDI {
  auth: ReturnType<typeof createAuthContainer>;

  characters: ReturnType<typeof createCharactersContainer>;
}

export const coreDI: CoreDI = {
  auth: createAuthContainer(),

  characters: createCharactersContainer(),
};
