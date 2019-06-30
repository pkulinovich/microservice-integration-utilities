const parser = require('xml2json');
const logger = console;

/*
 * Options object for toJson
 */

const defaultOptions = {
    object: false,
    reversible: false,
    coerce: false,
    sanitize: true,
    trim: true,
    arrayNotation: false,
    alternateTextNode: false,
};

/*
 * Parses xml data and convert to json
 * @param {String} xmlData
 * @param {Boolean} arrayNotation XML child nodes are always treated as arrays NB
 * @returns {String}
 */

module.exports.toJson = async (xml, arrayNotation) => {
    const options = Object.assign(defaultOptions, {
        arrayNotation: arrayNotation || defaultOptions.arrayNotation,
    });

    const json = parser.toJson(xml, options);

    return json
};
