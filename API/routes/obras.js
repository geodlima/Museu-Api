const express = require('express');
const router = express.Router();
const pool = require('../db'); // Importa o pool de conexões com o banco de dados

// Rota GET para listar obras de um museu específico
router.get('/obras/:idMuseu', async (req, res) => {
  const museuId = req.params.idMuseu; // Obtém o ID do museu a partir dos parâmetros da solicitação

  try {
    // Tenta executar uma consulta SQL para selecionar as obras relacionadas ao museu especificado
    const [rows, fields] = await pool.execute('SELECT idObra, nome_obra, descri_obra, imagem, data_obra, idMuseu FROM tb_obra WHERE idMuseu = ?', [museuId]);
    
    // Responde com os resultados da consulta em formato JSON
    res.json(rows);
  } catch (error) {
    // Se ocorrer um erro, ele é capturado aqui
    console.error('Erro ao buscar dados do banco de dados:', error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados.' });
  }
});

// Exporta o roteador para ser usado em outros lugares do aplicativo
module.exports = router;

