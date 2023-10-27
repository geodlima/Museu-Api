const mysql = require('mysql2/promise');

// Cria um pool de conexões para o banco de dados MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Douglas5',
  database: 'museus',
});

// Exporta o pool de conexões para ser usado em outras partes do aplicativo
module.exports = pool;


