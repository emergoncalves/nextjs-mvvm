#!/usr/bin/env node
import * as fs from "fs";
import * as path from "path";

function createFeature(featureName: string) {
  const basePath = path.join(process.cwd(), "src", "features", featureName);

  const directories = [
    "",
    "components",
    "viewmodels",
    "services",
    "repositories",
    "models",
    "stores",
  ];

  directories.forEach((dir) => {
    const dirPath = path.join(basePath, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  });

  const storeTemplate = `import { create } from "zustand";

interface ${capitalize(featureName)}Store {
  // Estado
  loading: boolean;
  error: string | null;

  // Ações
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const use${capitalize(featureName)}Store = create<${capitalize(
    featureName
  )}Store>((set) => ({
  loading: false,
  error: null,

  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
`;

  const diTemplate = `import { ${capitalize(
    featureName
  )}Service } from "./services/${featureName}-service";
import { ${capitalize(
    featureName
  )}RepositoryImpl } from "./repositories/${featureName}-repository";

export interface ${capitalize(featureName)}Container {
  service: ${capitalize(featureName)}Service;
  repository: ${capitalize(featureName)}RepositoryImpl;
}

export function create${capitalize(featureName)}Container(): ${capitalize(
    featureName
  )}Container {
  const repository = new ${capitalize(featureName)}RepositoryImpl();
  const service = new ${capitalize(featureName)}Service(repository);

  return {
    service: service,
    repository: repository,
  };
}

export type ${capitalize(featureName)}DI = typeof create${capitalize(
    featureName
  )}Container;
`;

  const serviceTemplate = `import { ${capitalize(
    featureName
  )}Repository } from "../repositories/${featureName}-repository";

export class ${capitalize(featureName)}Service {
  constructor(private repository: ${capitalize(featureName)}Repository) {}

  // Adicione seus métodos aqui
}`;

  const repositoryTemplate = `export interface ${capitalize(
    featureName
  )}Repository {
  // Defina os métodos do repositório aqui
}

export class ${capitalize(featureName)}RepositoryImpl implements ${capitalize(
    featureName
  )}Repository {
  // Implementação dos métodos
}`;

  const viewModelTemplate = `import { ${capitalize(
    featureName
  )}Service } from "../services/${featureName}-service";
import { use${capitalize(
    featureName
  )}Store } from "../stores/${featureName}-store";

export function use${capitalize(featureName)}ViewModel(service: ${capitalize(
    featureName
  )}Service) {
  const { loading, error, setLoading, setError } = use${capitalize(
    featureName
  )}Store();

  return {
    loading,
    error,
    // Adicione suas funções aqui
  };
}`;

  const modelTemplate = `export interface ${capitalize(featureName)}Model {
  // Defina as propriedades do modelo aqui
}`;

  const files = [
    { name: `stores/${featureName}-store.ts`, content: storeTemplate },
    { name: "di.ts", content: diTemplate },
    { name: `services/${featureName}-service.ts`, content: serviceTemplate },
    {
      name: `repositories/${featureName}-repository.ts`,
      content: repositoryTemplate,
    },
    {
      name: `viewmodels/use${capitalize(featureName)}ViewModel.ts`,
      content: viewModelTemplate,
    },
    { name: `models/${featureName}-model.ts`, content: modelTemplate },
  ];

  files.forEach(({ name, content }) => {
    const filePath = path.join(basePath, name);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, content);
    }
  });

  updateDIContainer();

  console.log(`✅ Feature "${featureName}" criada com sucesso!`);
}

function updateDIContainer() {
  const diContainerPath = path.join(
    process.cwd(),
    "src",
    "features",
    "core",
    "di-container.ts"
  );
  const featuresPath = path.join(process.cwd(), "src", "features");
  const featureDirs = fs
    .readdirSync(featuresPath)
    .filter((dir) => fs.statSync(path.join(featuresPath, dir)).isDirectory());

  let importStatements = "";
  let interfaceStatements = "";
  let containerStatements = "";

  let content = fs.readFileSync(diContainerPath, "utf-8");

  featureDirs.forEach((feature) => {
    const diPath = path.join(featuresPath, feature, "di.ts");
    if (fs.existsSync(diPath)) {
      const importStatement = `import { create${capitalize(
        feature
      )}Container } from "@/features/${feature}/di";\n`;
      const interfaceStatement = `  ${feature}: ReturnType<typeof create${capitalize(
        feature
      )}Container>;\n`;
      const containerStatement = `  ${feature}: create${capitalize(
        feature
      )}Container(),\n`;

      if (!content.includes(importStatement)) {
        importStatements += importStatement;
      }

      if (!content.includes(interfaceStatement)) {
        interfaceStatements += interfaceStatement;
      }

      if (!content.includes(containerStatement)) {
        containerStatements += containerStatement;
      }
    }
  });

  const importIndex = content.indexOf("import");
  const lastImportIndex = content.lastIndexOf(";", importIndex) + 1;
  content =
    content.slice(0, lastImportIndex) +
    "\n" +
    importStatements +
    content.slice(lastImportIndex);

  const interfaceIndex = content.indexOf("export interface CoreDI");
  const lastBraceIndexInterface = content.indexOf("}", interfaceIndex);
  content =
    content.slice(0, lastBraceIndexInterface) +
    "\n" +
    interfaceStatements +
    content.slice(lastBraceIndexInterface);

  const containerIndex = content.indexOf("export const coreDI");
  const lastBraceIndexContainer = content.indexOf("}", containerIndex);
  content =
    content.slice(0, lastBraceIndexContainer) +
    "\n" +
    containerStatements +
    content.slice(lastBraceIndexContainer);

  fs.writeFileSync(diContainerPath, content);
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const featureName = process.argv[2];

if (!featureName) {
  console.error("❌ Por favor, forneça um nome para a feature!");
  process.exit(1);
}

createFeature(featureName);
