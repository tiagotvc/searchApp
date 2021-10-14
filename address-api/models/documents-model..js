/**
 * Arquivo de modelo de Endereço 
 * 
 * Determina as propriedades do modelo documents.
 * 
 * Data de criação:2021/10/11
 * 
 * Criador: Tiago Machado Carvalho
 * 
 */

 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
     
 const documents = new Schema(
     {
         address: { type: String, required: false}
     },
     { timestamps: true },
 )
     
 module.exports = mongoose.model('documents', documents)