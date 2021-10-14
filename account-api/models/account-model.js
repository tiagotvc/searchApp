/**
 * Arquivo de modelo de Account 
 * 
 * Determina as propriedades do modelo account.
 * 
 * Data de criação:2021/10/14
 * 
 * Criador: Tiago Machado Carvalho
 * 
 */

 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
     
 const Account = new Schema(
     {
         email: { type: String, required: true},
         password: { type: String, required: true },
         keyword: { type: String, required: false}
     },
     { timestamps: true },
 )
     
 module.exports = mongoose.model('accounts', Account)