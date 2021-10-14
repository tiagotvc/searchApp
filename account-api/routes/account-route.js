 
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
 const AccountCtrl = require('../controllers/account-ctrl');
 const router = express.Router();
     
 router.post('/login', AccountCtrl.login);
 router.post('/signup', AccountCtrl.signup);
     
 module.exports = router