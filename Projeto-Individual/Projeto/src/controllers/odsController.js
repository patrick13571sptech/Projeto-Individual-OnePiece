var odsModel = require("../models/odsModel");  // Modelo para ODS

// Função para buscar ODS por ID
function buscarodsporId(req, res) {
  var idOds = req.params.idOds;  // Recupera o ID do ODS a partir da URL

  odsModel.buscarodsporId(idOds)
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);  // Retorna o ODS encontrado
      } else {
        res.status(204).json([]);  // Nenhum ODS encontrado
      }
    })
    .catch(function (erro) {
      console.log("Houve um erro ao buscar ODS:", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);  // Retorna erro se falhar
    });
}
module.exports = {
  buscarodsporId,  // Exporta a função para buscar ODS por ID
};