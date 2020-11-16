const Sup = require('../models/SuporteTreinamento');

exports.SupTrein = async (req, res) => {

    const trein = await Trein.create(req.body)
    res.json(trein)
}
