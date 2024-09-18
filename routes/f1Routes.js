import express from "express";
const router = express.Router();
import teamController from "../controllers/f1Controller.js"; // Verifique o caminho

// Endpoint para listar todas as equipes
router.get("/teams", teamController.getAllTeams);

// Endpoint para cadastrar ou atualizar uma equipe
router.post("/team", teamController.createOrUpdateTeamByName);

// Endpoint para deletar uma equipe
router.delete("/team/:id", teamController.deleteTeam);

// Endpoint para alterar uma equipe
router.put("/team/:id", teamController.updateTeam);

// Endpoint para listar uma única equipe por ID
router.get("/team/:id", teamController.getOneTeam);

// Endpoint para listar uma única equipe por nome
router.get("/team/name/:name", teamController.getOneTeamByName);

export default router;
