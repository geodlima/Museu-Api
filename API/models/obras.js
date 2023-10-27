const Sequelize = require('sequelize');
const sequelize = require('../db');

// Define um modelo chamado 'Obra' que representa uma tabela no banco de dados
const Obra = sequelize.define('Obra', {
  nome_obra: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descri_obra: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  imagem: {
    type: Sequelize.BLOB('long'),
  },
  data_obra: {
    type: Sequelize.DATE,
  },
});

// Exporta o modelo 'Obra' para ser usado em outras partes da aplicação
module.exports = Obra;

