
var mongoose = require('mongoose')
var SoliScheme = require('../models/solicitude.model.js');

function SolicitudeService() {

    this.ini = () =>{
        var Schema = mongoose.Schema
        module.exports = mongoose.model('solicitude', SoliScheme);
    }
    this.findAll = (req, res) =>{
        var MyModel = mongoose.model('solicitude');
       // var model = new MyModel();
        return MyModel.find({},(err, docs)=>{
            res.send(docs);
        });
    }

}
module.exports = SolicitudeService;