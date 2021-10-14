/**
 * Arquivo de conexão do mongo
 * 
 * Cria a conexão com o mongo
 * 
 * Data de criação:2021/10/14
 * 
 * Criador: Tiago Machado Carvalho
 * 
 */

 const mongoose = require('mongoose');
 const uri = 'mongodb+srv://dev-test-2:dev-test-2@testdbcluster.koma0.mongodb.net/dev-test-2?retryWrites=true&w=majority'
     
 mongoose
     .connect(uri, { useUnifiedTopology: true , useNewUrlParser: true })
     .catch(e => {
         console.error('Connection error', e.message)
     })
     
 const db = mongoose.connection
     
 module.exports = db