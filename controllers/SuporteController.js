const Trein = require('../models/SuporteTreinamento');
const Man = require('../models/SuporteManutencao');

exports.RegisterTrein = async (req, res) => {
    const trein = await Trein.findOne({
        where:{
            DATA: req.body.DATA,
            HORA: req.body.HORA
        }
    })
    if(trein){
        res.json({error: 'Horario não disponivel.'})
    }
    else{
        const trein = await Trein.create(req.body)
        res.json(trein)
    }
}

exports.RegisterManutencao = async (req, res) => {
    const man = await Man.findOne({
        where:{
            DATA: req.body.DATA,
            HORA: req.body.HORA
        }
    })
    if(man){
        res.json({error: 'Horario não disponivel.'})
    }
    else{
        const man = await Man.create(req.body)
        res.json(man)
    }
}
