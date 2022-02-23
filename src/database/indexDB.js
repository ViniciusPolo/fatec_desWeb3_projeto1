const Sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

const conexao = new Sequelize(dbConfig)

try{
    conexao.authenticate();
    console.log('Conexao estabelecida!')

} catch (error) {
    console.log('Conexao não estabelecida!')

}

module.exports = conexao