/**
 * Arquivo de controler da API de Address 
 * 
 * Contém todas as regras de negócio da API.
 * 
 * Data de criação:2021/10/14
 * 
 
 * Criador: Tiago Machado Carvalho
 * 
 */

 const documents = require('../models/documents-model.');
 
     
getAllDocuments = async (req, res) => {

            let {payload} = req.query;
            let {limit} = req.query;
            let {page} = req.query;

            let search = await documents.find({address: {$regex: new RegExp(`${payload}`, 'g')}})
                .limit(limit *1)
                .skip((page -1) * limit)
                .exec()

            let counter = await documents.find({address: {$regex: new RegExp(`${payload}`, 'g')}})
                .count()
                .exec()
                
            res.send({payload: search, count:counter});
        }

     module.exports = {
        getAllDocuments,  
     }