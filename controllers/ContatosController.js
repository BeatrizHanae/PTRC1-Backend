const Prods = require('../models/Contatos')
const moment = require('moment');
const Contatos = require('../models/Contatos');

exports.registerContato = async (req, res) => {

    const Constatos = await Contatos.create(req.body)
    res.json(Constatos)
}

