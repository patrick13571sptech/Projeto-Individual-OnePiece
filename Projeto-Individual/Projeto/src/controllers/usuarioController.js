const usuarioModel = require("../models/usuarioModel");
const episodioModel = require("../models/episodiosModel");


async function cadastrar(req, res) {
    var { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ error: "Nome, email e senha são obrigatórios!" });
    }

    try {
        const existe = await usuarioModel.verificarExistencia(email);
        if (existe) {
            return res.status(400).json({ error: "Usuário com esse e-mail já existe!" });
        }

        await usuarioModel.cadastrar(nome, email, senha);
        res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    } catch (erro) {
        console.error("Erro ao cadastrar usuário:", erro);
        res.status(500).json({ error: "Erro ao cadastrar usuário." });
    }
}

async function autenticar(req, res) {
    var { email, senha } = req.body;

    try {
        const usuario = await usuarioModel.autenticar(email, senha);

        if (usuario.length === 1) {
            const idUsuario = usuario[0].idUsuario;
            const episodios = await episodioModel.buscarEpisodiosporId(idUsuario);
            res.status(200).json({
                message: "Autenticação bem-sucedida!",
                usuario: {
                    email: usuario[0].email,
                    nome: usuario[0].nome,
                    episodios
                }
            });
        } else {
            res.status(401).json({ error: "Credenciais inválidas." });
        }
    } catch (erro) {
        console.error("Erro ao autenticar usuário:", erro);
        res.status(500).json({ error: "Erro ao autenticar usuário." });
    }
}

module.exports = {
    autenticar,
    cadastrar
}