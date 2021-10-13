/**
 * Arquivo de controler da API de catalogo 
 * 
 * Contém todas as regras de negócio da API.
 * 
 * Data de criação:2021/08/15
 * 
 * Ultimo Update:2021/08/17
 * -- Mudança: Feito code review, enxugado regras de negócio,
 *    refatorado lógica de cache para aumento de velocidade
 *    de resposta.
 * 
 * Criador: Tiago Machado Carvalho
 * 
 */


 const documents = require('../models/documents-model.');
 
     
     /* API de produto, espera um ID e um TYPE como parametro e retorna 
        um produto que pode ser complete (contendo todos os campos do model)
        ou compact (contendo apenas alguns campos do model).
        Tem como retorno um JSON contendo os respectivos campos do model
        e o status de sucess true ou false e o status da requisição que pode
        ser 200 ou 404 , no caso do 404 retorna uma mensagem no lugar dos
        campos */
     

getAllDocuments = async (req, res) => {

            let {payload} = req.query;
            let limit = 10;
            let page = 1;
            let news = new RegExp('/.*'+payload+'$/g');
            console.log(news);
            
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