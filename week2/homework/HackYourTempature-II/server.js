const { request, response } = require('express');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
//handlebars
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: false }));
//paresing data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// read
app.get('/', (request, response) => response.render('index'));
app.post('/weather', (equest, response) => {
    const cityName = request.body.cityName;
    response.send(cityName);
});

const PORT = process.env.port || 3000;
app.listen(PORT, (err) => {
    if (err) {
        console.log(`something went wrong ${err}`);
    } else {
        console.log(`listening for PORY ${PORT}`);
    }
});