const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors());

app.get('/', function(req, res) {
    res.send('Hello from server');
});

app.post('/enroll', function(req, res){
    console.log(req.body);
    res.status(200).send({"message": "Data received"});
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
});