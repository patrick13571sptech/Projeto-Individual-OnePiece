const db = require("../database/config");

async function buscarEpisodiosporId(idUsuario) {
    return db.executar(
      "SELECT u.nome, e.idEpisodios as número_episódio, e.nomeEpisodio, e.categorizacaoEpisodio as humor_episódio, o.idOds FROM episodios as e JOIN usuario as u ON e.fkUsuario = u.idUsuario JOIN ods as o ON e.fkOds = o.idOds WHERE u.idUsuario = ?", [idUsuario]
    );
}

module.exports = { buscarEpisodiosporId };