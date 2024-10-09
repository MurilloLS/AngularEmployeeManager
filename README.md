# 🚀 AngularEmployeeManager 🚀

Aplicação Angular para gestão e consulta de funcionários, integrando-se à **API WebAPI_Funcionarios** para oferecer uma experiência de usuário fluída e eficiente.

## 📑 Índice
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura da Aplicação](#-estrutura-da-aplicação)
  - [Componentes Principais](#-componentes-principais)
  - [Serviços](#-serviços)
- [Configuração](#-configuração)
  - [Pré-requisitos](#-pré-requisitos)
  - [Como Executar](#-como-executar)
- [Contribuições](#-contribuições)

## 📋 Funcionalidades

- **Listar funcionários**: Exibe uma tabela com todos os funcionários cadastrados, com campo de busca para facilitar a navegação.
- **Criar novo funcionário**: Formulário dinâmico para adicionar novos funcionários.
- **Editar funcionário**: Permite editar informações de funcionários existentes.
- **Excluir funcionário**: Opção para remover funcionários da base de dados.
- **Desativar funcionário**: Método que inativa um funcionário, sem removê-lo permanentemente.
- **Exibir detalhes do funcionário**: Página dedicada para exibir informações detalhadas de um funcionário selecionado.

## 🛠️ Tecnologias Utilizadas

- [Angular](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bootstrap](https://getbootstrap.com/) para estilização
- [API WebAPI_Funcionarios](https://github.com/MurilloLS/WebAPI_Funcionarios) para integração

## 📂 Estrutura da Aplicação

### 📦 Componentes Principais

| Componente            | Descrição                                                             |
|-----------------------|-----------------------------------------------------------------------|
| `HomeComponent`        | Página inicial, exibe a lista de funcionários com campo de busca.     |
| `CadastroComponent`    | Formulário para criar novos funcionários.                            |
| `FuncionarioFormComponent` | Componente de formulário reutilizável para criação e edição.        |
| `DetalhesComponent`    | Página que exibe detalhes de um funcionário específico.               |
| `EditarComponent`      | Formulário para editar funcionários.                                 |

### 🔧 Serviços

| Serviço               | Descrição                                                             |
|-----------------------|-----------------------------------------------------------------------|
| `FuncionarioService`   | Gerencia requisições HTTP para a API, incluindo criação, edição, exclusão e busca de funcionários. |

## ⚙️ Configuração

### 🔧 Pré-requisitos
- Node.js instalado
- Angular CLI instalado

### 🚀 Como Executar

1. Clone o repositório:

    ```bash
    git clone <URL_DO_REPOSITORIO>
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd AngularEmployeeManager
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Execute a aplicação:

    ```bash
    ng serve
    ```

5. Acesse a aplicação no navegador em `http://localhost:4200`.

## 🤝 Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request.
