var mysql = require("mysql2");

// Configuração do banco de dados usando variáveis do .env
var dbConfig = {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
};

// Criação do pool de conexões
var pool = mysql.createPool(dbConfig);

// Função para executar consultas + array para passar os parâmetros que serão consultados e inseridos com "?" nos models.
function executar(instrucao, parametros = []) {
    if (process.env.AMBIENTE_PROCESSO !== "producao" && process.env.AMBIENTE_PROCESSO !== "desenvolvimento") {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM .env OU dev.env OU app.js\n");
        return Promise.reject("AMBIENTE NÃO CONFIGURADO EM .env");
    }

    return new Promise(function (resolve, reject) {
        pool.query(instrucao, parametros, function (erro, resultados) {
            if (erro) {
                console.error("Erro ao executar SQL:", erro);
                reject(erro);  // Retorna o erro se houver
            } else {
                resolve(resultados);  // Retorna os resultados da query
            }
        });
    });
}

module.exports = {
    executar
};