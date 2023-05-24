# Projeto Imobiliária - TypeORM com Relacionamentos

<br>API REST com relacionamentos entre tabelas, CRUD completo e rotas protegidas com permissões distintas para cada tipo de usuário (admin ou comum).Desenvolvida com uso de NodeJS, TypeScript, Express, TypeORM, integrada ao banco de dados relacional PostgreSQL.<br>

## Diagrama de Entidades e Relacionamentos:
<br> ![der](https://github.com/gabifontoura/api-rest-imobiliaria-gabifontoura/assets/110035918/0a0217d0-b324-473a-984e-e37025750501)<br><br>

## Rotas e Funcionalidades:<br>
<br>POST	/users -	Criação de usuário<br>
<br>GET	/users -	Lista todos os usuários<br>
<br>PATCH	/users/:id	-  Atualiza um usuário<br>
<br>DELETE	/users/:id	-  Realiza um soft delete no usuário<br>
<br>POST	/login	-  Gera o token de autenticação<br>
<br>POST	/categories	- Criação de categoria<br>
<br>GET	/categories	- Lista todas as categorias<br>
<br>GET	/categories/:id/realEstate	-  Lista todos imóveis que pertencem a uma categoria<br>
<br>POST	/realEstate	 -  Criação de um imóvel<br>
<br>GET	/realEstate -  Lista todos os imóveis<br>
<br>POST	/schedules - 	Agenda uma visita a um imóvel<br>
<br>GET	/schedules/realEstate/:id	 -  Lista todos os agendamentos de um imóvel

## Iniciar projeto

Para inciar este projeto, é necessário instalar as dependências, que serão utilizadas nos testes. Portanto utilize o comando abaixo para instalar tais dependências:

```bash
# caso use npm
npm run i

# caso use yarn
yarn
```

## Instalação

Apenas as bibliotecas de teste, ou que os testes dependem, estão no **package.json**. Por isso, instale as dependências do projeto manualmente e não se esqueça de inicia-lo também.

```bash
# caso use npm
npm init -y

# caso use yarn
yarn init -y
```

## Dependências dos testes

Para que os testes funcionem corretamente, existem algumas dependências.

* O `app` tem que ser exportado como **default** em **src/app.ts**. Exemplo:

```ts
export default app
```

* O `AppDataSource` tem que ser exportado em **src/data-source.ts**. Exemplo:

```ts
export { AppDataSource }

// ou

export const AppDataSource = new DataSource(dataSourceConfig());
```

* As Entities **tem que ter os respectivos nomes** e **tem que ter a exportação centralizada** em **entities/index.ts**. Exemplo:

```ts
import { Address } from './<arquivo>';
import { Category } from './<arquivo>';
import { RealEstate } from './<arquivo>';
import { Schedule } from './<arquivo>';
import { User } from './<arquivo>';

export { Address, RealEstate, Category, User, Schedule };
```

## Sobre os testes

Essa aplicação possui testes, que serão utilizados para validar, se todas as regras de negócio foram aplicadas de maneira correta.

Os testes estão localizados em `src/__tests__`.

Na subpasta `integration` estão os testes.

Já na subpasta `mocks` estão os dados que serão utilizados para os testes.

No arquivo `jest.config.ts` estão algumas configurações necessárias para os testes rodarem.

**`De modo algum altere qualquer um desses arquivos.`** Isso poderá comprometer a integridade dos testes.

E também não altere o script de `test` localizado no `package.json`. Isso será utilizado para rodar os testes.

## Rodando os testes

Para rodar os testes é necessário que no seu terminal, você esteja dentro do diretório do projeto.

Estando no terminal e dentro do caminho correto, você poderá utilizar os comandos a seguir:

### Rodar todos os testes

```bash
# caso use npm
npm run test

# caso use yarn
yarn test
```

### Rodar todos os testes e ter um log ainda mais completo

```bash
# caso use npm
npm run test --all

# caso use yarn
yarn test --all
```

### Rodar os testes de uma pasta específica

> detalhe: repare que tests está envolvido por 2 underlines. Isso se chama ***dunder***.

```bash
# caso use npm
npm run test <subpasta>

# caso use yarn
yarn test <subpasta>
```

### Rodar os testes de um arquivo específico

```bash
# caso use npm
npm run test <subpasta>/<arquivo>

# caso use yarn
yarn test <subpasta>/<arquivo>
```

**Caso você queira verificar todas as opções de execução de testes, visite a [Documentação oficial do Jest](https://jestjs.io/docs/cli)**

Após rodar um dos comandos aparecerá um log no seu terminal, contendo as informações da execução do teste.

**Observação:** O teste pode demorar alguns segundos para ser finalizado. Quanto maior for o teste, mais tempo será consumido para a execução.

### Agora que já sabe como iniciar o seu projeto e rodar os testes, é hora de colocar a mão no código
