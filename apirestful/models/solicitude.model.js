var Schema = require('mongoose').Schema


var solicitudeSchema = new Schema({
    _id:             "ObjectId",
    interestRate:   "Number",
    amount:         "Number",
    wayToPay:       "Number",
    description:    "String",
    created:        "Date",
    updated:        "Date",
    createby:       "Number"
})

module.exports = solicitudeSchema

