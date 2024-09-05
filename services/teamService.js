import axios from "axios";
import Team from "../models/Team.js";

// Função para buscar dados da API OpenF1 e atualizar a equipe com base no nome
const fetchAndUpdateTeamByName = async (teamName) => {
  try {
    // URL da API OpenF1 para pilotos da equipe
    const apiUrl = `https://api.openf1.org/v1/drivers?team_name=${teamName}&session_key=9158`;

    // Requisição para a API OpenF1
    const response = await axios.get(apiUrl);
    const driversData = response.data;

    // Verifica se dados dos pilotos foram encontrados
    if (!driversData || driversData.length === 0) {
      throw new Error("Pilotos não encontrados na API.");
    }

    // Cria ou atualiza a equipe com os dados dos pilotos
    let team = await Team.findOne({ name: teamName });
    if (team) {
      // Atualiza a equipe existente com os pilotos
      team.drivers = driversData.map(driver => ({
        name: driver.full_name,
        nationality: driver.country_code,
        number: driver.driver_number,
        headshotUrl: driver.headshot_url,
        team_colour: driver.team_colour
      }));
      await team.save();
    } else {
      // Cria uma nova equipe com os pilotos
      team = new Team({
        name: teamName,
        team_colour : team_colour,
        drivers: driversData.map(driver => ({
          name: driver.full_name,
          nationality: driver.country_code,
          number: driver.driver_number,
          headshotUrl: driver.headshot_url,
        })),
      });
      await team.save();
    }
  } catch (error) {
    console.error("Erro ao buscar e atualizar a equipe:", error);
  }
};

export default { fetchAndUpdateTeamByName };
