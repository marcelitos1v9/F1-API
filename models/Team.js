import mongoose from "mongoose";

// Schema para os pilotos
const driverSchema = new mongoose.Schema({
  name: String,
  nationality: String,
  number: Number,
  headshotUrl: String, // URL da imagem do piloto
  flagUrl: String, // URL da bandeira do país do piloto
});

// Schema para a equipe de Fórmula 1
const teamSchema = new mongoose.Schema({
  name: String,
  foundationYear: Number,
  base: String,
  teamColour: String, // Cor da equipe
  teamLogoUrl: String, // URL da imagem da scuderia
  drivers: [driverSchema], // Array de pilotos aninhados
});

// Modelo da equipe
const Team = mongoose.model('Team', teamSchema);

export default Team;
