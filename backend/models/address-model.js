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
     
 const Product = new Schema(
     {
         _id: { type: Number, required: true},
         stringDocument: { type: Object, required: true }
     },
     { timestamps: true },
 )
     
 module.exports = mongoose.model('products', Product)