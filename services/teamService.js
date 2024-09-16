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

    // Pega a cor da equipe do primeiro piloto (todos os pilotos têm a mesma cor de equipe)
    const teamColour = `#${driversData[0].team_colour}`;

    // Caminho da logo da equipe
    const teamLogoUrl = `/static/teams/${teamName}.png`;  // Logo da equipe

    // Mapeia os dados dos pilotos para o formato desejado
    const updatedDrivers = driversData.map(driver => {
      const flagUrl = `/static/flags/${driver.country_code}.jpg`;  // Bandeira do piloto com extensão .jpg
      console.log(`Flag URL: ${flagUrl}`);  // Adiciona log para depuração

      return {
        name: driver.full_name,
        nationality: driver.country_code,
        number: driver.driver_number,
        headshotUrl: driver.headshot_url,
        flagUrl: flagUrl,
      };
    });

    // Cria ou atualiza a equipe com os dados dos pilotos, cor e logo
    let team = await Team.findOne({ name: teamName });
    if (team) {
      team.drivers = updatedDrivers;
      team.teamLogoUrl = teamLogoUrl;
      team.teamColour = teamColour;
      await team.save();
      console.log(`Equipe ${teamName} atualizada.`);
    } else {
      team = new Team({
        name: teamName,
        teamLogoUrl: teamLogoUrl,  // Adiciona a logo da equipe
        teamColour: teamColour,    // Adiciona a cor da equipe
        drivers: updatedDrivers,
      });
      await team.save();
      console.log(`Equipe ${teamName} criada.`);
    }
  } catch (error) {
    console.error("Erro ao buscar e atualizar a equipe:", error);
  }
};

export default { fetchAndUpdateTeamByName };
