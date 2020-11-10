const Prods = require('../models/Prods')
const moment = require('moment');

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

exports.listarProds = async (req, res) => {
    const prod = await Prods.findAll(req.body)
    res.json(prod)
}
