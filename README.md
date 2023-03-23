# Projeto Imobiliária - TypeORM com Relacionamentos

<br>Esse é o projeto final do curso no qual aprendi desenvolver APIs REST com CRUD completo.
<br>Utilizei NodeJS, TypeScript, TypeORM, integrada ao banco de dados realcional PostgreSQL<br>
Desenvolvi sozinha em 1 semana <br>

<br>Rotas:<br>

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
