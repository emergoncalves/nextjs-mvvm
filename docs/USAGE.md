# Documentação de Uso do Template Next.js com MVVM

Este documento fornece instruções claras e diretas sobre como utilizar o template Next.js com MVVM, incluindo como gerar novas features e integrá-las nas páginas.

## Índice

1. [Introdução](#introdução)
2. [Gerando Novas Features](#gerando-novas-features)
3. [Integrando Features nas Páginas](#integrando-features-nas-páginas)
4. [Exemplo Completo](#exemplo-completo)

## Introdução

Este template utiliza o padrão MVVM (Model-View-ViewModel) e a arquitetura Vertical Slice para organizar o código de forma escalável e fácil de manter. Cada feature é isolada em sua própria estrutura, facilitando a adição de novas funcionalidades.

## Gerando Novas Features

Para criar uma nova feature, utilize o gerador de features incluído no projeto. Este gerador cria automaticamente a estrutura necessária para uma nova feature.

### Passos para Gerar uma Nova Feature

1. Abra o terminal na raiz do projeto.
2. Execute o seguinte comando, substituindo `nome-da-feature` pelo nome desejado:

   ```bash
   npx tsx scripts/create-feature nome-da-feature
   ```

3. O gerador criará a seguinte estrutura dentro de `src/features/nome-da-feature`:

   - **components/**: Componentes reutilizáveis específicos da feature.
   - **viewmodels/**: Contém o ViewModel que conecta a View ao Model.
   - **services/**: Lógica de negócios e operações da feature.
   - **repositories/**: Acesso a dados e operações de persistência.
   - **models/**: Definições de tipos e interfaces para os dados da feature.
   - **stores/**: Gerenciamento de estado local usando Zustand.

## Integrando Features nas Páginas

Para integrar uma feature em uma página, siga os passos abaixo:

1. Importe o ViewModel da feature na página onde deseja utilizá-lo.
2. Utilize o ViewModel para gerenciar o estado e a lógica de negócios.

### Exemplo de Integração

```typescript
// src/pages/ExamplePage.tsx

import React from "react";
import { useExampleViewModel } from "../features/example/viewmodels/exampleViewModel";

const ExamplePage: React.FC = () => {
  const { data, fetchData } = useExampleViewModel();

  return (
    <div>
      <h1>Dados: {data}</h1>
      <button onClick={fetchData}>Buscar Dados</button>
    </div>
  );
};

export default ExamplePage;
```

## Exemplo Completo

### Criando uma Feature de Exemplo

1. Gere a feature:

   ```bash
   npx tsx scripts/create-feature exemplo
   ```

2. Implemente a lógica no ViewModel:

   ```typescript
   // src/features/exemplo/viewmodels/exampleViewModel.ts

   import { useState } from "react";

   export const useExampleViewModel = () => {
     const [data, setData] = useState<string | null>(null);

     const fetchData = () => {
       // Simulação de busca de dados
       setData("Dados de Exemplo");
     };

     return { data, fetchData };
   };
   ```

3. Integre na página:

   ```typescript
   // src/pages/ExamplePage.tsx

   import React from "react";
   import { useExampleViewModel } from "../features/exemplo/viewmodels/exampleViewModel";

   const ExamplePage: React.FC = () => {
     const { data, fetchData } = useExampleViewModel();

     return (
       <div>
         <h1>Dados: {data}</h1>
         <button onClick={fetchData}>Buscar Dados</button>
       </div>
     );
   };

   export default ExamplePage;
   ```

Com estas instruções, qualquer pessoa deve ser capaz de utilizar o template para criar e integrar novas features de forma eficiente e sem complicações.
