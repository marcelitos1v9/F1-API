import express from "express";
import mongoose from "mongoose";
import f1Routes from "./routes/f1Routes.js"; // Rotas de Fórmula 1

const app = express();

// Configuração do express para a requisição
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", f1Routes);

// Iniciando a conexão com o MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-f1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Conectado ao MongoDB");
}).catch((error) => {
  console.error("Erro ao conectar ao MongoDB:", error);
});

// Rodando a API na porta 4000
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log("Erro ao iniciar o servidor:", error);
  } else {
    console.log(`API rodando em http://localhost:${port}.`);
  }
});
