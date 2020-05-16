var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(cors())

const cities = [{ id: 0, name: "Tomsk", tempepature: 13, windSpeed: 3, weatherType: "Sunny" }, { id: 1, name: "Moscow", tempepature: 20, windSpeed: 2, weatherType: "Rainy" }]


app.get('/get-city', function (req, res) {
    console.log(req.query);
    const city = cities.find((city => city.id === Number(req.query.id)));
    console.log(city);
    setTimeout(() => {
        res.json(city);
    }, 3000);
});

app.post('/save-city', (req, res) => {
    console.log(req.body.name);
})

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});