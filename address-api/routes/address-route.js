 
/**
 * Arquivo de rotas da API 
 * 
 * Seta as rotas da API.
 * 
 * Data de criação:2021/10/14
 * 
 * Criador: Tiago Machado Carvalho
 * 
 */

 const express = require('express');
 const AddressCtrl = require('../controllers/address-ctrl');
 const router = express.Router();
     
 router.get('/getAddressByName', AddressCtrl.getAllDocuments);
     
 module.exports = router