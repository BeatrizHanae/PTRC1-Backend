const express = require ("express");
const {Prods} = require('../db');
const moment = require('moment');
const jwt = require('jwt-simple');

exports.registerProd = async (req, res) => {

    const prod = await Prods.create(req.body)
    res.json(prod)
}

exports.pesquisarProd = async (req, res) => {
    const prod = await Prods.findAll({
        where: {NOME: req.body.NOME}
    })
    if(prod){
    	res.json(prod)
    }
    else{
        res.json({error: 'Produto não existe.'})}
}
