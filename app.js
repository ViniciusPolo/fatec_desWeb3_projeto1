const express = require('express');

//instaciar o express
const app = express(); //A constante app está recebendo a biblioteca importada express
// Deve se instalar o express npm install express--save

const indexRoute = require('./routes/index.js'); //importa a rota e abaixo informa que o app vai usá-la
const usersRoute = require('./routes/users.js');
/*
Bloco de testes, rota root enviado para o diretório routes
//criar a primeira rota
app.get('/',(req,res) => {
    //res.send({message: 'Rota Raiz Encontrada'})
    obj = req.query;
    return res.send({message: `Recebido Nome ${obj.nome}`})//informado na rota no browser
});
*/

app.use('/', indexRoute)
app.use('/users', usersRoute);

//configurar a porta para execução  do aplicativo

app.set('porta', 3001); //set port

app.listen(app.get('porta'), function(){
    console.log('Servidor rodando na porta: '+ app.get('porta'))
});

module.exports = app;