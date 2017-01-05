var Schema = require('mongoose').Schema


var solicitudeSchema = new Schema({
    id:             "Number",
    interestRate:   "Number",
    amount:         "Number",
    wayToPay:       "Number",
    description:    "String",
    created:        "Date",
    updated:        "Date",
    createby:       "Number"
})

module.exports = solicitudeSchema

