# GymList

O **GymList** é uma aplicação simples desenvolvida para auxiliar usuários de academias a registrar e acompanhar seus exercícios e progresso nas rotinas de treino.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **[React](https://reactjs.org/)**: Uma biblioteca JavaScript para a construção de interfaces de usuário interativas.
- **[Vite](https://vitejs.dev/)**: Ferramenta moderna para build e desenvolvimento de aplicações web, proporcionando uma experiência de desenvolvimento rápida.
- **HTML**: Linguagem de marcação para estruturação da página.
- **CSS**: Folhas de estilo usadas para criar o design e layout visual da aplicação.

## Como Rodar o Projeto

### Pré-requisitos

Antes de rodar o projeto, verifique se o **Node.js** está instalado em sua máquina. Caso não tenha, você pode obter a versão mais recente no [site oficial](https://nodejs.org/).

### Passos para Iniciar

1. **Clone o repositório** para o seu ambiente local:

   ```bash
   git clone https://github.com/seu-usuario/gymlist.git
   cd gymlist

2. Instale as dependências necessárias:

   ```bash
   npm install

3. Execute o projeto localmente em modo de desenvolvimento:

   ```bash
   npm run dev

4. Acesse a aplicação no navegador:

   ```bash
   O aplicativo estará disponível em http://localhost:5173/home.


### Explicação dos diretórios e arquivos:

- **`/src`**: Contém o código-fonte da aplicação, incluindo os componentes, estilos e outros arquivos JavaScript ou JSX utilizados para o funcionamento da aplicação.
  - **`/assets`**: Armazena todos os arquivos estáticos (imagens, ícones, fontes, etc.) que a aplicação utiliza.
  - **`/styles`**: Contém os arquivos de estilo CSS. Aqui você pode incluir arquivos globais e específicos de cada componente.
  - **`App.jsx`**: O componente principal da aplicação, onde os outros componentes são importados e renderizados.

- **`/public`**: Diretório contendo arquivos públicos estáticos que são acessados diretamente pelo navegador.
  - **`index.html`**: O ponto de entrada para a aplicação. Esse arquivo é onde o React será montado.
  
- **`vite.config.js`**: Arquivo de configuração do Vite, que define o comportamento da ferramenta de build, otimizações, caminhos, entre outros.
- **`package.json`**: Gerencia as dependências do projeto, bem como scripts para rodar o projeto, compilar, entre outros.
- **`README.md`**: Este arquivo, que fornece as informações sobre o projeto, como descrito acima.

Essa estrutura é um ponto de partida comum em projetos React com Vite e pode ser expandida ou alterada conforme o projeto cresce.

