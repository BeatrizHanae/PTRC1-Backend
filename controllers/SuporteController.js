const Sup = require('./sup');

exports.SupTrein = async (req, res) => {

    const sup = await Sup.create(req.body)
    res.json(sup)
}