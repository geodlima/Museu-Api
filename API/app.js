const express = require('express');
const cors = require('cors'); // Importe o middleware cors
const app = express();

// Use o middleware cors para permitir solicitações de qualquer origem
app.use(cors());

// Resto da configuração do seu servidor Express
// ...

// Importe as rotas para museus e obras
const museusRoutes = require('./routes/museus');
const obrasRoutes = require('./routes/obras');

// Use as rotas no aplicativo Express
app.use('/api', museusRoutes); // Todas as rotas relacionadas a museus são acessadas em '/api/museus'
app.use('/api', obrasRoutes); // Todas as rotas relacionadas a obras são acessadas em '/api/obras'

// Define a porta na qual o servidor irá escutar, utilizando a porta definida em process.env.PORT ou 3307 como padrão
const port = process.env.PORT || 3307;
app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
});
