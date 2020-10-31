const express = require ("express");
const {Prods} = require('../db');
const moment = require('moment');
const jwt = require('jwt-simple');

exports.registerProd = async (req, res) => {

    const prod = await Prods.create(req.body)
    res.json(prod)
}


