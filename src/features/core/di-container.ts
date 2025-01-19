import { createAuthContainer } from "@/features/auth/di";

export interface CoreDI {
  auth: ReturnType<typeof createAuthContainer>;
}

export const coreDI: CoreDI = {
  auth: createAuthContainer(),
};
