const app = require('./config/server');
process.env.TZ = 'America/Sao_Paulo';

const app2 = require('./config/database');
app2.sync()
    .then(() => {
        console.log('Banco de dados sincronizado');
    })
    .catch(err => {
        console.error('Erro ao sincronizar o banco de dados:', err);
    });

const porta = 3001;

app.listen(porta, () => console.log(`API rodando na porta ${porta}`));
