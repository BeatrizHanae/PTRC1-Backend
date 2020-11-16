const Sup = require('../models/Suporte');

exports.SupTrein = async (req, res) => {

    const sup = await Sup.create(req.body)
    res.json(sup)
}
