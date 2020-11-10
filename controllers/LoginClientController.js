const bcrypt = require ('bcryptjs');
const Client = require('../models/Clients')
const jwt = require('jsonwebtoken');

process.env.SECRET_KEY = 'secret'

//Cadastro do cliente
exports.registerClient = (req, res) => {
    const userData = {
      NOME: req.body.NOME,
      USERNAME: req.body.USERNAME,
      CPF: req.body.CPF,
      SENHA: req.body.SENHA
      
    }
     Client.findOne({
        where: {
            USERNAME: req.body.USERNAME
        }
    })

    .then(user => {
        if(!user) {
            bcrypt.hash(req.body.SENHA, 10, (err, hash) => {
                userData.SENHA = hash
                Client.create(userData)
                  .then(user => {
                    res.json({ status: user.USERNAME + ' Registered!' })
                  })
                  .catch(err => {
                    res.send('error: ' + err)
                  })
              })
            } else {
                res.json({ error: 'User already exists' })
              }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
}

//Login do cliente  
exports.loginClient =  (req, res) => {
    Client.findOne({
        where: {
            USERNAME: req.body.USERNAME
        }
    })
    .then(client => {
        if(client){ //se o usuário existe faz a comparação de senha inserida com a criptografada
            if(bcrypt.compareSync(req.body.SENHA, client.SENHA)){
                let token = jwt.sign(client.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                res.send(token)
            }
        } else {
            res.status(400).json({error: 'Usuário não existe'})
        }
    })
    .catch(err => {
        res.status(400).json({error: err })
        console.log('-' + err)
    })

}
