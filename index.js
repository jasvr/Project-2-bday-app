const express = require('express');
const app = express();
const hbs = require('express-handlebars');

app.set('view engine', 'hbs');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layouts'
}))

app.use(require ("./routes/index"));

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

//Run app, then load http://localhost:3000 in a browser to see the output.