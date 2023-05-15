# Projeto Imobiliária - TypeORM com Relacionamentos

<br>API REST com relacionamentos entre tabelas, CRUD completo e rotas protegidas com permissões distintas para cada tipo de usuário (admin ou comum).Desenvolvida com uso de NodeJS, TypeScript, Express, TypeORM, integrada ao banco de dados relacional PostgreSQL.<br>

<br>Rotas e Funcionalidades:<br>
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
<br><br><br>Diagrama de Entidades e Relacionamentos:
<br><br> ![der](https://github.com/gabifontoura/api-rest-imobiliaria-gabifontoura/assets/110035918/0a0217d0-b324-473a-984e-e37025750501)

