const Sup = require('../models/SuporteTreinamento');

exports.SupTrein = async (req, res) => {

    const sup = await Sup.create(req.body)
    res.json(sup)
}
