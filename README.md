# Documentação API.
![NPM](https://img.shields.io/npm/l/react)

# API F1
Esta API sobre Fórmula 1 é utilizada para gerenciar informações das equipes de corridas.

## Endpoints
### - GET /teams
Esse endpoint é responsável por retornar a listagem de todas as equipes.

#### Parâmetros:
Nenhum

#### Respostas:
##### OK 200
Caso essa resposta aconteça, você vai receber a listagem das equipes.

Exemplo de resposta:

```
{
	"teams": [
		{
			"_id": "66dfa97b3553a3e422997a93",
			"name": "Mercedes",
			"teamColour": "#FF0000",
			"teamLogoUrl": "/static/teams/Mercedes.png",
			"drivers": [
				{
					"name": "Lewis HAMILTON",
					"nationality": "GBR",
					"number": 44,
					"headshotUrl": "https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/1col/image.png",
					"flagUrl": "/static/flags/GBR.jpg",
					"_id": "66dfa97b3553a3e422997a94"
				},
				{
					"name": "George RUSSELL",
					"nationality": "GBR",
					"number": 63,
					"headshotUrl": "https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/1col/image.png",
					"flagUrl": "/static/flags/GBR.jpg",
					"_id": "66dfa97b3553a3e422997a95"
				}
			],
			"__v": 0
		}
	]
}
```

##### Internal Server Error 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor. Motivos podem incluir falhas na comunicação com o banco de dados.

Exemplo de resposta:

```
{
    "error": "Erro interno no servidor."
}
```

### - POST /team
Esse endpoint é responsável por cadastrar uma nova equipe no banco.

#### Parâmetros:
name: Nome da equipe.<br>
teamColour: Cor da equipe em hexadecimal.<br>
teamLogoUrl: Link da logo da equipe    .<br>
drivers: Informações sobre os pilotos da equipe.

Exemplo de requisição:

```
{
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
			]
```

#### Respostas:
##### OK 200
Caso essa resposta aconteça, uma nova equipe foi cadastrada com sucesso.

Exemplo de resposta: Nenhum conteúdo retornado.

##### Internal Server Error 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno no servidor."
}
```


### - DELETE /team/
Esse endpoint é responsável por deletar uma equipe específica através de seu respectivo ID.

#### Parâmetros:
id: ID da equipe a ser deletada.

#### Respostas:
##### No Content 204
Caso essa resposta aconteça, a equipe foi deletada com sucesso e não há nada para retornar ao usuário.

Exemplo de resposta: No body returned for response.

##### Internal Server Error 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno no servidor."
}
```

### - PUT /team/
Esse endpoint é responsável por atualizar as informações de uma equipe específica pelo seu ID.

#### Parâmetros:
id: ID da equipe a ser atualizada.<br>
name: Nome da equipe.<br>
foundationYear: Ano de fundação da equipe.<br>
base: .<br>
teamColour: Cor da equipe em hexadecimal.<br>

Exemplo de requisição:

```
{
  "name": "Red Bull Racing",
  "foundationYear": 2005,
  "base": "Milton Keynes",
  "teamColour": "#1E41FF"
}

```

#### Respostas:
##### OK 200
Caso essa resposta aconteça, a equipe será atualizada com sucesso e os dados atualizados serão retornados.

Exemplo de resposta:

```
{
	"team": {
		"_id": "66e2348f1f24fbf46aa4e3d7",
		"name": "Red Bull Racing",
		"teamColour": "#1E41FF",
		"teamLogoUrl": "/static/teams/Red Bull Racing.png",
		"drivers": [
			{
				"name": "Max VERSTAPPEN",
				"nationality": "NED",
				"number": 1,
				"headshotUrl": "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png",
				"flagUrl": "/static/flags/NED.jpg",
				"_id": "66e2348f1f24fbf46aa4e3d8"
			},
			{
				"name": "Sergio PEREZ",
				"nationality": "MEX",
				"number": 11,
				"headshotUrl": "https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/1col/image.png",
				"flagUrl": "/static/flags/MEX.jpg",
				"_id": "66e2348f1f24fbf46aa4e3d9"
			}
		],
		"__v": 0,
		"base": "Milton Keynes",
		"foundationYear": 2005
	}
}
```

##### Not Found 404
Caso essa resposta aconteça, significa que a equipe com o id fornecido não foi encontrada.

Exemplo de resposta:

```
{
  "error": "Equipe não encontrada."
}
```

##### Internal Server Error 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor!"
}
```

### - GET /team/
Esse endpoint é responsável por retornar as informações de uma equipe específica.

#### Parâmetros:
id: ID da equipe a ser consultada.

#### Respostas:
##### OK 200
Caso essa resposta aconteça, você vai receber as informações da equipe consultada.

Exemplo de resposta:

```
{
	"team": {
		"_id": "66e2348f1f24fbf46aa4e3d7",
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
				"_id": "66e2348f1f24fbf46aa4e3d8"
			},
			{
				"name": "Sergio PEREZ",
				"nationality": "MEX",
				"number": 11,
				"headshotUrl": "https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/1col/image.png",
				"flagUrl": "/static/flags/MEX.jpg",
				"_id": "66e2348f1f24fbf46aa4e3d9"
			}
		],
		"__v": 0
	}
}
```

##### Não Encontrado 404
Caso essa resposta aconteça, significa que o a equipe com o ID fornecido não foi encontrado.

Exemplo de resposta:

```
{
    "error": "Equipe não encontrada."
}
```

##### Internal Server Error 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "error": "Erro interno do servidor."
}
```
