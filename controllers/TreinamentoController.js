const Trein = require('../models/SuporteTreinamento');

exports.RegisterTrein = async (req, res) => {

    const trein = await Trein.create(req.body)
    res.json(trein)
}
