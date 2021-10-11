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

            const docs = await documents.findOne();
            
            res.json({name:docs})

            
            /* await documents.find({}, (err, documentss) => {
                if (err) {
                    return res.status(400).json({ success: false, error: err })
                }
                if (!documentss.length) {

                    return res
                        .status(404)
                        .json({ success: false, error: `Moeda não encontrada` })
                }
                return res.status(200).json({ success: true, data: documentss })
            }).catch(err => console.log(err)) */
        }
     module.exports = {
        getAllDocuments,  
     }