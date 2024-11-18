var express = require("express");
var router = express.Router();

var episodioController = require("../controllers/episodioController");

// Rota para buscar episódios por ID do episódio
router.get("/:idEpisodios", function (req, res) {
  episodioController.buscarEpisodiosporId(req, res);  // Incluir episódios
});

// Rota para cadastrar novo episódio
router.post("/cadastrar", function (req, res) {
  episodioController.cadastrar(req, res);  //cadastro de novo episódio
})

module.exports = router;