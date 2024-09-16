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
			"_id": "66e79c1ba095f6f0f9edf029",
			"name": "McLaren",
			"teamColour": "#F58020",
			"teamLogoUrl": "McLaren.png",
			"drivers": [
				{
					"name": "Lando NORRIS",
					"nationality": "GBR",
					"number": 4,
					"headshotUrl": "https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/1col/image.png",
					"flagUrl": "GBR.jpg",
					"_id": "66e79c1ba095f6f0f9edf02a"
				},
				{
					"name": "Oscar PIASTRI",
					"nationality": "AUS",
					"number": 81,
					"headshotUrl": "https://www.formula1.com/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/1col/image.png",
					"flagUrl": "AUS.jpg",
					"_id": "66e79c1ba095f6f0f9edf02b"
				}
			],
			"__v": 0
		},
		{
			"_id": "66e79c20a095f6f0f9edf03e",
			"name": "Mercedes",
			"teamColour": "#6CD3BF",
			"teamLogoUrl": "Mercedes.png",
			"drivers": [
				{
					"name": "Lewis HAMILTON",
					"nationality": "GBR",
					"number": 44,
					"headshotUrl": "https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/1col/image.png",
					"flagUrl": "GBR.jpg",
					"_id": "66e79c20a095f6f0f9edf03f"
				},
				{
					"name": "George RUSSELL",
					"nationality": "GBR",
					"number": 63,
					"headshotUrl": "https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/1col/image.png",
					"flagUrl": "GBR.jpg",
					"_id": "66e79c20a095f6f0f9edf040"
				}
			],
			"__v": 0
		},
		{
			"_id": "66e79c27a095f6f0f9edf055",
			"name": "Red Bull Racing",
			"teamColour": "#3671C6",
			"teamLogoUrl": "Red Bull Racing.png",
			"drivers": [
				{
					"name": "Max VERSTAPPEN",
					"nationality": "NED",
					"number": 1,
					"headshotUrl": "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png",
					"flagUrl": "NED.jpg",
					"_id": "66e79c27a095f6f0f9edf056"
				},
				{
					"name": "Sergio PEREZ",
					"nationality": "MEX",
					"number": 11,
					"headshotUrl": "https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/1col/image.png",
					"flagUrl": "MEX.jpg",
					"_id": "66e79c27a095f6f0f9edf057"
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
name: nome da equipe<br>

A partir disso ocorre a chamada de uma API externa e o resultado é tratado, remapeado e cadastrado no Banco de Dados.

Exemplo de requisição:

```
{
   "name": "Red Bull Racing"
}
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
		"_id": "66e79c27a095f6f0f9edf055",
		"name": "Red Bull Racing",
		"teamColour": "#3671C6",
		"teamLogoUrl": "Red Bull Racing.png",
		"drivers": [
			{
				"name": "Max VERSTAPPEN",
				"nationality": "NED",
				"number": 1,
				"headshotUrl": "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png",
				"flagUrl": "NED.jpg",
				"_id": "66e79c27a095f6f0f9edf056"
			},
			{
				"name": "Sergio PEREZ",
				"nationality": "MEX",
				"number": 11,
				"headshotUrl": "https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/1col/image.png",
				"flagUrl": "MEX.jpg",
				"_id": "66e79c27a095f6f0f9edf057"
			}
		],
		"__v": 0
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
		"_id": "66e79c27a095f6f0f9edf055",
		"name": "Red Bull Racing",
		"teamColour": "#3671C6",
		"teamLogoUrl": "Red Bull Racing.png",
		"drivers": [
			{
				"name": "Max VERSTAPPEN",
				"nationality": "NED",
				"number": 1,
				"headshotUrl": "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png",
				"flagUrl": "NED.jpg",
				"_id": "66e79c27a095f6f0f9edf056"
			},
			{
				"name": "Sergio PEREZ",
				"nationality": "MEX",
				"number": 11,
				"headshotUrl": "https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/1col/image.png",
				"flagUrl": "MEX.jpg",
				"_id": "66e79c27a095f6f0f9edf057"
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
