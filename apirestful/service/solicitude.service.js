

function SolicitudeService() {

    this.ini = (mongoose) =>{
        var Schema = mongoose.Schema,
        SolicitudeScheme = new Schema({
            name: { type: String },
            email: { type: String },
            genre: { type: String, enum: ['male', 'female'] }
        });
        module.exports = mongoose.model('Solicitude', SolicitudeScheme);
    }
    this.findAll = () =>{
        var mongoose = require('mongoose'),
        solicitudedb = mongoose.model('Solicitude');
       // solicitudedb.findAll()
        return SOLI;
    }

}
module.exports = SolicitudeService;