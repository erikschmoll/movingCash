var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override')
    mongoose = require('mongoose')
    SolicitudeService = require('./service/solicitude.service.js');

    var _SolicitudeService = new SolicitudeService()
    _SolicitudeService.ini(mongoose);

    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(methodOverride());

    var router = express.Router();

    router.get('/', (req, res)=>{
        res.send("Hello world!");
    });
    router.get("/solicitudes",_SolicitudeService.findAll);

    app.use(router);


    mongoose.connect('mongodb://eschmoll:password@127.0.0.1:27017/movingCash',(err, res) =>{
    //mongoose.connect('mongodb://localhost/movingCash',(err, res) =>{
        if(err) {
            console.log('ERROR: connecting to Database. ' + err);
        }
        app.listen(8080, ()=>{
            console.log("Node serve running on http://localhost:8080");
        }); 
    })



/*
    var Schema = mongoose.Schema
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

    var Todo = mongoose.model('solicitude', solicitudeSchema);
    // Create a todo in memory
    var todo = new Todo({amount: 1000, interestRate: 2, description: 'Getting there...'});
    todo.save(function(err){
    if(err)
        console.log(err);
    else
        console.log(todo);
    });*/



