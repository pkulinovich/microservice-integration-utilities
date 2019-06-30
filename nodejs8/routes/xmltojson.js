const express = require('express');
const router = express.Router();
const xmlService = require('../services/xml');


/**
 * Convert xml to json
 * @param req
 * @param res
 * @param next
 * @returns {Object}
 */

function xmlToJson(req, res, next) {
    xmlService.toJson(req.body.xml, req.body.arrays)
        .then(data => (data ? res.json(JSON.parse(data)) : res.sendStatus(204)))
        .catch(err => next(err));
}

module.exports = router;

/**
 * POST /xmltojson
 * Returns xml as json
 */

router.post('/', xmlToJson);
