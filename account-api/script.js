/**
 * Arquivo de script do Mongo
 * Criado para inserir os dados contidos no users.json
 * para dentro do banco de dados.
 * 
 * Data:2021/10/14
 * Criador: Tiago Machado Carvalho
 * 
 */


 const Account = require('./models/account-model');
 let dbData = require('./json/users.json');
 const db = require('./db');
 
 db.on('error', console.error.bind(console, 'MongoDB connection error:'));
 
 async function databaseInitialize(){
 
 
     await dbData.forEach(async function (doc, i) {
        
         let itens = { email:doc.email , password:doc.password};
 
         const account = new Account(itens);
 
         account
             .save()
             .then(() => {
                 console.log("Usuário adicionado");
             })
             .catch((error) => {
                 console.log("Usuário não adicionado " + error);
             })
       });
 }
 
 databaseInitialize();