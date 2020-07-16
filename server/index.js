const express = require('express');
const bodyParser = require('body-parser');
const  cors = require('cors')
var countries = require('./countries.json');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.options('*', cors())

app.post('/submit', (req, res) => {
    var formContact = req.body;
    let response={status:'400'};
    if(formContact.lastName!=null && formContact.firstName!=null && formContact.country!=null && formContact.email!=null){
        response.status='200';
        response.message='success';
        return res.json(response);
    }
    response.status='400';
    response.message="Missing field";
    return res.json(response);

});
app.get('/countries', (req, res) => {
    let response={};
    response.countries=countries;
    return res.json(response);
});

app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);