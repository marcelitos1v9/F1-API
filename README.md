# API F1 
![NPM](https://img.shields.io/npm/l/react)


## Esta API sobre Fórmula 1 é utilizada para gerenciar informações das equipes de corridas.

<img src="./imgs/apif1.svg">

<br>

# Tecnologias Essenciais
  <img align="center" alt="Js" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg">
 <img align="center" alt="Js" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg">
   <img align="center" alt="Js" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
	 <img align="center" alt="Js" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg">
    <img align="center" alt="Js" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"> 

<br>

# API EXTERNA
Estamos consumindo uma API externa para tratamento dos dados chamada <b>OpenF1</b>

<img align="center" alt="Js" height="100" width="auto" src="./imgs/logoapif1.png"> 

<br>

# EndPoints
<details>
  <summary>Detalhes</summary>
  
  ## - POST /team

- ``` router.post("/team", teamController.createOrUpdateTeamByName); ```

	- Esse endpoint é responsável por cadastrar uma equipe.

<b>Exemplo de um JSON para inserir e cadastrar 2 equipes no sistema</b>

``` 
"teams": [
		{
			"_id": "66d9c7a64832b4b8b6d99f13",
			"name": "Mercedes",
			"teamColour": "6CD3BF",
			"teamLogoUrl": "https://www.formula1.com/content/dam/fom-website/teams/mercedes_logo.png",
			"drivers": [
				{
					"name": "Lewis HAMILTON",
					"nationality": "GBR",
					"number": 44,
					"headshotUrl": "https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/1col/image.png",
					"flagUrl": "https://flagcdn.com/w320/gbr.png",
					"_id": "66d9c7a64832b4b8b6d99f14"
				},
				{
					"name": "George RUSSELL",
					"nationality": "GBR",
					"number": 63,
					"headshotUrl": "https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/1col/image.png",
					"flagUrl": "https://flagcdn.com/w320/gbr.png",
					"_id": "66d9c7a64832b4b8b6d99f15"
				}
			],
			"__v": 0
		},
		{
			"_id": "66da007af3dc0263c30d7366",
			"name": "Red Bull Racing",
			"teamColour": "#FF0000",
			"teamLogoUrl": "/static/teams/Red Bull Racing.png",
			"drivers": [
				{
					"name": "Max VERSTAPPEN",
					"nationality": "NED",
					"number": 1,
					"headshotUrl": "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png",
					"flagUrl": "/static/flags/NED.jpg",
					"_id": "66da007af3dc0263c30d7367"
				},
				{
					"name": "Sergio PEREZ",
					"nationality": "MEX",
					"number": 11,
					"headshotUrl": "https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/1col/image.png",
					"flagUrl": "/static/flags/MEX.jpg",
					"_id": "66da007af3dc0263c30d7368"
				}
			],
			"__v": 0
		}
		]
```
<br>

## - GET /teams

- ``` router.get("/teams", teamController.getAllTeams); ```
	- Esse endpoint é responsável por mostrar todas as equipes.

<b>Ao ser consumida por uma aplicação FrontEnd, ou utilizando ferramentes de requisição HTTP os dados podem ser listados</b>

<img align="center" alt="Js" height="auto" width="auto" src="./imgs/insomnia.svg"> 

<br>

## - GET /team/id

- ``` router.get("/team/:id", teamController.getOneTeam); ```
	- Esse endpoint mostra apenas uma das equipes selecionada pelo seu ID.

<br>

## PUT /team/id

-```router.put("/team/:id", teamController.updateTeam);```
	- Esse endpoint atualiza os dados ds equipe selecionada.

## DELETE /team/id

-```router.delete("/team/:id", teamController.deleteTeam);```
	- Esse endpoint deleta os dados da equipe selecionada.

<br>

## Respostas:
### OK 200
Caso essa resposta aconteça, a requisição foi um sucesso.

### No Content 204
Caso essa resposta aconteça, a equipe foi deletada com sucesso e não há nada para retornar ao usuário.

	- Exemplo de resposta: No body returned for response.

### Not Found 404
Caso essa resposta aconteça, significa que a equipe com o id fornecido não foi encontrada.

Exemplo de resposta:

```
{
  "error": "Equipe não encontrada."
}
```

### Internal Server Error 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor. Motivos podem incluir falhas na comunicação com o banco de dados.

Exemplo de resposta:

```
{
    "error": "Erro interno no servidor."
}
```

</details>

## Services

## Controllers