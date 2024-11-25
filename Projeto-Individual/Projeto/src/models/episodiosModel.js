
const db = require("../database/config");

async function buscarEpisodiosPorIntervalo(idUsuario, min, max) {
    return db.executar(
        `SELECT e.idEpisodios AS numeroEpisodio, e.fkOds 
         FROM episodios AS e 
         JOIN usuario AS u ON e.fkUsuario = u.idUsuario 
         WHERE u.idUsuario = ? AND e.idEpisodios BETWEEN ? AND ?`,
        [idUsuario, min, max]
    );
}

module.exports = { buscarEpisodiosPorIntervalo };



