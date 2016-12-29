var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override')
    mongoose = require('mongoose')
    SolicitudeService = require('./service/solicitude.service.js');

    var a = new SolicitudeService()
    a.ini(mongoose);

    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(methodOverride());

    var router = express.Router();

    router.get('/', (req, res)=>{
        res.send("Hello world!");
    });

    app.use(router);

    mongoose.connect('mongodb://localhost/Solicitude',(err, res) =>{
        if(err) {
            console.log('ERROR: connecting to Database. ' + err);
        }
        app.listen(3000, ()=>{
            console.log("Node serve running on http://localhost:3000");
        }); 
    })