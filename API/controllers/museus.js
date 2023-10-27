const db = require('../db');

// Função para listar todos os museus
exports.listMuseus = (req, res) => {
  // Realiza uma consulta SQL para selecionar todos os registros da tabela 'tb_Museu'
  db.query('SELECT * FROM tb_Museu', (err, result) => {
    if (err) {
      // Se houver um erro na consulta, retorna uma resposta de erro com status 500
      return res.status(500).json({ error: err.message });
    }
    // Caso contrário, envia os resultados como JSON na resposta
    res.json(result);
  });
};

// Função para obter um museu por ID
exports.getMuseuById = (req, res) => {
  // Obtém o ID do museu a partir dos parâmetros da solicitação
  const museuId = req.params.id;
  
  // Realiza uma consulta SQL para selecionar um museu com base no ID fornecido
  db.query('SELECT * FROM tb_Museu WHERE idMuseu = ?', [museuId], (err, result) => {
    if (err) {
      // Se houver um erro na consulta, retorna uma resposta de erro com status 500
      return res.status(500).json({ error: err.message });
    }
    if (result.length === 0) {
      // Se nenhum museu for encontrado com o ID fornecido, retorna uma resposta de erro com status 404
      return res.status(404).json({ message: 'Museu não encontrado' });
    }
    // Caso contrário, envia o primeiro resultado encontrado como JSON na resposta
    res.json(result[0]);
  });
};


