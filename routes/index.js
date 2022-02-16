const express = require('express');

const router = express.Router(); //Router() importado na biblioteca express

router.get('/',(req,res) => {
    res.send({message: 'Método GET funcionando corretamente'})
});

router.post('/',(req,res) => {
    res.send({message: 'Método POST funcionando corretamente'})
});

module.exports = router; //não esquecer

