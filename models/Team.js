import mongoose from "mongoose";

// Schema para os pilotos
const driverSchema = new mongoose.Schema({
  name: String,
  nationality: String,
  number: Number,
  headshotUrl: String, // URL da imagem do piloto
});

// Schema para a equipe de Fórmula 1
const teamSchema = new mongoose.Schema({
  name: String,
  foundationYear: Number,
  base: String,
  drivers: [driverSchema], // Array de pilotos aninhados
});

// Modelo da equipe
const Team = mongoose.model('Team', teamSchema);

export default Team;
