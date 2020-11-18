const Orcamentos = require('../models/Orcamento')


exports.registerOrcamento = async (req, res) => {

    const Orcamento = await Orcamentos.create(req.body)
    res.json(Orcamento)
}
