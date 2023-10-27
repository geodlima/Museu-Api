const Sequelize = require('sequelize');
const sequelize = require('../db');

// Define um modelo chamado 'Museu' que representa uma tabela no banco de dados
const Museu = sequelize.define('Museu', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
  },
  numero: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descri: {
    type: Sequelize.STRING(1000),
  },
  img: {
    type: Sequelize.BLOB('long'),
  },
  historia: {
    type: Sequelize.STRING(1000),
  },
});

// Exporta o modelo 'Museu' para ser usado em outras partes da aplicação
module.exports = Museu;

