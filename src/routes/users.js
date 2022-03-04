const express = require('express');

const router = express.Router(); //Router() importado na biblioteca express

//todas essas rotas já possuem o /users por padrão vindo do app.js
router.get('/',(req,res) => {
    res.send({message: 'Método GET de Usuários funcionando corretamente'})
});

router.post('/',(req,res) => {
    //res.send({message: 'Método POST de Usuários funcionando corretamente'})
    let obj = req.query;
    return res.send({message: `Recebido Nome ${obj.nome}`})
});

router.post('/create',(req,res) => {
    res.send({message: 'Usuário Criado com sucesso!'})
});

module.exports = router; //não esquecer
