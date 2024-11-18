var database = require("../database/config");

function buscarodsporId(fkOds) {
  var instrucaoSql = `
    SELECT 
      e.idEpisodios AS numero_episodio, 
      e.nomeEpisodio, 
      e.categorizacaoEpisodio, 
      CASE 
        WHEN e.fkOds = 1 THEN 'Erradicação da Pobreza'
        WHEN e.fkOds = 2 THEN 'Fome zero e agricultura sustentável'
        WHEN e.fkOds = 3 THEN 'Saúde e bem estar'
        WHEN e.fkOds = 4 THEN 'Educação de Qualidade'
        WHEN e.fkOds = 5 THEN 'Igualdade de gênero'
        WHEN e.fkOds = 6 THEN 'Água potável e saneamento'
        WHEN e.fkOds = 7 THEN 'Energia Limpa e acessível'
        WHEN e.fkOds = 8 THEN 'Trabalho decente e crescimento econômico'
        WHEN e.fkOds = 9 THEN 'Indústria, inovação e infraestrutura'
        WHEN e.fkOds = 10 THEN 'Redução das desigualdades'
        WHEN e.fkOds = 11 THEN 'Cidades e comunidades sustentáveis'
        WHEN e.fkOds = 12 THEN 'Consumo e produção responsáveis'
        WHEN e.fkOds = 13 THEN 'Ação contra a mudança global do clima'
        WHEN e.fkOds = 14 THEN 'Vida na Água'
        WHEN e.fkOds = 15 THEN 'Vida Terrestre'
        WHEN e.fkOds = 16 THEN 'Paz, justiça e instituições eficazes'
        WHEN e.fkOds = 17 THEN 'Parcerias e meios de implementação'
        ELSE 'Outros'
      END AS descricaoOds,
      o.itemOds
    FROM episodios AS e
    JOIN ods AS o
    ON e.fkOds = o.idOds
    WHERE e.fkOds = ${fkOds};
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `
    SELECT idOds, itemOds
    FROM ods;
  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = { buscarodsporId, listar };