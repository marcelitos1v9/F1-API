//Configurando o dotenv
import * as dotenv from 'dotenv';
dotenv.config()

// Importando o mongoose
import mongoose from "mongoose";

const connect = () => {
  mongoose.connect(process.env.MONGO_URI);
};

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("Erro ao conectar com o mongoDB.");
});

connection.on("open", () => {
  console.log("Conectado ao MongoDB");
});

connect();

export default mongoose;