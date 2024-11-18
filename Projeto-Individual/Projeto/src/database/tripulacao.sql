
-- Você precisa executar os comandos no banco de dados para criar as tabelas,

CREATE DATABASE tripulacao;
USE tripulacao;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45) UNIQUE,
senha VARCHAR(45)
);

CREATE TABLE ods (
idOds INT PRIMARY KEY AUTO_INCREMENT,
itemOds VARCHAR(45)
);

CREATE TABLE episodios (
idEpisodios INT AUTO_INCREMENT,
nomeEpisodio VARCHAR(90) NOT NULL,
categorizacaoEpisodio VARCHAR(45) NOT NULL, CONSTRAINT chkcategorizacao CHECK (categorizacaoEpisodio IN ('Feliz','Triste','Misterioso','Plot Twist','Suspense','Reflexivo','Raiva')),
fkUsuario INT NOT NULL,
fkOds INT,
CONSTRAINT fkUsuarioEpisodio FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
CONSTRAINT fkOdsEpisodio FOREIGN KEY (fkOds) REFERENCES ods(idOds),
PRIMARY KEY (idEpisodios, fkUsuario)
);

INSERT INTO usuario VALUES 
(DEFAULT, 'Patrick', 'patrick.silva@sptech.school','Patrick123!');

INSERT INTO ods VALUES

(DEFAULT,'Erradicação da Pobreza'),
(DEFAULT,'Fome Zero e Agricultura Sustentável'),
(DEFAULT,'Saúde e Bem-estar'),
(DEFAULT,'Educação de qualidade'),
(DEFAULT,'Igualdade de Gênero'),
(DEFAULT,'Água potável e saneamento'),
(DEFAULT,'Energia Limpa e acessível'),
(DEFAULT,'Trabalho decente e crescimento econômico'),
(DEFAULT,'Industria, inovação e infraestrutura'),
(DEFAULT,'Redução das desigualdades'),
(DEFAULT,'Cidades e comunidades sustentáveis'),
(DEFAULT,'Consumo e produção responsáveis'),
(DEFAULT,'Ação contra a mudança global do clima'),
(DEFAULT,'Vida na água'),
(DEFAULT,'Vida terrestre'),
(DEFAULT,'Paz, justiça e instituições eficazes'),
(DEFAULT,'Parcerias e meios de implementação');

INSERT INTO episodios VALUES

(DEFAULT, 'Eu Sou Luffy! O Homem que Vai Ser O Rei dos Piratas!','Feliz',1, 16),
(DEFAULT, 'O Grande Espadachim Aparece! O Caçador de Piratas, Roronoa Zoro','Misterioso',1, 17),
(DEFAULT, 'Morgan vs. Luffy! Quem É Aquela Linda Misteriosa?','Suspense',1,10),
(DEFAULT, 'O Passado de Luffy! Shanks, O Ruivo, Aparece!','Reflexivo',1,11),
(DEFAULT, 'Medo, Poder Misterioso! O Palhaço Pirata, Capitão Buggy!','Suspense',1,11),
(DEFAULT, 'Situação Desesperadora! Mohji, O Domador, Contra Luffy!','Suspense',1,NULL),
(DEFAULT, 'Grande Duelo! Zoro, O Espadachim vs. Cabaji, O Acrobata!!','Plot Twist',1,17),
(DEFAULT, 'Quem Será O Vencedor? Confronto das Habilidades da Akuma no Mi!','Suspense',1,1), -- LUFFY DEIXA O TESOURO PARA TRÁS, PARA A CIDADE EM QUE BUGGY PILHOU POR MESES, NÃO DEIXANDO-OS NA POBREZA.
(DEFAULT, 'Honorável Mentiroso? Capitão Usopp','Suspense',1,17), 
(DEFAULT, 'O Homem Mais Estranho do Mundo! Jango, O Hipnotizador!','Raiva',1,16); -- JANGO DESEJA HIPNOTIZAR KAYA PARA MUDAR O TESTAMENTO E MATA-LA. 