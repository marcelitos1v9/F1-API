import express from "express";
import path from "path";
import url from "url";
import mongoose from "./config/connect_db.js";
import f1Routes from "./routes/f1Routes.js";
import cors from "cors";  // Importando o pacote cors

// Obtendo o diretório atual
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configuração CORS
app.use(cors());  // Adicionando o middleware CORS

// Configuração do express para a requisição
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Definindo o diretório "global" como estático para servir imagens de bandeiras e logos
app.use('/static', express.static(path.join(__dirname, 'global')));

// Iniciando a conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error);
  });

// Rotas
app.use("/", f1Routes);

// Rodando a API na porta 4000
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log("Erro ao iniciar o servidor:", error);
  } else {
    console.log(`API rodando em http://localhost:${port}.`);
  }
});
