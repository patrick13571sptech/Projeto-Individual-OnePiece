var express = require("express");
var router = express.Router();

var odsController = require("../controllers/odsController.js");

// Buscar ODS por ID
router.get("/:idOds", function (req, res) {
  odsController.buscarodsporId(req, res);  // Chama a função para buscar ODS por ID
});

module.exports = router;