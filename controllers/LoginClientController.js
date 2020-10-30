const express = require ("express");
const bcrypt = require ('bcryptjs');
const {ProCli} = require('../db');
const Client = ProCli[1];
const moment = require('moment');
const jwt = require('jwt-simple');


exports.registerClient = async (req, res) => {

    req.body.SENHA = bcrypt.hashSync(req.body.SENHA);
    const client = await Client.create(req.body)
    res.json(client)
}

exports.loginClient =  async (req, res) => {
    const client = await Client.findOne({
        where: {USERNAME: req.body.USERNAME}
    })
    if(client){ //se o usuário existe faz a comparação de senha inserida com a criptografada
        const same = bcrypt.compareSync(req.body.SENHA, client.SENHA) 
        if(same){
            res.json({success: createToken(client)})
        }else{
            res.json({error: 'Senha incorreta!'})
        }
    }else{
        res.json({error: 'Usuário não existe.'})
    }
}

const createToken = (client) =>{ 
    const payload = {
        clientId: client.id,
        cretedAt: moment().unix(), //tempo de criação do token
        expiredAt: moment().add(5, 'minutes').unix() //o tempo de expiração do token
    }

    return jwt.encode(payload, 'token')
}

exports.deleteClient = async (req, res) =>{
    await Client.destroy({
        where: {id: req.params.id}
    })
    res.json({success:'Apagado' });
}
