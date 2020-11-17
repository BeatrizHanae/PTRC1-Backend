const Prods = require('../models/Prods')


exports.registerProd = async (req, res) => {

    const prod = await Prods.create(req.body)
    res.json(prod)
}

exports.pesquisarProd = async (req, res) => {
    const prod = await Prods.findAll({
        where: {NOME: req.body.NOME}
    })
    if(prod == ''){
        res.json({error: 'Produto não existe.'})
    }
    else{
        res.json(prod)
    }
}

exports.listarProds = async (req, res) => {
    const prod = await Prods.findAll(req.body)
    res.json(prod)
}
