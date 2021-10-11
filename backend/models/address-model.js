/**
 * Arquivo de modelo de Endereço 
 * 
 * Determina as propriedades do modelo Endereço.
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
         documents: { type: Object, required: true }
     },
     { timestamps: true },
 )
     
 module.exports = mongoose.model('address', documents)