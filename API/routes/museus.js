const express = require('express');
const router = express.Router();
const pool = require('../db'); // Importa o pool de conexões com o banco de dados

// Rota GET para listar museus
router.get('/museus', async (req, res) => {
  try {
    // Tenta executar uma consulta SQL para selecionar todos os registros da tabela 'tb_Museu'
    const [rows, fields] = await pool.execute('SELECT * FROM tb_Museu');
    
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


