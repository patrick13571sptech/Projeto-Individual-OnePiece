var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", usuarioController.cadastrar);

// router.post("/cadastrar", function (req, res) {
//     usuarioController.cadastrar(req, res);
// })
router.post("/autenticar", usuarioController.autenticar);

module.exports = router;