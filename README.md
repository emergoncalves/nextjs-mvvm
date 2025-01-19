# Template Next.js com MVVM

Template moderno de Next.js utilizando padrão MVVM (Model-View-ViewModel) e Vertical Slice Architecture.

## 🚀 Tecnologias

- [Next.js 14](https://nextjs.org/) - Framework React com SSR
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Lucide Icons](https://lucide.dev/) - Biblioteca de ícones
- [Next Themes](https://github.com/pacocoursey/next-themes) - Gerenciamento de temas
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animações
- [Zustand](https://github.com/pmndrs/zustand) - Gerenciamento de estado
- [Radix UI](https://www.radix-ui.com/) - Componentes primitivos acessíveis

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/proposal-generator-mvvm.git

# Entre na pasta
cd proposal-generator-mvvm

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🏗️ Arquitetura

O projeto utiliza MVVM (Model-View-ViewModel) com Vertical Slice Architecture:

```
src/
├── app/                    # Rotas e layouts
├── features/              # Features organizadas por funcionalidade
│   ├── common/           # Componentes e utilitários compartilhados
│   │   ├── components/   # Componentes reutilizáveis
│   │   ├── hooks/       # Hooks personalizados
│   │   └── lib/         # Utilitários e funções
│   └── [feature]/       # Funcionalidades específicas
│       ├── components/   # Componentes da feature
│       ├── viewmodels/  # ViewModels da feature
│       ├── services/    # Serviços da feature
│       ├── repositories/ # Repositórios da feature
│       ├── models/      # Modelos da feature
│       └── stores/      # Estado local da feature
└── core/                # Configurações e injeção de dependências
```

### Características

- 🌓 Tema claro/escuro
- 🎨 UI moderna e responsiva
- ♿ Componentes acessíveis
- 🎯 Tipagem forte com TypeScript
- 📱 Mobile-first
- 🔄 Hot reload
- 🚀 Performance otimizada

## 🛠️ Gerador de Features

Este projeto inclui um gerador de estrutura de features que facilita a criação de novas funcionalidades seguindo o padrão MVVM com injeção de dependência. O gerador cria automaticamente a estrutura necessária para uma nova feature, incluindo componentes, serviços, repositórios, modelos, stores e viewmodels.

### Como Usar

Para criar uma nova feature, execute o seguinte comando:

```bash
npm run create-feature nome-da-feature
```

Substitua `nome-da-feature` pelo nome desejado para a sua nova feature.

### Estrutura Criada

O gerador cria a seguinte estrutura de diretórios e arquivos:

- **components/**: Componentes reutilizáveis específicos da feature.
- **viewmodels/**: Contém o ViewModel que conecta a View ao Model.
- **services/**: Lógica de negócios e operações da feature.
- **repositories/**: Acesso a dados e operações de persistência.
- **models/**: Definições de tipos e interfaces para os dados da feature.
- **stores/**: Gerenciamento de estado local usando Zustand.

### Finalidade de Cada Arquivo

- **store.ts**: Define o estado local e as ações usando Zustand.
- **di.ts**: Configura a injeção de dependências para a feature.
- **service.ts**: Implementa a lógica de negócios da feature.
- **repository.ts**: Define e implementa o acesso a dados.
- **viewmodel.ts**: Conecta a lógica de negócios à interface do usuário.
- **model.ts**: Define as interfaces e tipos de dados usados na feature.

Este gerador ajuda a manter a consistência e a organização do código, permitindo que você se concentre na lógica específica da sua aplicação.

## 📝 Licença

Este projeto está sob a licença MIT.

## ⚠️ Nota

Este projeto ainda está em desenvolvimento e não está pronto para produção. Use com cautela e contribua para melhorias!

## 🎯 Objetivo

O objetivo deste projeto é fornecer uma estrutura escalável que oferece mais segurança para a inclusão de novas features, reduzindo o tempo de decisão sobre qual estrutura utilizar. Ao adotar o padrão MVVM, garantimos uma separação clara de responsabilidades, facilitando a manutenção e evolução do código.

### Vantagens do MVVM

- **Separação de Responsabilidades**: Facilita a manutenção e testes, isolando a lógica de negócios da interface do usuário.
- **Reutilização de Código**: Componentes e ViewModels podem ser reutilizados em diferentes partes da aplicação.
- **Facilidade de Testes**: A lógica de negócios pode ser testada independentemente da interface do usuário.

### Outros Frameworks que Utilizam MVVM

- **Angular**: Utiliza um padrão semelhante com componentes e serviços.
- **Vue.js**: Com a introdução do Vuex, adota conceitos de MVVM para gerenciamento de estado.
- **WPF (Windows Presentation Foundation)**: Um dos primeiros a popularizar o MVVM no desenvolvimento de aplicações desktop.
