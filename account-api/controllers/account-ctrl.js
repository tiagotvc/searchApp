

 const Account = require('../models/account-model');
 const jwt = require('jsonwebtoken');
 
     
 login = async (req, res) => {
 
     const {email , password} = req.body;
 
     try {

         const user = await Account.findOne({email});

         
         if(user != null){

             if(user.password === password){

                const id = user.email;
                const token = jwt.sign({id}, "jwtSecret",{
                    expiresIn: 300,
                });

                res.json({auth:true, token:token});

             }
             else {
                 res.json({message:"A senha está incorreta", auth:false, valid:'pass'});
             }
         }
         else {
             res.json({message:"Usuário não encontrado", auth:false, valid:'user'});
         }

     }catch (error){
        console.error(error);
     }
 }


 signup = async (req, res) => {
    
    const body = req.body;

    if(!body) {
        return res.json({
            sucess:false,
            message:"Faltando campos"
        });
    }

    const account = new Account(body);

    try {

       const result = await Account.findOne({email:body.email});

       if(result){
           
        return res.json({
            sucess:false,
            message:"Usuário já existente no banco!"
        });

       }
        else {

            try {

                account
                .save()
                .then(() => {
                    return res.json({
                        sucess:true,
                        message:"Usuário criado com sucesso!"
                    });
                });
            }
            catch (error) {
                return res.json({
                    sucess:false,
                    message:'Ocorreu algum erro, tente novamente!'
                });
            }
        }
    }
    catch (error) {
        return res.json({
            sucess:false,
            message:'Ocorreu algum erro, tente novamente!'
        });
    }
}
     
     module.exports = {
         login,  
         signup
     }