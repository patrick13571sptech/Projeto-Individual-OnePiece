const db = require("../database/config");

async function verificarExistencia(email) {
    const resultado = await db.executar('SELECT * FROM usuario WHERE email = ?', [email]);
    return resultado.length > 0;  // Se a consulta retornar algo, significa que o email já existe
}

async function cadastrar(nome, email, senha) {
    const resultado = await db.executar(
        'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)',
        [nome, email, senha]
    );
    return resultado;
}

async function autenticar(email, senha) {
    return db.executar("SELECT email, senha FROM usuario WHERE email = ? AND senha = ?", [email, senha]);
}

module.exports = { verificarExistencia, cadastrar, autenticar };