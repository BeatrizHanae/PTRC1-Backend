const Contatos = require('../models/Contatos');

exports.registerContato = async (req, res) => {

    const Constatos = await Contatos.create(req.body)
    res.json(Constatos)
}

