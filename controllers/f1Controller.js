import teamService from "../services/teamService.js";
import Team from "../models/Team.js";

// Função para listar todas as equipes
const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json({ teams });
  } catch (error) {
    console.error("Erro ao listar equipes:", error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};

// Função para criar ou atualizar uma equipe com base no nome fornecido
const createOrUpdateTeamByName = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Nome da equipe é obrigatório." });
    }

    // Busca e atualiza a equipe com base no nome
    await teamService.fetchAndUpdateTeamByName(name);

    // Recupera a equipe atualizada do banco de dados
    const team = await Team.findOne({ name });
    if (!team) {
      return res.status(404).json({ error: "Equipe não encontrada no banco de dados." });
    }

    res.status(200).json({ team });
  } catch (error) {
    console.error("Erro ao criar ou atualizar a equipe:", error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};

// Função para deletar uma equipe
const deleteTeam = async (req, res) => {
  try {
    const { id } = req.params;
    await Team.findByIdAndDelete(id);
    res.status(204).send(); // No Content
  } catch (error) {
    console.error("Erro ao deletar a equipe:", error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};

// Função para atualizar uma equipe
const updateTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, foundationYear, base, teamColour } = req.body;
    const updatedTeam = await Team.findByIdAndUpdate(
      id,
      { name, foundationYear, base, teamColour }, // Incluindo a cor da equipe na atualização
      { new: true }
    );
    if (!updatedTeam) {
      return res.status(404).json({ error: "Equipe não encontrada." });
    }
    res.status(200).json({ team: updatedTeam });
  } catch (error) {
    console.error("Erro ao atualizar a equipe:", error);
    res.status(500).json({ error: "Erro interno no servidor." });
  } 
};

// Função para listar uma única equipe
const getOneTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const team = await Team.findById(id);
    if (!team) {
      return res.status(404).json({ error: "Equipe não encontrada." });
    }
    res.status(200).json({ team });
  } catch (error) {
    console.error("Erro ao buscar a equipe:", error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};

// Função para listar uma única equipe pelo nome
export const getOneTeamByName = async (req, res) => {
  try {
    const { name } = req.params; // Pega o nome da equipe da URL
    const team = await Team.findOne({ name: name }); // Busca a equipe pelo nome no banco de dados

    if (!team) {
      return res.status(404).json({ error: "Equipe não encontrada." });
    }

    res.status(200).json({ team });
  } catch (error) {
    console.error("Erro ao buscar a equipe:", error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};


export default { getAllTeams, createOrUpdateTeamByName, deleteTeam, updateTeam, getOneTeam, getOneTeamByName };
