var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var mongoose = require('mongoose')
var app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var Event = require('./models/Event.js')

app.use(cors())

app.get('/events', async (req, res) => {
    var events = await Event.find({});
    res.send(events);
})

app.post('/events', (req, res) => {
    var eventData = req.body;
    var event = new Event(eventData);
    
    event.save((err, result) => {
        if (err) {
            console.log("error saving event.")
        }

        res.sendStatus(200);
    })
})

mongoose.connect('mongodb://admin:admin@ds133776.mlab.com:33776/events_db')

app.listen(3000)