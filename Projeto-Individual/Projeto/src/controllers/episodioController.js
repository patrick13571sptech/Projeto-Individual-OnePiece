var episodiosModel = require("../models/episodiosModel"); // Puxa o banco de episódios de One Piece

// Função para buscar episódios por ID
function buscarEpisodiosporId(req, res) {
  var idEpisodios = req.params.idEpisodios;  // Recupera o parâmetro da rota

  episodiosModel.buscarEpisodiosporId(idEpisodios)
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);  // Retorna os episódios encontrados
      } else {
        res.status(204).json([]);  // Nenhum episódio encontrado
      }
    })
    .catch(function (erro) {
      console.log("Houve um erro ao buscar os episódios:", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);  // Retorna erro se falhar
    });
}
module.exports = {
  buscarEpisodiosporId,  // Exporta a função para buscar episódio por ID
};