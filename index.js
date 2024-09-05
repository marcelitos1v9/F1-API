import express from "express";
const app = express();
import mongoose from "mongoose";
import f1Routes from "./routes/f1Routes.js"; // Rotas de Fórmula 1

// Configuração do express para a requisição
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", f1Routes);

// Iniciando a conexão com o MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-f1"); // Mudando o nome do banco de dados para algo relacionado a F1

// Exemplo de dados de corridas e pilotos de Fórmula 1
app.get("/", (req, res) => {
  const races = [
    {
      title: "GP do Brasil",
      year: 2023,
      location: "Interlagos",
      winner: {
        driver: "Max Verstappen",
        team: "Red Bull Racing",
      },
      details: {
        laps: 71,
        circuitLength: "4.309 km",
        date: "12/11/2023",
      }
    },
    {
      title: "GP de Mônaco",
      year: 2024,
      location: "Monte Carlo",
      winner: {
        driver: "Charles Leclerc",
        team: "Ferrari",
      },
      details: {
        laps: 78,
        circuitLength: "3.337 km",
        date: "26/05/2024",
      }
    },
  ];
  res.json(races);
});

// Rodando a API na porta 4000
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando em http://localhost:${port}.`);
});
