import axios from 'axios';
import Team from '../models/Team.js';

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

    // Obtém a cor da equipe a partir do primeiro piloto (presumindo que todos os pilotos têm a mesma cor de equipe)
    const teamColour = driversData[0].team_colour;
    
    // Verifica se a equipe já existe no banco de dados
    let team = await Team.findOne({ name: teamName });
    if (team) {
      // Atualiza a equipe existente com os pilotos e a cor da equipe
      team.drivers = driversData.map(driver => ({
        name: driver.full_name,
        nationality: driver.country_code,
        number: driver.driver_number,
        headshotUrl: driver.headshot_url,
      }));
      team.teamColour = teamColour; // Atualiza a cor da equipe
      await team.save();
    } else {
      // Cria uma nova equipe com os pilotos e a cor da equipe
      team = new Team({
        name: teamName,
        teamColour: teamColour, // Adiciona a cor da equipe
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
