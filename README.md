# Projeto Base Angular

Este é um projeto base para iniciar novos projetos com Angular.

## Descrição

Este projeto contém uma estrutura de pastas e arquivos pré-configurada, com as principais dependências e ferramentas para o desenvolvimento de aplicações web com Angular.

## Features

*   Angular
*   TypeScript
*   SCSS
*   Estrutura de pastas organizada
*   Componentes compartilhados
*   Pré-configuração de arquivos de ambiente

## Como Começar

1.  Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```

## Estrutura de Pastas

A estrutura de pastas está organizada da seguinte forma:

```
/
├── src/
│   ├── app/
│   │   ├── core/
│   │   ├── shared/
│   │   └── features/
│   ├── assets/
│   ├── environments/
│   └── styles/
├── .gitignore
├── angular.json
├── package.json
└── README.md
```

## Customização

Para customizar este projeto, você pode:

*   Alterar o nome do projeto no arquivo `package.json` e `angular.json`.
*   Adicionar novos componentes na pasta `src/app/features`.
*   Modificar os estilos globais em `src/styles/styles.scss`.