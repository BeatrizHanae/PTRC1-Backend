const Trein = require('../models/SuporteTreinamento');
const Man = require('../models/SuporteManutenção');

exports.RegisterTrein = async (req, res) => {

    const trein = await Trein.create(req.body)
    res.json(trein)
}

exports.RegisterMan = async (req, res) => {

    const man = await Man.create(req.body)
    res.json(man)
}
