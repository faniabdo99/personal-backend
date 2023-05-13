const Joi = require('joi');
// The request schema
const ContactRequestSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    message: Joi.string().min(5).max(1500).required(),
})
module.exports = { ContactRequestSchema }