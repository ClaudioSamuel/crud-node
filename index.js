const sequelize = require('./config/database.js');
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes.js');
const teacherRoutes = require('./routes/teacherRoutes.js');
const courseRoutes = require('./routes/courseRoutes.js');
const evaluationRoutes = require('./routes/evaluationRoutes.js');


const app = express();
const PORT = process.env.PORT || 3000;

// Sincroniza os modelos com o banco de dados
sequelize.sync({ force: true })  // Se force: true, ele irá recriar as tabelas a cada vez que a aplicação iniciar
  .then(() => {
    console.log('Tabelas sincronizadas com sucesso.');
    // Inicie o servidor Express aqui, se necessário
  })
  .catch(err => {
    console.error('Erro ao sincronizar tabelas:', err);
  });


app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/teachers', teacherRoutes);
app.use('/courses', courseRoutes);
app.use('/evaluations', evaluationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

