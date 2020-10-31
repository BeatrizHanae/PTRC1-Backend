const express = require ("express");
const {ProCli} = require('./db');
const Prods = ProCli[0];
const moment = require('moment');
const jwt = require('jwt-simple');

exports.registerProd = async (req, res) => {

    const prod = await Prods.create(req.body)
    res.json(prod)
}

const createToken = (prod) =>{ 
    const payload = {
        prodId: prod.id,
        cretedAt: moment().unix(), //tempo de criação do token
        expiredAt: moment().add(5, 'minutes').unix() //o tempo de expiração do token
    }

    return jwt.encode(payload, 'token')
}