const express = require('express');
const router = express.Router();
const episodiosModel = require('../models/episodiosModel');

// Rota para buscar dados com base no intervalo de episódios
router.get('/dados', async (req, res) => {
    const { idUsuario, min, max } = req.query;

    if (!idUsuario || !min || !max) {
        return res.status(400).json({ error: "Parâmetros inválidos." });
    }

    try {
        // Busca os episódios com base no intervalo
        const resultados = await episodiosModel.buscarEpisodiosPorIntervalo(idUsuario, min, max);
        console.log("Dados enviados para o frontend:", resultados);
        res.json(resultados); // Retorna os dados para o frontend
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        res.status(500).json({ error: "Erro no servidor ao buscar os dados." });
    }
});

module.exports = router;

