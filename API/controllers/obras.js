const db = require('../db');

// Função para listar obras de um museu específico
exports.listObras = (req, res) => {
  // Obtém o ID do museu a partir dos parâmetros da solicitação
  const museuId = req.params.museuId;
  
  // Realiza uma consulta SQL para selecionar todas as obras relacionadas a um museu com base no museuId
  db.query('SELECT * FROM tb_obra WHERE idMuseu = ?', [museuId], (err, result) => {
    if (err) {
      // Se houver um erro na consulta, retorna uma resposta de erro com status 500
      return res.status(500).json({ error: err.message });
    }
    // Caso contrário, envia os resultados como JSON na resposta
    res.json(result);
  });
};

