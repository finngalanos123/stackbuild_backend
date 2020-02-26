// Express Validator
const {body} = require('express-validator');
const db = require('../models');

const rules = [
    body('email').not().isEmpty().withMessage('E-mail is required').isEmail().withMessage('E-mail is invalid')
];

module.exports = {
    rules
};
