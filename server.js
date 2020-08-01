require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const alumniController = require('./controller/daftarAlumni_control');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/view/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'main_layout', layoutsDir: __dirname + '/view/' }));
app.set('view engine', 'hbs');

app.listen(3000, () => {
	console.log('Server sedang berjalan di port : 3000');
});

app.use('/', alumniController);